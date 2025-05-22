import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
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
            <p className="text-sm text-muted-foreground max-w-xs">
              Built for the Wild. Powered by Stories. Driven by Community.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ventures" className="text-sm text-muted-foreground hover:text-gold">
                  Ventures
                </Link>
              </li>
              <li>
                <Link href="/pulse" className="text-sm text-muted-foreground hover:text-gold">
                  Pulse
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-muted-foreground hover:text-gold">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/core" className="text-sm text-muted-foreground hover:text-gold">
                  Core
                </Link>
              </li>
              <li>
                <Link href="/admin-login" className="text-sm text-muted-foreground hover:text-gold">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">123 Cruiser Street, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm text-muted-foreground">info@cafecruisers.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Documents</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documents/privacy-policy.pdf"
                  className="text-sm text-muted-foreground hover:text-gold flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/terms-conditions.pdf"
                  className="text-sm text-muted-foreground hover:text-gold flex items-center gap-1"
                >
                  <span>Terms & Conditions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/startup-certificate.pdf"
                  className="text-sm text-muted-foreground hover:text-gold flex items-center gap-1"
                >
                  <span>Startup Certificate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/msme-certificate.pdf"
                  className="text-sm text-muted-foreground hover:text-gold flex items-center gap-1"
                >
                  <span>MSME Certificate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-download"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Cruiserverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
