import React from 'react'
import { Overline, Caption } from '@/components/atoms'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
  className?: string
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className
}) => {
  return (
    <div className={cn('space-y-12', className)}>
      <Overline>{title}</Overline>
      <div className="space-y-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block"
          >
            <Caption className="text-werk-black/70 hover:text-werk-black transition-colors">
              {link.label}
            </Caption>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterColumn