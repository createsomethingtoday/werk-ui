import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export const ArrowRightIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.3333 4L15.3333 8L11.3333 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.666667 8H14.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const FacebookIcon: React.FC<IconProps> = ({ className, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.5 21V11H5V7H8.5V4.5C8.5 1.5 10.5 0 13 0C14.5 0 16 0.5 16 0.5V4H14.5C13 4 12.5 4.5 12.5 5.5V7H16L15.5 11H12.5V21"
      fill="currentColor"
    />
  </svg>
)

export const TwitterIcon: React.FC<IconProps> = ({ className, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 3C20 3.5 19 4 18 4C17 3 16 2 14 2C11.5 2 9.5 4 9.5 6.5C9.5 7 9.5 7.5 9.5 7.5C6 7.5 3 6 1 3C0.5 4 0.5 5 0.5 6C0.5 7.5 1.5 9 3 9.5C2 9.5 1.5 9.5 1 9C1 11 2.5 12.5 4.5 13C4 13 3.5 13 3 13C3.5 15 5 16 7 16C5.5 17.5 3.5 18 1 18C3 19.5 5.5 20 8 20C16 20 20 13 20 7.5V7C21 6 21.5 5 21 3Z"
      fill="currentColor"
    />
  </svg>
)

export const LinkedInIcon: React.FC<IconProps> = ({ className, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19 0H3C1.5 0 0 1.5 0 3V19C0 20.5 1.5 22 3 22H19C20.5 22 22 20.5 22 19V3C22 1.5 20.5 0 19 0ZM7 18H4V8H7V18ZM5.5 6.5C4.5 6.5 3.5 5.5 3.5 4.5C3.5 3.5 4.5 2.5 5.5 2.5C6.5 2.5 7.5 3.5 7.5 4.5C7.5 5.5 6.5 6.5 5.5 6.5ZM18 18H15V13C15 12 15 10.5 13.5 10.5C12 10.5 11.5 11.5 11.5 13V18H8.5V8H11.5V9.5C12 8.5 13 8 14.5 8C17 8 18 9.5 18 12V18Z"
      fill="currentColor"
    />
  </svg>
)

export const InstagramIcon: React.FC<IconProps> = ({ className, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11 2C13.5 2 14 2 15 2C16 2 16.5 2.5 17 2.5C17.5 3 18 3.5 18 4C18.5 4.5 18.5 5 18.5 6C18.5 7 19 7.5 19 10C19 12.5 19 13 18.5 14C18.5 15 18 15.5 18 16C17.5 16.5 17 17 16.5 17C16 17.5 15.5 17.5 14.5 17.5C13.5 17.5 13 18 10.5 18C8 18 7.5 18 6.5 17.5C5.5 17.5 5 17 4.5 17C4 16.5 3.5 16 3.5 15.5C3 15 3 14.5 3 13.5C3 12.5 2.5 12 2.5 9.5C2.5 7 2.5 6.5 3 5.5C3 4.5 3.5 4 3.5 3.5C4 3 4.5 2.5 5 2.5C5.5 2 6 2 7 2C8 2 8.5 2 11 2ZM11 0C8.5 0 8 0 6.5 0C5 0 4 0.5 3 1C2 1.5 1.5 2 1 3C0.5 4 0 5 0 6.5C0 8 0 8.5 0 11C0 13.5 0 14 0 15.5C0 17 0.5 18 1 19C1.5 20 2 20.5 3 21C4 21.5 5 22 6.5 22C8 22 8.5 22 11 22C13.5 22 14 22 15.5 22C17 22 18 21.5 19 21C20 20.5 20.5 20 21 19C21.5 18 22 17 22 15.5C22 14 22 13.5 22 11C22 8.5 22 8 22 6.5C22 5 21.5 4 21 3C20.5 2 20 1.5 19 1C18 0.5 17 0 15.5 0C14 0 13.5 0 11 0Z"
      fill="currentColor"
    />
    <circle cx="11" cy="11" r="5" fill="currentColor" />
    <circle cx="17" cy="5" r="1.5" fill="currentColor" />
  </svg>
)