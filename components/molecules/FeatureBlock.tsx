'use client'

import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heading2, Body, Button, Overline } from '@/components/atoms'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

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
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlineRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const contentElements: (HTMLElement | null)[] = [overlineRef.current, titleRef.current, descriptionRef.current]
      if (buttonRef.current) contentElements.push(buttonRef.current)

      gsap.set(contentElements.filter(Boolean), {
        y: 60,
        opacity: 0
      })

      gsap.set(imageRef.current, {
        x: imagePosition === 'right' ? 60 : -60,
        opacity: 0
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse'
        }
      })

      tl.to(imageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(overlineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")

      if (buttonRef.current) {
        tl.to(buttonRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.4")
      }
    }, containerRef)

    return () => ctx.revert()
  }, [imagePosition])

  return (
    <div ref={containerRef} className={cn(
      'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
      className
    )}>
      <div ref={contentRef} className={cn(
        'space-y-8',
        imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
      )}>
        <div className="space-y-6">
          <Overline ref={overlineRef}>{overline}</Overline>
          <Heading2 ref={titleRef}>{title}</Heading2>
          <Body ref={descriptionRef} className="text-werk-black/80">{description}</Body>
        </div>
        {buttonText && (
          <Button ref={buttonRef} variant="secondary">
            {buttonText}
          </Button>
        )}
      </div>
      
      <div ref={imageRef} className={cn(
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