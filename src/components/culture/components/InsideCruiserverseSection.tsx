// components/sections/InsideCruiserverseSection.tsx
import React from 'react';

export const InsideCruiserverseSection: React.FC = () => (
  <section className="py-16 bg-zinc-800">
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl text-[#d95410] font-bold mb-2 text-center">
        Inside Cruiserverse
      </h3>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        We operate more like a passionate crew than a traditional office
      </p>
      <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-left">
        <li>
          <span className="font-semibold text-[#d95410]">Flat Structure:</span>
          <span className="ml-1">Ideas win here — not titles</span>
        </li>
        <li>
          <span className="font-semibold text-[#d95410]">Creative Freedom:</span>
          <span className="ml-1">You get space to explore, experiment, and shape what we’re building</span>
        </li>
        <li>
          <span className="font-semibold text-[#d95410]">Rider's Rhythm:</span>
          <span className="ml-1">We respect your time — whether it’s the 6 AM ride or the 2 PM brainstorm.</span>
        </li>
        <li>
          <span className="font-semibold text-[#d95410]">Outcome Hours:</span>
          <span className="ml-1">Work isn’t clocked. It’s lived, created, and delivered.</span>
        </li>
      </ul>
    </div>
  </section>
);
