'use client';
import { ContactFormSection, CTASection, HeroSection, PartnershipSection } from '@/components/partnership';

export default function PartnershipPage() {
  return (
    <div className="flex flex-col">

      <HeroSection />

      <PartnershipSection />

      <ContactFormSection />

      <CTASection />

    </div>
  );
}
