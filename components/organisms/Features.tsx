import React from 'react'
import { FeatureBlock } from '@/components/molecules'
import { placeholders } from '@/lib/placeholders'

const features = [
  {
    overline: '— Our principles',
    title: 'The power of together',
    description: 'We believe in forging lasting relationships based on knowledge building and mutual trust. This facilitates cross-team collaboration, allowing us to make faster and better decisions that ultimately result in stronger outcomes.',
    buttonText: 'Learn more',
    image: placeholders.feature1,
    imageAlt: 'Team collaboration',
    imagePosition: 'right' as const
  },
  {
    overline: '— Our principles',
    title: 'Less noise. More action',
    description: 'We are not here to waste your time but to make your life much easier. We like to dive right in and move swiftly, keeping processes light so that we can focus on what is really important: delivering results on time and on budget.',
    buttonText: 'Learn more',
    image: placeholders.feature2,
    imageAlt: 'Fast execution',
    imagePosition: 'left' as const
  }
]

const Features: React.FC = () => {
  return (
    <section className="py-40 bg-werk-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-30">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features