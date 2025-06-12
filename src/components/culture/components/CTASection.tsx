// components/sections/CTASection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

type CTASectionProps = {
  onCTAButtonClick: () => void;
};

export const CTASection: React.FC<CTASectionProps> = ({ onCTAButtonClick }) => (
  <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
    <div className="container px-4">
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          WANT TO RIDE WITH US?
        </h2>
        <ul className="mb-8 flex justify-center">
          <li>
            <span className="font-semibold text-[#d95410]">
              We’re always looking for thinkers, tinkerers, creators, and riders who want to build something real.
            </span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full px-8 gold-bg text-black hover:gold-bg/90"
            onClick={onCTAButtonClick}
          >
            Collaborate with us
          </Button>
        </div>
      </div>
    </div>
  </section>
);
