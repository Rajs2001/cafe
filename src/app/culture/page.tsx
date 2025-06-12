'use client';
// import Image from 'next/image';
import { CTASection, GarageVibeSection, HeroSection, InsideCruiserverseSection, TestimonialsSection, WhatDrivesUsSection, WhatWeValueSection } from '@/components/culture';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

export default function CorePage() {
  const handleCTAClick = () => {
    const a = document.createElement('a');
    a.href = 'mailto:info@cafecruisers.in';
    a.rel = 'noopener noreferrer';
    a.click();
    a.remove();
  };

  return (
    <div className="flex flex-col">

      <HeroSection />

      <WhatDrivesUsSection />

      <InsideCruiserverseSection />

      <GarageVibeSection />

      <WhatWeValueSection />

      <TestimonialsSection />

      <CTASection onCTAButtonClick={handleCTAClick} />

    </div>
  );
}
