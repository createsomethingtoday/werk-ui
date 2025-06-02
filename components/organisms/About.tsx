'use client'

import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Overline, Heading2, Body } from '@/components/atoms'

gsap.registerPlugin(ScrollTrigger)

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const overlineRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyLeftRef = useRef<HTMLParagraphElement>(null)
  const bodyRightRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([overlineRef.current, headingRef.current, bodyLeftRef.current, bodyRightRef.current], {
        y: 60,
        opacity: 0
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      })

      tl.to(overlineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      .to([bodyLeftRef.current, bodyRightRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.6")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-40 bg-werk-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Overline ref={overlineRef} className="text-werk-black text-center mb-16">— Services</Overline>
          
          <Heading2 ref={headingRef} className="text-werk-black text-center mb-18">
            We will make you win across a couple of major digital design fields.
          </Heading2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Body ref={bodyLeftRef} className="text-werk-black">
              Werk is a strategic design and engineering agency with an uncompromised commitment to quality and the generation of true value. For the last 10 years, we have partnered with some of the world&apos;s leading organizations to help them strategize, design, develop, launch and grow their
            </Body>
            <Body ref={bodyRightRef} className="text-werk-black">
              digitally-enabled brands and products. And even though we have offices in Madrid and Barcelona, our distributed team works from various different locations, gaining you access to the best possible talent, wherever you are.
            </Body>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About