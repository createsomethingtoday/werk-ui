import React from 'react'
import Image from 'next/image'
import { BodySmall, Caption } from '@/components/atoms'
import { cn } from '@/lib/utils'

interface SlidePreviewProps {
  title: string
  description: string
  image: string
  imageAlt: string
  className?: string
}

const SlidePreview: React.FC<SlidePreviewProps> = ({
  title,
  description,
  image,
  imageAlt,
  className
}) => {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      <div className="relative w-36 h-26 flex-shrink-0 overflow-hidden border border-werk-gray-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <BodySmall className="font-semibold text-werk-white">{title}</BodySmall>
        <Caption className="text-werk-white/80 line-clamp-2">{description}</Caption>
      </div>
    </div>
  )
}

export default SlidePreview