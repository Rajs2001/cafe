// components/sections/PartnershipSection.tsx
import React from 'react';

export const PartnershipSection: React.FC = () => (
  <section className="py-16 bg-zinc-900">
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-2xl text-[#d95410] font-bold mb-8 text-center">
        Strategic Collaborations
      </h3>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left – Partnership Types */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4 text-white">Where We Collaborate</h4>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <li>
              <span className="font-semibold text-[#d95410]">Event Sponsorships –</span>
              {' '}
              Co-host and fund ride events, fests, launches, and tours.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Brand Collaborations –</span>
              {' '}
              Product integration, test rides, gear & apparel collabs.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Media & Content Co-Production –</span>
              {' '}
              Joint video series, custom storytelling.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Technology Collaborations –</span>
              {' '}
              Co-develop or pilot digital mobility tools.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Training & Academy Tie-ups –</span>
              {' '}
              Skill-building with our academy model.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Investment Partnerships –</span>
              {' '}
              Strategic scaling of Cruiserverse initiatives.
            </li>
          </ul>
        </div>

        {/* Right – Why Partner */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4 text-white">Why Partner With Us?</h4>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <li>
              <span className="font-semibold text-white">Pan-India reach</span>
              {' '}
              with fast-growing rider & creator communities
            </li>
            <li>
              <span className="font-semibold text-white">Strong B2C + B2B crossover</span>
              {' '}
              model that delivers
            </li>
            <li>
              <span className="font-semibold text-white">Full-cycle execution:</span>
              <div className="ml-4">Idea → Activation → Media → Analytics</div>
            </li>
            <li>
              <span className="font-semibold text-white">Multi-vertical ecosystem</span>
              {' '}
              designed to scale impact
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
