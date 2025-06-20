'use client';
import {
  FutureVisionSection,
  StudioCTA,
  StudioGalleryTabs,
  StudioHero,
  // StudioJoinSection,
  // StudioWhatWeDo,
} from '@/components/studio';

export default function StudioPage() {
  return (
    <div className="flex flex-col">
      <StudioHero />
      {/* <StudioWhatWeDo /> */}
      {/* <StudioJoinSection /> */}
      <StudioGalleryTabs />
      <FutureVisionSection />
      <StudioCTA />
    </div>
  );
}
