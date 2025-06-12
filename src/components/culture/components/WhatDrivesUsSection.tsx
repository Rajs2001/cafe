// components/sections/WhatDrivesUsSection.tsx
import React from 'react';

export const WhatDrivesUsSection: React.FC = () => (
  <section className="bg-zinc-900">
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl font-bold mb-2 text-center">What Drives Us?</h3>
    </div>
    <div className="max-w-2xl mx-auto space-y-2">
      <section className="py-8 bg-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 text-lg mb-10">
            At Cruiserverse, we’re not just building products or events — we’re igniting a movement. And it starts within.
            <span className="gold-text font-semibold"> Cruiserverse </span>
            Our culture is rooted in freedom, responsibility, and creativity, allowing every individual to bring their best — not just to work, but to life.
            <span className="block mt-2 italic">“Ride fast, think bold, stay real.”</span>
          </p>
        </div>
      </section>
    </div>
  </section>
);
