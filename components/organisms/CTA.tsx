import React from 'react'
import { Heading3, Body, Button } from '@/components/atoms'
import { ArrowRightIcon } from '@/components/atoms/Icons'

const CTA: React.FC = () => {
  return (
    <section className="py-40 bg-werk-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-30">
          <Heading3 className="text-werk-white max-w-xl">
            Got a project to discuss?
            Do you have a business opportunity, or are you just a creative looking to collaborate?
          </Heading3>
          
          <div className="space-y-30">
            <Body className="text-werk-white max-w-md">
              For the last 10 years, we have partnered with some of the world&apos;s leading organizations to help them strategize, design, develop, launch and grow their digitally-enabled brands and products.
            </Body>
            
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRightIcon size={24} />}
              className="w-full sm:w-auto"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA