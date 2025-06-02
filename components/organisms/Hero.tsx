'use client'

import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Navigation, SlidePreview } from '@/components/molecules'
import { Heading1, Heading4, Button, Caption } from '@/components/atoms'
import { placeholders } from '@/lib/placeholders'

const featuredWork = [
  {
    title: 'Vogue',
    description: 'Responsive digital magazine design for the world leading fashion magazine.',
    image: placeholders.vogue,
    imageAlt: 'Vogue magazine preview'
  },
  {
    title: 'Aesop',
    description: 'Branding, Product- & Packaging Design that relives the old pharmacy flair.',
    image: placeholders.aesop,
    imageAlt: 'Aesop brand preview'
  }
]

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const featuredWorkRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, subheadingRef.current, buttonRef.current], {
        y: 60,
        opacity: 0
      })
      
      gsap.set(overlayRef.current, {
        opacity: 0.6
      })
      
      gsap.set(featuredWorkRef.current, {
        x: 100,
        opacity: 0
      })

      // Hero entrance animations
      const tl = gsap.timeline({ delay: 0.2 })
      
      tl.to(overlayRef.current, {
        opacity: 0.3,
        duration: 1.2,
        ease: "power2.out"
      })
      .to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(subheadingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(featuredWorkRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen min-h-[810px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={placeholders.hero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-werk-black/30" />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-8">
            <Heading1 ref={headingRef} className="text-werk-white">
              Let&apos;s create your success together
            </Heading1>
            <Heading4 ref={subheadingRef} className="text-werk-white font-normal">
              Whether an identity or campaign, we make your brand visible, relevant and effective
            </Heading4>
            <Button ref={buttonRef} variant="primary" size="lg">
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Work Slider */}
      <div ref={featuredWorkRef} className="absolute bottom-0 right-0 w-full lg:w-auto">
        <div className="bg-werk-black p-10 lg:p-10">
          <Caption className="text-werk-white mb-8">Featured Work</Caption>
          <div className="flex flex-col sm:flex-row gap-10">
            {featuredWork.map((work) => (
              <SlidePreview
                key={work.title}
                title={work.title}
                description={work.description}
                image={work.image}
                imageAlt={work.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero