import React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'nav'
  icon?: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className,
  variant = 'default',
  icon 
}) => {
  const baseStyles = 'font-semibold transition-all duration-200'
  
  const variants = {
    default: 'text-sm text-werk-black hover:opacity-70',
    nav: 'text-sm text-werk-white hover:opacity-70'
  }
  
  return (
    <NextLink
      href={href}
      className={cn(
        baseStyles,
        variants[variant],
        'inline-flex items-center gap-2',
        className
      )}
    >
      {children}
      {icon}
    </NextLink>
  )
}

export default Link