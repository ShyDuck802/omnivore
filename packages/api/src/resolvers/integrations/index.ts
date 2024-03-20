import { DeepPartial } from 'typeorm'
import {
  ImportItemState,
  Integration,
  IntegrationType,
} from '../../entity/integration'
import { env } from '../../env'
import {
  DeleteIntegrationError,
  DeleteIntegrationErrorCode,
  DeleteIntegrationSuccess,
  ImportFromIntegrationError,
  ImportFromIntegrationErrorCode,
  ImportFromIntegrationSuccess,
  IntegrationError,
  IntegrationErrorCode,
  IntegrationsError,
  IntegrationsSuccess,
  IntegrationSuccess,
  MutationDeleteIntegrationArgs,
  MutationImportFromIntegrationArgs,
  MutationSetIntegrationArgs,
  QueryIntegrationArgs,
  SetIntegrationError,
  SetIntegrationErrorCode,
  SetIntegrationSuccess,
} from '../../generated/graphql'
import { createIntegrationToken } from '../../routers/auth/jwt_helpers'
import {
  findIntegration,
  findIntegrations,
  getIntegrationClient,
  removeIntegration,
  saveIntegration,
  updateIntegration,
} from '../../services/integrations'
import { analytics } from '../../utils/analytics'
import {
  deleteTask,
  enqueueImportFromIntegration,
} from '../../utils/createTask'
import { authorized } from '../../utils/gql-utils'

export const setIntegrationResolver = authorized<
  SetIntegrationSuccess,
  SetIntegrationError,
  MutationSetIntegrationArgs
>(async (_, { input }, { uid }) => {
  const integrationToSave: DeepPartial<Integration> = {
    ...input,
    user: { id: uid },
    id: input.id || undefined,
    type: input.type || IntegrationType.Export,
    syncedAt: input.syncedAt ? new Date(input.syncedAt) : undefined,
    importItemState:
      input.type === IntegrationType.Import
        ? input.importItemState || ImportItemState.Unarchived // default to unarchived
        : undefined,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    settings: input.settings,
  }
  if (input.id) {
    // Update
    const existingIntegration = await findIntegration({ id: input.id }, uid)
    if (!existingIntegration) {
      return {
        errorCodes: [SetIntegrationErrorCode.NotFound],
      }
    }

    integrationToSave.id = existingIntegration.id
    integrationToSave.taskName = existingIntegration.taskName
  } else {
    // Create
    const integrationService = getIntegrationClient(input.name, input.token)
    // authorize and get access token
    const token = await integrationService.accessToken()
    if (!token) {
      return {
        errorCodes: [SetIntegrationErrorCode.InvalidToken],
      }
    }
    integrationToSave.token = token
  }

  // save integration
  const integration = await saveIntegration(integrationToSave, uid)

  analytics.capture({
    distinctId: uid,
    event: 'integration_set',
    properties: {
      id: integrationToSave.id,
      env: env.server.apiEnv,
    },
  })

  return {
    integration,
  }
})

export const integrationsResolver = authorized<
  IntegrationsSuccess,
  IntegrationsError
>(async (_, __, { uid }) => {
  const integrations = await findIntegrations(uid)

  return {
    integrations,
  }
})

export const integrationResolver = authorized<
  IntegrationSuccess,
  IntegrationError,
  QueryIntegrationArgs
>(async (_, { id }, { uid, log }) => {
  const integration = await findIntegration({ id }, uid)

  if (!integration) {
    log.error('integration not found', id)

    return {
      errorCodes: [IntegrationErrorCode.NotFound],
    }
  }

  return {
    integration,
  }
})

export const deleteIntegrationResolver = authorized<
  DeleteIntegrationSuccess,
  DeleteIntegrationError,
  MutationDeleteIntegrationArgs
>(async (_, { id }, { claims: { uid }, log }) => {
  log.info('deleteIntegrationResolver')

  const integration = await findIntegration({ id }, uid)

  if (!integration) {
    return {
      errorCodes: [DeleteIntegrationErrorCode.NotFound],
    }
  }

  if (integration.taskName) {
    // delete the task if task exists
    await deleteTask(integration.taskName)
    log.info('task deleted', integration.taskName)
  }

  const deletedIntegration = await removeIntegration(integration, uid)
  deletedIntegration.id = id

  analytics.capture({
    distinctId: uid,
    event: 'integration_delete',
    properties: {
      integrationId: deletedIntegration.id,
      env: env.server.apiEnv,
    },
  })

  return {
    integration,
  }
})

export const importFromIntegrationResolver = authorized<
  ImportFromIntegrationSuccess,
  ImportFromIntegrationError,
  MutationImportFromIntegrationArgs
>(async (_, { integrationId }, { claims: { uid }, log }) => {
  const integration = await findIntegration({ id: integrationId }, uid)

  if (!integration) {
    return {
      errorCodes: [ImportFromIntegrationErrorCode.Unauthorized],
    }
  }

  const authToken = await createIntegrationToken({
    uid: integration.user.id,
    token: integration.token,
  })
  if (!authToken) {
    return {
      errorCodes: [ImportFromIntegrationErrorCode.BadRequest],
    }
  }

  // create a task to import all the pages
  const taskName = await enqueueImportFromIntegration(
    integration.id,
    integration.name,
    integration.syncedAt?.getTime() || 0,
    authToken,
    integration.importItemState || ImportItemState.Unarchived
  )
  // update task name in integration
  await updateIntegration(integration.id, { taskName }, uid)

  analytics.capture({
    distinctId: uid,
    event: 'integration_import',
    properties: {
      integrationId,
    },
  })

  return {
    success: true,
  }
})
