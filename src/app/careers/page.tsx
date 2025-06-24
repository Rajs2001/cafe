'use client';

import React from 'react';
import {
  CTASection,
  HeroSection,
  // JobListingsSection,
  WhyJoinSection,
} from '@/components/careers';

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyJoinSection />
      <CTASection />
      {/* <JobListingsSection /> */}
    </div>
  );
}
