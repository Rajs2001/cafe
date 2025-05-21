"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, Bell, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Cruiserverse Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-gold">Cruiserverse</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/ventures" className="text-sm font-medium hover:text-gold transition-colors">
            Ventures
          </Link>
          <Link href="/pulse" className="text-sm font-medium hover:text-gold transition-colors">
            Pulse
          </Link>
          <Link href="/studio" className="text-sm font-medium hover:text-gold transition-colors">
            Studio
          </Link>
          <Link href="/core" className="text-sm font-medium hover:text-gold transition-colors">
            Core
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 hover:text-gold">
                Login <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-secondary">
              <DropdownMenuItem asChild>
                <Link href="/admin-login" className="cursor-pointer">
                  Admin Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/employee-login" className="cursor-pointer">
                  Employee Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://cafecruisers.keka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Candidate Login
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/ventures"
              className="text-sm font-medium p-2 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Ventures
            </Link>
            <Link
              href="/pulse"
              className="text-sm font-medium p-2 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pulse
            </Link>
            <Link
              href="/studio"
              className="text-sm font-medium p-2 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </Link>
            <Link
              href="/core"
              className="text-sm font-medium p-2 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Core
            </Link>

            <div className="border-t border-border/40 pt-4 mt-2">
              <p className="text-sm font-medium mb-2">Login Options</p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/admin-login"
                  className="text-sm p-2 hover:bg-secondary rounded-md flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" /> Admin Login
                </Link>
                <Link
                  href="/employee-login"
                  className="text-sm p-2 hover:bg-secondary rounded-md flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" /> Employee Login
                </Link>
                <Link
                  href="https://cafecruisers.keka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm p-2 hover:bg-secondary rounded-md flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" /> Candidate Login
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
