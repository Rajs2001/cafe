// components/sections/HeroSection.tsx
'use client';
import Image from 'next/image';
import React from 'react';

export const HeroSection: React.FC = () => (
  <section className="relative w-full md:py-28 bg-gradient-to-b from-black to-zinc-800">
    <div className="container px-4">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold gold-text text-center ">
            ACCELERATE WITH US.
          </h1>
          <div className="grid grid-cols-1 py-16 lg:grid-cols-2 gap-10 items-center px-16">
            <div>
              <p className="text-gray-300 leading-relaxed">
                Cruiserverse is a future-facing automotive adventure and lifestyle ecosystem.
                <br />
                <br />
                <span>We focus on:</span>
              </p>
              <div className="mt-4 space-y-1">
                <p>• Community-based motorcycle & off-road experiences</p>
                <p>• Event production and strategic brand activations</p>
                <p>• Digital platforms for planning, rentals & rewards</p>
                <p>• Storytelling, media & creative content</p>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/color1/full/white_logo_color1_background.png"
                alt="Cruiserverse Logo"
                width={300}
                height={300}
                className="h-48 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
