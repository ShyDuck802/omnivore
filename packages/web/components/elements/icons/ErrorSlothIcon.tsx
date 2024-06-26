/* eslint-disable functional/no-class */
/* eslint-disable functional/no-this-expression */
import { useCurrentTheme } from '../../../lib/hooks/useCurrentTheme'
import { IconProps } from './IconProps'

import React from 'react'

export function ErrorSlothIcon(): JSX.Element {
  const { currentThemeIsDark } = useCurrentTheme()
  return currentThemeIsDark ? <ErrorSlothIconDark /> : <ErrorSlothIconLight />
}

class ErrorSlothIconDark extends React.Component<IconProps> {
  render() {
    return (
      <svg
        width="151"
        height="151"
        viewBox="0 0 151 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 44.9C69.9706 44.9 74 40.8706 74 35.9C74 30.9295 69.9706 26.9 65 26.9C60.0294 26.9 56 30.9295 56 35.9C56 40.8706 60.0294 44.9 65 44.9Z"
          fill="#3D3D3D"
        />
        <path
          d="M144.5 31.7C144.5 29.6 142.7 28.4 140.6 29C134.6 30.8 119.9 33.5 84.5 33.5C42.8 33.5 31.7 22.7 28.7 17.9C27.8 16.7 26 16.1 24.8 17C23 17.6 22.7 20 23.9 21.5C26.9 25.1 32.6 31.7 36.5 33.5C36.5 33.5 20 35 8 31.1C6.2 30.5 4.4 31.7 4.1 33.5L3.8 36.8C3.5 38.3 4.7 39.8 6.2 40.1C20.6 42.8 91.4 55.1 142.4 41.3C143.6 41 144.5 39.8 144.5 38.6V31.7Z"
          fill="#898989"
        />
        <path
          opacity="0.1"
          d="M144.5 31.7V38.6C144.5 39.8 143.9 41 142.4 41.6C91.4 55.7 20.6 43.4 6.2 40.4C4.7 40.1 3.8 38.6 3.8 37.1L4.1 34.4C4.4 34.7 5 35 5.3 35C19.7 37.7 90.8 50 141.8 36.2C143 35.9 144.2 34.7 144.2 33.2V29.6C144.5 30.2 144.5 30.8 144.5 31.7Z"
          fill="black"
        />
        <path
          d="M143.9 78.5C143.9 107 127.1 130.7 92.6 134.9C89 135.5 85.1 135.5 81.2 135.5C80 135.5 78.5 135.5 77.3 135.5C75.2 135.5 73.1 135.2 71.3 135.2C68 134.9 65 134.6 62 134C61.1 134 60.2 133.7 59.6 133.4C59.3 133.4 58.7 133.1 58.4 133.1C57.5 132.8 56.6 132.8 55.7 132.5C54.5 132.2 53.6 131.9 52.4 131.6C51.2 131.3 50.3 131 49.1 130.7C41.6 128.3 35 124.7 29.6 120.2C29.6 120.2 29.6 120.2 29.3 119.9C21.2 113.3 15.8 104.9 13.4 94.7C12.8 91.4 12.5 88.1 12.5 84.5L13.4 83.9L48.5 75.5L50.9 75.8V76.1C51.2 75.5 52.4 74.6 53.6 72.2C55.7 68 58.4 60.2 58.4 47C63.2 47.3 68.3 47.6 73.4 47.9C74 52.1 74.9 61.1 75.2 69.8C75.2 72.8 75.5 75.8 75.5 78.5C75.5 78.5 93.2 62.3 87.5 47.9C87.5 47.6 87.2 47.3 87.2 47C86.3 45.2 85.7 40.7 85.1 39.5C81.2 29.6 85.1 30.5 93.5 30.5C96.2 30.5 98.6 34.1 100.7 39.2C101.3 40.7 101.9 45.5 102.5 47.6C106.4 59.6 108.5 75.5 108.5 75.5C108.5 75.5 116.3 75.8 111.5 50C111.2 49.1 109.1 37.1 109.4 35.6C110.6 31.1 113.3 29.9 117.5 29.9C120.8 29.9 122.6 30.8 124.1 33.8C124.7 35 125 42.8 125.3 45.2C125.6 47.3 125.6 50.3 125.9 53.6C125.9 53.6 126.2 55.1 126.2 57.5C126.5 61.7 128.3 64.4 130.7 66.2C131 66.5 131.3 66.8 131.6 66.8C131.6 66.8 131.9 66.8 131.9 67.1C131.9 66.8 131.9 66.2 131.9 65.9C131.9 65.6 131.9 65.6 131.9 65.3C132.5 48.8 142.1 65.6 143.6 75.5V75.8C143.6 76.1 143.6 76.4 143.9 76.7C143.9 77 143.9 77 143.9 77.3C143.9 77.6 143.9 77.9 143.9 78.5Z"
          fill="#6A6968"
        />
        <path
          opacity="0.1"
          d="M75.8 78.5H48.5V76.4L50.9 76.1C51.2 75.8 52.4 74.6 53.6 72.2C55.7 68 58.4 60.2 58.4 47C63.2 47.3 68.3 47.6 73.4 47.6C74 51.8 74.9 60.8 75.2 69.5L75.8 78.5Z"
          fill="black"
        />
        <path
          d="M66.5 77C66.5 62.9 53 51.5 36.5 51.5C20 51.5 6.5 62.9 6.5 77C6.5 103.4 21.8 114.2 29.3 120.2C37.1 126.2 66.5 90.8 66.5 90.8"
          fill="#3D3D3D"
        />
        <path
          d="M36.5 96.5C23.3 96.5 12.5 87.8 12.5 77V69.2C12.5 64.1 17 60.2 22.7 60.2C26.9 60.2 29.9 61.7 32 63.8C35.9 67.7 35.9 67.4 40.1 63.8C42.5 61.7 46.1 60.2 49.7 60.2C55.4 60.2 59.9 64.1 59.9 69.2V77C60.5 87.8 49.7 96.5 36.5 96.5Z"
          fill="#6A6968"
        />
        <path
          d="M36.5 81.5C32.9 81.5 30.5 79.1 30.5 77C30.5 74.9 32.9 72.5 36.5 72.5C40.1 72.5 42.5 74.9 42.5 77C42.5 79.1 40.1 81.5 36.5 81.5Z"
          fill="#515151"
        />
        <path
          opacity="0.1"
          d="M75.8 78.5C75.8 78.5 68.6 82.4 66.5 87.5C66.5 87.5 66.5 83.3 66.5 78.5H75.8Z"
          fill="black"
        />
        <path
          d="M61.4 42.2C60.8 42.2 59.9 41.6 59.9 41L58.1 32.3C57.8 30.8 59 29.6 60.5 29.6C61.7 29.6 62.9 30.5 62.9 31.7V40.7C62.6 41.9 62 42.2 61.4 42.2Z"
          fill="#6A6968"
        />
        <path
          d="M66.2 42.2C65.6 42.2 64.7 41.6 64.7 41L62.9 32.3C62.6 30.8 63.8 29.6 65.3 29.6C66.5 29.6 67.7 30.5 67.7 31.7V40.7C67.4 41.9 66.8 42.2 66.2 42.2Z"
          fill="#6A6968"
        />
        <path
          d="M70.7 42.2C70.1 42.2 69.2 41.6 69.2 41L67.4 32.3C67.1 30.8 68.3 29.6 69.8 29.6C71 29.6 72.2 30.5 72.2 31.7V40.7C72.2 41.9 71.6 42.2 70.7 42.2Z"
          fill="#6A6968"
        />
        <path
          opacity="0.1"
          d="M143.9 78.5C143.9 107 127.1 130.7 92.6 134.9C89 135.5 85.1 135.5 81.2 135.5C80 135.5 78.5 135.5 77.3 135.5C75.2 135.5 73.1 135.2 71.3 135.2C68 134.9 65 134.6 62 134C61.1 134 60.2 133.7 59.6 133.4C59.3 133.4 58.7 133.1 58.4 133.1C57.5 132.8 56.6 132.8 55.7 132.5C54.5 132.2 53.6 131.9 52.4 131.6C51.2 131.3 50.3 131 49.1 130.7C41.9 128.3 35.3 124.7 29.9 120.5C29.9 120.5 29.6 120.5 29.6 120.2C29.6 120.2 29.6 120.2 29.3 119.9C21.5 114.2 6.5 103.1 6.5 77C6.5 75.8 6.5 74.9 6.8 73.7C7.7 82.7 10.1 89.3 13.4 94.7C18.5 102.8 25.1 107.6 29.3 110.9C29.3 110.9 29.3 110.9 29.3 111.2C39.8 119.6 54.2 124.7 72.2 125.9C108.5 117.2 108.2 78.5 108.2 78.5C109.7 111.2 98.6 122.6 82.7 126.5C83 126.5 86.9 126.5 83.6 126.5C81.5 126.5 85.7 126.5 87.8 126.2C88.4 126.2 89 126.2 89.3 126.2C91.4 125.9 93.2 125.9 95 125.6C95.3 125.6 95.3 125.6 95.6 125.6C97.4 125.3 99.2 125 100.7 124.7C101.3 124.7 101.9 124.4 102.5 124.4C104 124.1 105.5 123.5 106.7 123.2C107.3 122.9 107.9 122.9 108.2 122.6C109.4 122.3 110.6 121.7 111.8 121.1C112.4 120.8 113 120.5 113.6 120.2C114.5 119.9 115.4 119.3 116.3 119C117.5 118.4 118.4 117.8 119.3 117.2C119.9 116.9 120.5 116.6 121.1 116C121.7 115.4 122.6 115.1 123.2 114.5C123.5 114.2 123.8 113.9 124.1 113.6C125.6 112.4 127.1 111.2 128.3 110L128.6 109.7C131 107.3 133.4 104.6 135.2 101.6C140 93.8 137 84.5 131.9 78.8C127.4 74 125.9 63.5 125.6 57.8C125.9 62 128 64.7 130.1 66.5C130.4 66.8 130.7 67.1 131 67.1C131.3 67.4001 131.3 67.1 131.3 66.5C131.3 66.2 131.3 66.2 131.3 65.9C131.3 65.6 131.3 65.6 131.3 65.3C131.9 48.8 141.5 65.6 143 75.5V75.8C143 76.1 143 76.4 143.3 76.7C143.3 77 143.3 77 143.3 77.3C143.9 77.6 143.9 77.9 143.9 78.5Z"
          fill="black"
        />
        <path
          d="M79.7 33.5C79.7 33.5 81.8 28.7 93.8 30.5L85.1 34.1M106.4 33.5C106.4 33.5 109.7 29.6 117.5 29.9L112.1 33.5H106.4Z"
          fill="#3D3D3D"
        />
        <g clipPath="url(#clip0_7350_4130)">
          <path
            d="M23.9999 68L18.9999 73"
            stroke="#3D3D3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9999 68L23.9999 73"
            stroke="#3D3D3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g clipPath="url(#clip1_7350_4130)">
          <path
            d="M53 68L48 73"
            stroke="#3D3D3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 68L53 73"
            stroke="#3D3D3D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7350_4130">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(16.4999 65.5)"
            />
          </clipPath>
          <clipPath id="clip1_7350_4130">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(45.5 65.5)"
            />
          </clipPath>
        </defs>
      </svg>
    )
  }
}

class ErrorSlothIconLight extends React.Component<IconProps> {
  render() {
    return (
      <svg
        width="151"
        height="151"
        viewBox="0 0 151 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65 44.8999C69.9706 44.8999 74 40.8705 74 35.8999C74 30.9293 69.9706 26.8999 65 26.8999C60.0294 26.8999 56 30.9293 56 35.8999C56 40.8705 60.0294 44.8999 65 44.8999Z"
          fill="#898989"
        />
        <path
          d="M144.5 31.7C144.5 29.6 142.7 28.4 140.6 29C134.6 30.8 119.9 33.5 84.5 33.5C42.8 33.5 31.7 22.7 28.7 17.9C27.8 16.7 26 16.1 24.8 17C23 17.6 22.7 20 23.9 21.5C26.9 25.1 32.6 31.7 36.5 33.5C36.5 33.5 20 35 8 31.1C6.2 30.5 4.4 31.7 4.1 33.5L3.8 36.8C3.5 38.3 4.7 39.8 6.2 40.1C20.6 42.8 91.4 55.1 142.4 41.3C143.6 41 144.5 39.8 144.5 38.6V31.7Z"
          fill="#D9D9D9"
        />
        <path
          opacity="0.1"
          d="M144.5 31.7001V38.6001C144.5 39.8001 143.9 41.0001 142.4 41.6001C91.4 55.7001 20.6 43.4001 6.2 40.4001C4.7 40.1001 3.8 38.6001 3.8 37.1001L4.1 34.4001C4.4 34.7001 5 35.0001 5.3 35.0001C19.7 37.7001 90.8 50.0001 141.8 36.2001C143 35.9001 144.2 34.7001 144.2 33.2001V29.6001C144.5 30.2001 144.5 30.8001 144.5 31.7001Z"
          fill="black"
        />
        <path
          d="M143.9 78.4999C143.9 107 127.1 130.7 92.6 134.9C89 135.5 85.1 135.5 81.2 135.5C80 135.5 78.5 135.5 77.3 135.5C75.2 135.5 73.1 135.2 71.3 135.2C68 134.9 65 134.6 62 134C61.1 134 60.2 133.7 59.6 133.4C59.3 133.4 58.7 133.1 58.4 133.1C57.5 132.8 56.6 132.8 55.7 132.5C54.5 132.2 53.6 131.9 52.4 131.6C51.2 131.3 50.3 131 49.1 130.7C41.6 128.3 35 124.7 29.6 120.2C29.6 120.2 29.6 120.2 29.3 119.9C21.2 113.3 15.8 104.9 13.4 94.6999C12.8 91.3999 12.5 88.0999 12.5 84.4999L13.4 83.8999L48.5 75.4999L50.9 75.7999V76.0999C51.2 75.4999 52.4 74.5999 53.6 72.1999C55.7 67.9999 58.4 60.1999 58.4 46.9999C63.2 47.2999 68.3 47.5999 73.4 47.8999C74 52.0999 74.9 61.0999 75.2 69.7999C75.2 72.7999 75.5 75.7999 75.5 78.4999C75.5 78.4999 93.2 62.2999 87.5 47.8999C87.5 47.5999 87.2 47.2999 87.2 46.9999C86.3 45.1999 85.7 40.6999 85.1 39.4999C81.2 29.5999 85.1 30.4999 93.5 30.4999C96.2 30.4999 98.6 34.0999 100.7 39.1999C101.3 40.6999 101.9 45.4999 102.5 47.5999C106.4 59.5999 108.5 75.4999 108.5 75.4999C108.5 75.4999 116.3 75.7999 111.5 49.9999C111.2 49.0999 109.1 37.0999 109.4 35.5999C110.6 31.0999 113.3 29.8999 117.5 29.8999C120.8 29.8999 122.6 30.7999 124.1 33.7999C124.7 34.9999 125 42.7999 125.3 45.1999C125.6 47.2999 125.6 50.2999 125.9 53.5999C125.9 53.5999 126.2 55.0999 126.2 57.4999C126.5 61.6999 128.3 64.3999 130.7 66.1999C131 66.4999 131.3 66.7999 131.6 66.7999C131.6 66.7999 131.9 66.7999 131.9 67.0999C131.9 66.7999 131.9 66.1999 131.9 65.8999C131.9 65.5999 131.9 65.5999 131.9 65.2999C132.5 48.7999 142.1 65.5999 143.6 75.4999V75.7999C143.6 76.0999 143.6 76.3999 143.9 76.6999C143.9 76.9999 143.9 76.9999 143.9 77.2999C143.9 77.5999 143.9 77.8999 143.9 78.4999Z"
          fill="#D9D9D9"
        />
        <path
          opacity="0.1"
          d="M75.8 78.5H48.5V76.4L50.9 76.1C51.2 75.8 52.4 74.6 53.6 72.2C55.7 68 58.4 60.2 58.4 47C63.2 47.3 68.3 47.6 73.4 47.6C74 51.8 74.9 60.8 75.2 69.5L75.8 78.5Z"
          fill="black"
        />
        <path
          d="M66.5 77C66.5 62.9 53 51.5 36.5 51.5C20 51.5 6.5 62.9 6.5 77C6.5 103.4 21.8 114.2 29.3 120.2C37.1 126.2 66.5 90.8 66.5 90.8"
          fill="#6A6968"
        />
        <path
          d="M36.5 96.5C23.3 96.5 12.5 87.8 12.5 77V69.2C12.5 64.1 17 60.2 22.7 60.2C26.9 60.2 29.9 61.7 32 63.8C35.9 67.7 35.9 67.4 40.1 63.8C42.5 61.7 46.1 60.2 49.7 60.2C55.4 60.2 59.9 64.1 59.9 69.2V77C60.5 87.8 49.7 96.5 36.5 96.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M36.5 81.5C32.9 81.5 30.5 79.1 30.5 77C30.5 74.9 32.9 72.5 36.5 72.5C40.1 72.5 42.5 74.9 42.5 77C42.5 79.1 40.1 81.5 36.5 81.5Z"
          fill="#6A6968"
        />
        <path
          opacity="0.1"
          d="M75.8 78.5C75.8 78.5 68.6 82.4 66.5 87.5C66.5 87.5 66.5 83.3 66.5 78.5H75.8Z"
          fill="black"
        />
        <path
          d="M61.4 42.2001C60.8 42.2001 59.9 41.6001 59.9 41.0001L58.1 32.3001C57.8 30.8001 59 29.6001 60.5 29.6001C61.7 29.6001 62.9 30.5001 62.9 31.7001V40.7001C62.6 41.9001 62 42.2001 61.4 42.2001Z"
          fill="#6A6968"
        />
        <path
          d="M66.2 42.2001C65.6 42.2001 64.7 41.6001 64.7 41.0001L62.9 32.3001C62.6 30.8001 63.8 29.6001 65.3 29.6001C66.5 29.6001 67.7 30.5001 67.7 31.7001V40.7001C67.4 41.9001 66.8 42.2001 66.2 42.2001Z"
          fill="#6A6968"
        />
        <path
          d="M70.7 42.2001C70.1 42.2001 69.2 41.6001 69.2 41.0001L67.4 32.3001C67.1 30.8001 68.3 29.6001 69.8 29.6001C71 29.6001 72.2 30.5001 72.2 31.7001V40.7001C72.2 41.9001 71.6 42.2001 70.7 42.2001Z"
          fill="#6A6968"
        />
        <path
          opacity="0.1"
          d="M143.9 78.5C143.9 107 127.1 130.7 92.6 134.9C89 135.5 85.1 135.5 81.2 135.5C80 135.5 78.5 135.5 77.3 135.5C75.2 135.5 73.1 135.2 71.3 135.2C68 134.9 65 134.6 62 134C61.1 134 60.2 133.7 59.6 133.4C59.3 133.4 58.7 133.1 58.4 133.1C57.5 132.8 56.6 132.8 55.7 132.5C54.5 132.2 53.6 131.9 52.4 131.6C51.2 131.3 50.3 131 49.1 130.7C41.9 128.3 35.3 124.7 29.9 120.5C29.9 120.5 29.6 120.5 29.6 120.2C29.6 120.2 29.6 120.2 29.3 119.9C21.5 114.2 6.5 103.1 6.5 77C6.5 75.8 6.5 74.9 6.8 73.7C7.7 82.7 10.1 89.3 13.4 94.7C18.5 102.8 25.1 107.6 29.3 110.9C29.3 110.9 29.3 110.9 29.3 111.2C39.8 119.6 54.2 124.7 72.2 125.9C108.5 117.2 108.2 78.5 108.2 78.5C109.7 111.2 98.6 122.6 82.7 126.5C83 126.5 86.9 126.5 83.6 126.5C81.5 126.5 85.7 126.5 87.8 126.2C88.4 126.2 89 126.2 89.3 126.2C91.4 125.9 93.2 125.9 95 125.6C95.3 125.6 95.3 125.6 95.6 125.6C97.4 125.3 99.2 125 100.7 124.7C101.3 124.7 101.9 124.4 102.5 124.4C104 124.1 105.5 123.5 106.7 123.2C107.3 122.9 107.9 122.9 108.2 122.6C109.4 122.3 110.6 121.7 111.8 121.1C112.4 120.8 113 120.5 113.6 120.2C114.5 119.9 115.4 119.3 116.3 119C117.5 118.4 118.4 117.8 119.3 117.2C119.9 116.9 120.5 116.6 121.1 116C121.7 115.4 122.6 115.1 123.2 114.5C123.5 114.2 123.8 113.9 124.1 113.6C125.6 112.4 127.1 111.2 128.3 110L128.6 109.7C131 107.3 133.4 104.6 135.2 101.6C140 93.8 137 84.5 131.9 78.8C127.4 74 125.9 63.5 125.6 57.8C125.9 62 128 64.7 130.1 66.5C130.4 66.8 130.7 67.1 131 67.1C131.3 67.4001 131.3 67.1 131.3 66.5C131.3 66.2 131.3 66.2 131.3 65.9C131.3 65.6 131.3 65.6 131.3 65.3C131.9 48.8 141.5 65.6 143 75.5V75.8C143 76.1 143 76.4 143.3 76.7C143.3 77 143.3 77 143.3 77.3C143.9 77.6 143.9 77.9 143.9 78.5Z"
          fill="black"
        />
        <path
          d="M79.7 33.5C79.7 33.5 81.8 28.7 93.8 30.5L85.1 34.1M106.4 33.5C106.4 33.5 109.7 29.6 117.5 29.9L112.1 33.5H106.4Z"
          fill="#898989"
        />
        <g clipPath="url(#clip0_7356_34483)">
          <path
            d="M23.9999 68.0002L18.9999 73.0002"
            stroke="#6A6968"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9999 68.0002L23.9999 73.0002"
            stroke="#6A6968"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g clipPath="url(#clip1_7356_34483)">
          <path
            d="M53 68.0002L48 73.0002"
            stroke="#6A6968"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 68.0002L53 73.0002"
            stroke="#6A6968"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7356_34483">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(16.4999 65.5002)"
            />
          </clipPath>
          <clipPath id="clip1_7356_34483">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(45.5 65.5002)"
            />
          </clipPath>
        </defs>
      </svg>
    )
  }
}
