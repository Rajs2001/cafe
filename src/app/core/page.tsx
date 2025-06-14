'use client';
import React from 'react';
import { HeroSection, JoinMovementSection, PowersCoreSection, PowersExperienceSection } from '@/components/core';

export default function CorePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PowersCoreSection />
      <PowersExperienceSection />
      <JoinMovementSection />
    </div>
  );
}