'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-werk-accent text-werk-black hover:bg-opacity-90 focus:ring-werk-accent',
      secondary: 'bg-werk-black text-werk-white hover:bg-opacity-90 focus:ring-werk-black',
      outline: 'border-2 border-werk-white text-werk-white hover:bg-werk-white hover:text-werk-black focus:ring-werk-white'
    }
    
    const sizes = {
      sm: 'px-6 py-3 text-sm gap-2',
      md: 'px-10 py-4 text-sm gap-2',
      lg: 'px-10 py-7 text-sm gap-3'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button