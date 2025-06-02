import React from 'react'
import Image from 'next/image'
import { Heading4, BodySmall, Caption } from '@/components/atoms'
import { placeholders } from '@/lib/placeholders'

const Testimonial: React.FC = () => {
  return (
    <section className="relative h-[822px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={placeholders.testimonial}
            alt="Testimonial background"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Quote */}
        <div className="bg-werk-black flex items-center justify-center p-16 lg:p-40">
          <div className="max-w-xl space-y-12">
            <Heading4 className="text-werk-white leading-relaxed">
              With more than a decade of experience,
              Werk has become a leader in digital
              experiences, web design and branding. That&apos;s not a brag, it&apos;s a promise: to deliver tomorrow&apos;s creative solutions — today.
            </Heading4>
            
            <div className="flex items-center gap-2">
              <BodySmall className="text-werk-white font-semibold">
                Cathal Howarth
              </BodySmall>
              <Caption className="text-werk-gray-300">
                — Service Design Lead at Werk
              </Caption>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial