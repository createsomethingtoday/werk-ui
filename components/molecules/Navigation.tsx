'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Logo, Button, Link } from '@/components/atoms'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Service', href: '#services' },
  { name: 'Product', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Career', href: '#career' },
]

const Navigation: React.FC = () => {
  return (
    <Disclosure as="nav" className="absolute top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-28 items-center justify-between">
              <div className="flex items-center">
                <Logo variant="light" />
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      variant="nav"
                      className="text-werk-white/80 hover:text-werk-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:block">
                <Button variant="secondary" size="md">
                  Let&apos;s talk
                </Button>
              </div>
              
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-werk-white hover:bg-werk-white/10 focus:outline-none focus:ring-2 focus:ring-werk-white focus:ring-offset-2 focus:ring-offset-werk-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-werk-white hover:bg-werk-white/10"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="mt-4 px-3">
                <Button variant="secondary" size="md" className="w-full">
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navigation