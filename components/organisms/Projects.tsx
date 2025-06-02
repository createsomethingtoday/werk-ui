import React from 'react'
import { ProjectCard } from '@/components/molecules'
import { Heading2, Link } from '@/components/atoms'
import { ArrowRightIcon } from '@/components/atoms/Icons'
import { placeholders } from '@/lib/placeholders'

const projects = [
  {
    title: 'Winery — Helping reinvent the brand of California&apos;s leading winery.',
    image: placeholders.project1,
    imageAlt: 'Winery project'
  },
  {
    title: 'Korres — Branding, Product- & Packaging Design for an upcoming beauty & health company.',
    image: placeholders.project2,
    imageAlt: 'Korres project'
  },
  {
    title: 'Vogue — Responsive digital magazine design for the world leading fashion magazine.',
    image: placeholders.project3,
    imageAlt: 'Vogue project'
  },
  {
    title: 'Aesop — Branding, Product- & Packaging Design that relives the old pharmacy flair.',
    image: placeholders.project4,
    imageAlt: 'Aesop project'
  }
]

const Projects: React.FC = () => {
  return (
    <section className="py-40 bg-werk-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20">
          <Heading2 className="text-werk-black max-w-md mb-8 lg:mb-0">
            Pushing the limits - playfully.
          </Heading2>
          <Link href="/projects" icon={<ArrowRightIcon />}>
            See all projects
          </Link>
        </div>
        
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(2).map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                className={index === 1 ? 'md:mt-24' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects