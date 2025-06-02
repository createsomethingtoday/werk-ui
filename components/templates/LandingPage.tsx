import React from 'react'
import {
  Hero,
  About,
  Features,
  Testimonial,
  Projects,
  CTA,
  Footer,
  Services
} from '@/components/organisms'

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}

export default LandingPage