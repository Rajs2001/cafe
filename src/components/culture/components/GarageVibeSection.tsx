// components/sections/GarageVibeSection.tsx
import React from 'react';

export const GarageVibeSection: React.FC = () => (
  <section className="py-16 bg-zinc-900">
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
        The Garage Vibe
      </h3>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Our workspaces (physical or remote) reflect the spirit of the road:
      </p>
      <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-center">
        <li><span className="font-semibold text-white">Open tables, not cubicles</span></li>
        <li><span className="font-semibold text-white">Loud ideas, quiet focus</span></li>
        <li><span className="font-semibold text-white">Music, machines, and meaningful work</span></li>
        <li><span className="font-semibold text-white">Team hangouts, ride days, and café runs</span></li>
      </ul>
    </div>
  </section>
);
