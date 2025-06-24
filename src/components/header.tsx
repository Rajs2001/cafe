'use client';

import { ChevronDown, Menu, User, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const verticalLinks = [
  { href: '/ventures', label: 'Ventures' },
  { href: '/pulse', label: 'Pulse' },
  { href: '/studio', label: 'Studio' },
  { href: '/core', label: 'Core' },
];

const otherLinks = [
  { href: '/culture', label: 'Culture' },
  { href: '/careers', label: 'Careers' },
  { href: '/partnership', label: 'Partnership' },
];

const loginLinks = [
  {
    href: 'https://cafe-cruiser-admin-panel.vercel.app/login/',
    label: 'Employee Login',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-200 bg-gold-50/95 backdrop-blur supports-[backdrop-filter]:bg-gold-50/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/black/icon/white_icon_black_background.png"
            alt="Cruiserverse Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <Image
            src="/black/text/white_textlogo_transparent_background.png"
            alt="Cruiserverse Logo"
            width={220}
            height={40}
            className="hidden md:block md:w-[150px] md:h-[100px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 hover:bg-gold-500 hover:text-white transition-colors">
                Vertical
                {' '}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-gold-100 text-black hover:bg-gold-100">
              {verticalLinks.map(({ href, label }) => (
                <DropdownMenuItem asChild key={href} className="bg-gold-100 hover:bg-gold-500 focus:bg-gold-500 hover:text-white">
                  <Link
                    href={href}
                    className="cursor-pointer p-2 rounded-md hover:text-white hover:bg-gold-500"
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {otherLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors transition-al px-6 py-2 rounded-md hover:bg-gold-500 hover:text-white"
            >
              {label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 hover:bg-gold-500 hover:text-white transition-colors">
                Login
                {' '}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-gold-100 text-black">
              {loginLinks.map(({ href, label }) => (
                <DropdownMenuItem asChild key={label}>
                  <Link
                    href={href}
                    className="cursor-pointer p-2 rounded-md hover:bg-gold-500 hover:text-white"
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-gold-500 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gold-600 bg-gold-50">
          <nav className="container py-4 flex flex-col gap-4">
            <div>
              <div className="flex flex-col gap-2">
                {verticalLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium p-2 rounded-md hover:bg-gold  hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {otherLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium p-2 rounded-md hover:bg-gold-500 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="border-t border-gold-200 pt-4 mt-2">
              <p className="text-sm font-medium mb-2">Login Options</p>
              <div className="flex flex-col gap-2">
                {loginLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm p-2 rounded-md flex items-center gap-2 hover:bg-gold-500 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
