import React from 'react'
import { FooterColumn } from '@/components/molecules'
import { Logo, Body, Caption, Overline } from '@/components/atoms'
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@/components/atoms/Icons'
import Link from 'next/link'

const menuLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const connectLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

const socialIcons = [
  { Icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-werk-gray-100 py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            <Logo variant="dark" />
            <Body className="text-werk-black max-w-sm">
              Wonderful digital things and a pinch of rock n&apos; roll.
            </Body>
          </div>
          
          {/* Footer Menu */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterColumn title="Menu" links={menuLinks} />
            <FooterColumn title="Connect" links={connectLinks} />
            <div>
              <Overline className="mb-12 block">Contact</Overline>
              <Caption className="text-werk-black/70">hi@werk.com</Caption>
            </div>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-werk-black/20 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <Caption className="text-werk-black">2020 werk.</Caption>
              <Caption className="text-werk-black/70">All rights reserved</Caption>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6">
              {socialIcons.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-werk-black hover:opacity-70 transition-opacity"
                  aria-label={label}
                >
                  <Icon size={22} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer