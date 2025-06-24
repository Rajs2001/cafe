import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 bg-[#1f211e]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">

          <div className="flex flex-col gap-2">
            <Link href="/" className="flex flex-col">
              <div className="flex items-center justify-center md:justify-start lg:justify-start">
                <Image
                  src="/black/icon/white_icon_black_background.png"
                  alt="Cruiserverse Logo"
                  width={60}
                  height={60}
                  className="rounded-md hidden md:block lg:block"
                />
                {/* <Image
                  src="/black/text/white_textlogo_transparent_background.png"
                  alt="Cruiserverse Logo"
                  width={220}
                  height={20}
                  className=" md:block lg:block md:w-[150px] md:h-[100px]"
                /> */}
                <Image
                  src="/black/text/white_textlogo_transparent_background.jpg"
                  alt="Cruiserverse Logo"
                  width={220}
                  height={20}
                  className="hidden md:block md:w-[150px] md:h-[60px] -mt-1"
                />
              </div>
              <span className="text-sm font-bold gold-text">CIN: U52291TZ2025PTC033425</span>

              {/* <span className="text-sm font-bold text-yellow-500">CIN: 234567890ijhgfdwe5678</span> */}

              <div className="grid grid-cols-3 gap-4 mt-2 md:gap-2 lg:gap-2 w-[50%] lg:w-[100%] md:w-[50%]">
                {['/assets/registration/1.jpg', '/assets/registration/2.jpg', '/assets/registration/3.jpg'].map((src, index) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="w-14 h-14 bg-cover bg-center rounded shadow"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
              </div>

            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Built for the Wild. Powered by Stories. Driven by Community.
            </p>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"> Our Verticals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ventures" className="text-sm text-muted-foreground hover:gold-text">
                  Ventures
                </Link>
              </li>
              <li>
                <Link href="/pulse" className="text-sm text-muted-foreground hover:gold-text">
                  Pulse
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-muted-foreground hover:gold-text">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/core" className="text-sm text-muted-foreground hover:gold-text">
                  Core
                </Link>
              </li>
              <li>
                <Link href="/admin-login" className="text-sm text-muted-foreground hover:gold-text">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Home" className="text-sm text-muted-foreground hover:gold-text">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Culture" className="text-sm text-muted-foreground hover:gold-text">
                  Culture
                </Link>
              </li>
              {' '}
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:gold-text">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/Partner" className="text-sm text-muted-foreground hover:gold-text">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="/Candidate-login" className="text-sm text-muted-foreground hover:gold-text">
                  Candidate Login
                </Link>
              </li>
              <li>
                <Link href="/Corp-login" className="text-sm text-muted-foreground hover:gold-text">
                  Corp Login
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="flex gap-4 flex-wrap justify-start">
            {['/assets/registration/1.jpg', '/assets/registration/2.jpg', '/assets/registration/3.jpg']
              .map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Registration Image ${index + 1}`}
                  width={30}
                  height={20}
                  className="rounded mb-4 h-[80px] w-[80px]"
                />
              ))}
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 gold-text shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">123 Cruiser Street, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 gold-text shrink-0" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 gold-text shrink-0" />
                <span className="text-sm text-muted-foreground">info@cafecruisers.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-2 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            <span>
              All rights reserved. &copy;  Cruiserverse Ventures Pvt Ltd.
              {' '}
              {new Date().getFullYear()}
            </span>
            <br />
            {/* <Link href="/Careers" className="ml-12 mr-3 text-sm text-muted-foreground hover:gold-text">
              Privacy Policy
            </Link>
            {' '}
            <Link href="/Partner" className="mr-3 text-sm text-muted-foreground hover:gold-text">
              Terms
            </Link>
            {' '}
            <Link href="/Candidate-login" className="text-sm text-muted-foreground hover:gold-text">
              Copyright
            </Link> */}
          </p>

          <div className="flex gap-4 justify-center mt-4">
            <Link href="#" className="text-muted-foreground hover:gold-text">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:gold-text">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:gold-text">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:gold-text">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
