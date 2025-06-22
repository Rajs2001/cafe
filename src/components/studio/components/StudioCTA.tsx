'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function StudioCTA() {
  return (
    <section className="bg-gradient-to-br from-zinc-800 to-zinc-900 text-white py-20">
      <div className="container px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Step into the
          {' '}
          <span className="gold-text">Cruiserverse</span>
          {' '}
          Studio
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Book your studio experience today and take your brand storytelling to the next level. Our team is ready to bring your vision to life.
        </p>
        <Button asChild className="rounded-full px-8 gold-bg hover:bg-gold/90 text-white">
          <Link href="#">
            Explore Job
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
