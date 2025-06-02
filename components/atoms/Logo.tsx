import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className }) => {
  const color = variant === 'light' ? '#FFFFFF' : '#1A1A1F'
  
  return (
    <svg
      width="87"
      height="24"
      viewBox="0 0 87 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-auto', className)}
    >
      <path
        d="M0 0.5H5.5L9 10.5L12.5 0.5H18L21.5 10.5L25 0.5H30.5L23.5 23.5H18L14.5 13.5L11 23.5H5.5L0 0.5Z"
        fill={color}
      />
      <path
        d="M35 0.5H50V5H40V9.5H48V14H40V19H50V23.5H35V0.5Z"
        fill={color}
      />
      <path
        d="M55 0.5H66C70 0.5 72 2.5 72 6.5C72 9.5 70.5 11 68 11.5L72.5 23.5H67L63 12H60V23.5H55V0.5ZM60 8H65C66.5 8 67.5 7 67.5 5.5C67.5 4 66.5 3 65 3H60V8Z"
        fill={color}
      />
      <path
        d="M77 0.5H82V10L87 0.5H92L86 12L92 23.5H87L82 14V23.5H77V0.5Z"
        fill={color}
      />
    </svg>
  )
}

export default Logo