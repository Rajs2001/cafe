'use client';
import {
  HeroSection,
  VenturesSection,
  AdventuresSection,
  VisionSection,
  TeamSection,
  StatsSection,
} from '@/components/ventures';

export default function VenturesPage() {
  return (
    <div>
      <HeroSection handleScroll={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <VenturesSection />
      <AdventuresSection />
      <VisionSection />
      <TeamSection />
      <StatsSection />
    </div>
  );
}

