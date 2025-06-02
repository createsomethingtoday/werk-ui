import React from 'react'
import { ServiceCard } from '@/components/molecules'
import { Overline, Heading2 } from '@/components/atoms'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Our results-driven solutions are based on research and insights that support the strategic growth of your brands and products.'
  },
  {
    title: 'Digital Experiences',
    description: 'We have crafted a reputation for providing high quality design that cherishes the tiniest of details.'
  },
  {
    title: 'Media',
    description: 'We specialize in reaching your audience on the right platforms, within the right context.'
  },
  {
    title: 'Campaign & Social',
    description: 'We translate your brand goals into content that lives natively on the channels that are most relevant to your audience.'
  }
]

const Services: React.FC = () => {
  return (
    <section className="py-40 bg-werk-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-52">
            <Overline className="text-werk-white">— Services</Overline>
            <Heading2 className="text-werk-white max-w-md">
              Strategic design and engineering for global leading brands.
            </Heading2>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.slice(2).map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services