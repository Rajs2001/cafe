import React from 'react';
import { Button } from '@/components/ui/button';

type HeroProps = {
  buttonclick?: () => void;
};

const Hero: React.FC<HeroProps> = ({ buttonclick }) => (
  <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 hero-gradient"></div>
    <div className="container relative z-10 px-4 py-12 md:py-20 lg:py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
        <span className="gold-text">BUILT FOR THE WILD.</span>
        <br />
        <span>POWERED BY STORIES.</span>
        <br />
        <span>DRIVEN BY COMMUNITY.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        A Cruisers-Universe devoted to the spirit of adventure
        and a passion for Automotive experiences.
      </p>
      <Button
        size="lg"
        className="rounded-full px-8 py-6 text-lg bg-[#d95410] text-black hover:bg-[#d95410]/90"
        onClick={buttonclick}
      >
        Explore
      </Button>
    </div>
  </section>
);

export default Hero;
