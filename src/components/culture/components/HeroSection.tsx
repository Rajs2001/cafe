// components/sections/HeroSection.tsx
import React from 'react';

export const HeroSection = () => (
  <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
    <div className="container px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text text-center">
          DRIVEN BY PASSION. FUELED BY PURPOSE.
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl text-center"></p>
      </div>
    </div>
  </section>
);
