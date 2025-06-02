import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const Overline = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className }, ref) => (
    <span ref={ref} className={cn('text-xs font-semibold uppercase tracking-[0.16em] text-werk-black', className)}>
      {children}
    </span>
  )
)
Overline.displayName = 'Overline'

export const Heading1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className }, ref) => (
    <h1 ref={ref} className={cn('text-5xl font-semibold leading-tight tracking-tight', className)}>
      {children}
    </h1>
  )
)
Heading1.displayName = 'Heading1'

export const Heading2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className }, ref) => (
    <h2 ref={ref} className={cn('text-4xl font-semibold leading-tight', className)}>
      {children}
    </h2>
  )
)
Heading2.displayName = 'Heading2'

export const Heading3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className }, ref) => (
    <h3 ref={ref} className={cn('text-3xl font-semibold leading-tight', className)}>
      {children}
    </h3>
  )
)
Heading3.displayName = 'Heading3'

export const Heading4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className }, ref) => (
    <h4 ref={ref} className={cn('text-2xl font-semibold', className)}>
      {children}
    </h4>
  )
)
Heading4.displayName = 'Heading4'

export const Heading5 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className }, ref) => (
    <h5 ref={ref} className={cn('text-xl font-semibold', className)}>
      {children}
    </h5>
  )
)
Heading5.displayName = 'Heading5'

export const Body = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className }, ref) => (
    <p ref={ref} className={cn('text-lg leading-relaxed', className)}>
      {children}
    </p>
  )
)
Body.displayName = 'Body'

export const BodySmall = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className }, ref) => (
    <p ref={ref} className={cn('text-base leading-relaxed', className)}>
      {children}
    </p>
  )
)
BodySmall.displayName = 'BodySmall'

export const Caption = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className }, ref) => (
    <p ref={ref} className={cn('text-sm', className)}>
      {children}
    </p>
  )
)
Caption.displayName = 'Caption'