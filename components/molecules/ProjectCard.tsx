import React from 'react'
import Image from 'next/image'
import { Heading5 } from '@/components/atoms'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  image: string
  imageAlt: string
  className?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  imageAlt,
  className
}) => {
  return (
    <div className={cn('space-y-8', className)}>
      <div className="relative aspect-square overflow-hidden bg-werk-gray-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <Heading5>{title}</Heading5>
    </div>
  )
}

export default ProjectCard