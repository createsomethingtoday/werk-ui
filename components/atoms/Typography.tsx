import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const Overline: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn('text-xs font-semibold uppercase tracking-[0.16em] text-werk-black', className)}>
    {children}
  </span>
)

export const Heading1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn('text-5xl font-semibold leading-tight tracking-tight', className)}>
    {children}
  </h1>
)

export const Heading2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn('text-4xl font-semibold leading-tight', className)}>
    {children}
  </h2>
)

export const Heading3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn('text-3xl font-semibold leading-tight', className)}>
    {children}
  </h3>
)

export const Heading4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn('text-2xl font-semibold', className)}>
    {children}
  </h4>
)

export const Heading5: React.FC<TypographyProps> = ({ children, className }) => (
  <h5 className={cn('text-xl font-semibold', className)}>
    {children}
  </h5>
)

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-lg leading-relaxed', className)}>
    {children}
  </p>
)

export const BodySmall: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-base leading-relaxed', className)}>
    {children}
  </p>
)

export const Caption: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn('text-sm', className)}>
    {children}
  </p>
)