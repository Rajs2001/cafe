'use client';

import React from 'react';
import {
  // FeaturesSection,
  HeroSection,
  PulseCTA,
  // ServicesSection,
  TestimonialsSection,
  WhatsNextSection,
  WhatWeDoSection,
  WhyBrandsChooseSection,
} from '@/components/pulse';

export default function PulsePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatWeDoSection />
      <WhyBrandsChooseSection />
      <WhatsNextSection />
      {' '}
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      <TestimonialsSection />
      <PulseCTA />
    </div>
  );
}
