// 'use client';

// import { ChevronDown, Menu, User, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// const navLinks = [
//   { href: '/ventures', label: 'Ventures' },
//   { href: '/pulse', label: 'Pulse' },
//   { href: '/studio', label: 'Studio' },
//   { href: '/core', label: 'Core' },
//   { href: '/culture', label: 'Culture' },
//   { href: '/partnership', label: 'Partnership' },
// ];

// const loginLinks = [
//   {
//     href: 'https://cafe-cruiser-admin-panel.vercel.app/login/',
//     label: 'Admin Login',
//   },
//   {
//     href: 'https://cafe-cruiser-admin-panel.vercel.app/login/',
//     label: 'Employee Login',
//   },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/black/icon/white_icon_black_background.png"
//             alt="Cruiserverse Logo"
//             width={40}
//             height={40}
//             className="rounded-md"
//           />
//           <Image
//             src="/black/text/white_textlogo_transparent_background.png"
//             alt="Cruiserverse Logo"
//             width={220}
//             height={40}
//             className="hidden md:block md:w-[150px] md:h-[100px]"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navLinks.map(({ href, label }) => (
//             <Link
//               key={href}
//               href={href}
//               className="text-sm font-medium hover:gold-text transition-colors"
//             >
//               {label}
//             </Link>
//           ))}

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center gap-1 hover:bg-gold-500 hover:text-white transition-colors  ">
//                 Login
//                 {' '}
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-48 bg-secondary">
//               {loginLinks.map(({ href, label }) => (
//                 <DropdownMenuItem asChild key={label}>
//                   <Link href={href} className="cursor-pointer">
//                     {label}
//                   </Link>
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden hover:bg-gold-500 hover:text-white transition-colors"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-border/40 bg-background">
//           <nav className="container py-4 flex flex-col gap-4">
//             {navLinks.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className="text-sm font-medium p-2 hover:bg-gold-700 rounded-md"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {label}
//               </Link>
//             ))}

//             <div className="border-t border-border/40 pt-4 mt-2 hover:bg-gold-500 rounded-md">
//               <p className="text-sm font-medium mb-2">Login Options</p>
//               <div className="flex flex-col gap-2">
//                 {loginLinks.map(({ href, label }) => (
//                   <Link
//                     key={label}
//                     href={href}
//                     className="text-sm p-2 hover:bg-gold-500 rounded-md flex items-center gap-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <User className="h-4 w-4" />
//                     {label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

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
  {
    href: '/ventures',
    label: 'Ventures',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-gold-700',
    hoverText: 'hover:text-white',
  },
  {
    href: '/pulse',
    label: 'Pulse',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-gold-700',
    hoverText: 'hover:text-white',
  },
  {
    href: '/studio',
    label: 'Studio',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-gold-700',
    hoverText: 'hover:text-white',
  },
  {
    href: '/core',
    label: 'Core',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-gold-700',
    hoverText: 'hover:text-white',
  },
];

const otherLinks = [
  {
    href: '/culture',
    label: 'Culture',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-purple-700',
    hoverText: 'hover:text-white',
  },
  {
    href: '/partnership',
    label: 'Partnership',
    bg: 'bg-transparent',
    text: 'text-foreground',
    hoverBg: 'hover:bg-blue-700',
    hoverText: 'hover:text-white',
  },
];

const loginLinks = [
  {
    href: 'https://cafe-cruiser-admin-panel.vercel.app/login/',
    label: 'Admin Login',
    bg: '',
    text: '',
    hoverBg: 'hover:bg-gold-600',
    hoverText: 'hover:text-white',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <DropdownMenuContent align="start" className="w-48 bg-secondary">
              {verticalLinks.map(({ href, label, hoverBg, hoverText }) => (
                <DropdownMenuItem asChild key={href}>
                  <Link
                    href={href}
                    className={`cursor-pointer p-2 rounded-md ${hoverBg} ${hoverText}`}
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {otherLinks.map(({ href, label, bg, text, hoverBg, hoverText }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors px-2 py-1 rounded-md ${bg} ${text} ${hoverBg} ${hoverText}`}
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
            <DropdownMenuContent align="end" className="w-48 bg-secondary hover:bg-gold-500 hover:text-white">
              {loginLinks.map(({ href, label, hoverBg, hoverText }) => (
                <DropdownMenuItem asChild key={label} className={`cursor-pointer ${hoverBg} ${hoverText}`}>
                  <Link
                    href={href}
                    className={`cursor-pointer p-2 rounded-md ${hoverBg} ${hoverText}`}
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
        <div className="md:hidden border-t border-gold/90 bg-secondary">
          <nav className="container py-4 flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium mb-2 hidden md:block lg:block ">Vertical</p>
              <div className="flex flex-col gap-2">
                {verticalLinks.map(({ href, label, hoverBg, hoverText }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium p-2 rounded-md ${hoverBg} ${hoverText}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map(({ href, label, hoverBg, hoverText }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium p-2 rounded-md ${hoverBg} ${hoverText}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="border-t border-border/40 pt-4 mt-2">
              <p className="text-sm font-medium mb-2">Login Options</p>
              <div className="flex flex-col gap-2">
                {loginLinks.map(({ href, label, hoverBg, hoverText }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`text-sm p-2 rounded-md flex items-center gap-2 ${hoverBg} ${hoverText}`}
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
