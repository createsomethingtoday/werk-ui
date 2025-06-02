import React from 'react'
import { Overline, Heading2, Body } from '@/components/atoms'

const About: React.FC = () => {
  return (
    <section className="py-40 bg-werk-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Overline className="text-werk-black text-center mb-16">— Services</Overline>
          
          <Heading2 className="text-werk-black text-center mb-18">
            We will make you win across a couple of major digital design fields.
          </Heading2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Body className="text-werk-black">
              Werk is a strategic design and engineering agency with an uncompromised commitment to quality and the generation of true value. For the last 10 years, we have partnered with some of the world&apos;s leading organizations to help them strategize, design, develop, launch and grow their
            </Body>
            <Body className="text-werk-black">
              digitally-enabled brands and products. And even though we have offices in Madrid and Barcelona, our distributed team works from various different locations, gaining you access to the best possible talent, wherever you are.
            </Body>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About