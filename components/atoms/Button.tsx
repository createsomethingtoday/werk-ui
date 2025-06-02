'use client'

import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    
    useLayoutEffect(() => {
      const button = buttonRef.current
      const overlay = overlayRef.current
      if (!button || !overlay) return

      const ctx = gsap.context(() => {
        gsap.set(overlay, {
          scaleX: 0,
          transformOrigin: "left center"
        })

        const handleMouseEnter = () => {
          gsap.to(overlay, {
            scaleX: 1,
            duration: 0.4,
            ease: "power2.out"
          })
          gsap.to(button, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        }

        const handleMouseLeave = () => {
          gsap.to(overlay, {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.4,
            ease: "power2.out"
          })
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        }

        const handleMouseDown = () => {
          gsap.to(button, {
            scale: 0.98,
            duration: 0.1,
            ease: "power2.out"
          })
        }

        const handleMouseUp = () => {
          gsap.to(button, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out"
          })
        }

        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)
        button.addEventListener('mousedown', handleMouseDown)
        button.addEventListener('mouseup', handleMouseUp)

        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter)
          button.removeEventListener('mouseleave', handleMouseLeave)
          button.removeEventListener('mousedown', handleMouseDown)
          button.removeEventListener('mouseup', handleMouseUp)
        }
      }, buttonRef)

      return () => ctx.revert()
    }, [])

    const baseStyles = 'relative inline-flex items-center justify-center font-semibold overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-werk-accent text-werk-black focus:ring-werk-accent',
      secondary: 'bg-werk-black text-werk-white focus:ring-werk-black',
      outline: 'border-2 border-werk-white text-werk-white focus:ring-werk-white'
    }
    
    const overlayVariants = {
      primary: 'bg-werk-black',
      secondary: 'bg-werk-accent',
      outline: 'bg-werk-white'
    }
    
    const sizes = {
      sm: 'px-6 py-3 text-sm gap-2',
      md: 'px-10 py-4 text-sm gap-2',
      lg: 'px-10 py-7 text-sm gap-3'
    }
    
    return (
      <button
        ref={(node) => {
          buttonRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <div 
          ref={overlayRef}
          className={cn(
            'absolute inset-0 z-0',
            overlayVariants[variant]
          )}
        />
        <span className="relative z-10 flex items-center">
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button