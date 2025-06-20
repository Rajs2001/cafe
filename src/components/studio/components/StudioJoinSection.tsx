'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function StudioJoinSection() {
  return (
    <section className="relative bg-black overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Studio+Join+BG"
          alt="Join Us Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>

      <div className="relative z-10 container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to
            {' '}
            <span className="gold-text">Join</span>
            {' '}
            Us?
          </h2>
          <p className="text-gray-400 mb-8">
            Become a part of our Cruiserverse family and embark on an unforgettable journey. Share your
            passion, collaborate with fellow riders, and explore new adventures together.
          </p>
          <Button className="rounded-full px-6 py-3 text-lg font-medium gold-bg hover:gold-bg/90">
            Join Now
            {' '}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
