import React from 'react'
import { Heading5, Body } from '@/components/atoms'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  variant?: 'default' | 'light'
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  variant = 'default',
  className 
}) => {
  const textColor = variant === 'light' ? 'text-werk-white' : 'text-werk-gray-200'
  
  return (
    <div className={cn('space-y-3', className)}>
      <Heading5 className={variant === 'light' ? 'text-werk-white' : 'text-werk-black'}>
        {title}
      </Heading5>
      <Body className={cn(textColor, variant === 'light' ? 'opacity-80' : '')}>
        {description}
      </Body>
    </div>
  )
}

export default ServiceCard