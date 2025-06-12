// components/sections/CTASection.tsx
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

export const CTASection: React.FC = () => {
  const handleButtonClick = () => {
    const a = document.createElement('a');
    a.href = '/assets/Ventures_Presentation.pdf';
    a.download = 'partnership-deck.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container px-4">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Together
          </h2>
          <p className="text-[#d95410] font-semibold">Your Brand. Our Terrain. Shared Impact.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:gold-bg/90" onClick={handleButtonClick}>
              Our Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
