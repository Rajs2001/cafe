// components/sections/WhatWeValueSection.tsx
import React from 'react';

export const WhatWeValueSection: React.FC = () => (
  <section className="py-16 bg-zinc-800">
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#d95410]">
        What We Value
      </h3>
      <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-center">
        <li><span className="font-semibold text-white">Authenticity over appearances</span></li>
        <li><span className="font-semibold text-white">Agility over hierarchy</span></li>
        <li><span className="font-semibold text-white">Craftsmanship over shortcuts</span></li>
        <li><span className="font-semibold text-white">Adventure in everything — from code to content</span></li>
      </ul>
    </div>
  </section>
);
