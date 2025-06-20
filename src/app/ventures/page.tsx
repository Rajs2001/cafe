'use client';
import { useRef } from 'react';
import {
  AdventuresSection,
  HeroSection,
  // StatsSection,
  TeamSection,
  VenturesSection,
  VisionSection,
} from '@/components/ventures';

export default function VenturesPage() {
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection handleScroll={scrollToTeam} />
      <VenturesSection />
      <AdventuresSection />
      <VisionSection />
      <div ref={teamSectionRef}>
        <TeamSection />
      </div>
      {/* <StatsSection /> */}
    </div>
  );
}
