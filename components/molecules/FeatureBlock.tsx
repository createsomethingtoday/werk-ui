import React from 'react'
import Image from 'next/image'
import { Heading2, Body, Button, Overline } from '@/components/atoms'
import { cn } from '@/lib/utils'

interface FeatureBlockProps {
  overline: string
  title: string
  description: string
  image: string
  imageAlt: string
  buttonText?: string
  imagePosition?: 'left' | 'right'
  className?: string
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  overline,
  title,
  description,
  image,
  imageAlt,
  buttonText,
  imagePosition = 'right',
  className
}) => {
  return (
    <div className={cn(
      'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
      className
    )}>
      <div className={cn(
        'space-y-8',
        imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
      )}>
        <div className="space-y-6">
          <Overline>{overline}</Overline>
          <Heading2>{title}</Heading2>
          <Body className="text-werk-black/80">{description}</Body>
        </div>
        {buttonText && (
          <Button variant="secondary">
            {buttonText}
          </Button>
        )}
      </div>
      
      <div className={cn(
        'relative aspect-[4/3] overflow-hidden',
        imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
      )}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default FeatureBlock