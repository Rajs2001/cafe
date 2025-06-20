'use client';

import { Calendar, Users } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our
            {' '}
            <span className="gold-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the range of services we offer to create memorable experiences and build vibrant communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Events Service */}
          <ServiceCard
            icon={<Calendar className="h-20 w-20 gold-text" />}
            title="Events"
            items={['Motorcycle Rides', 'Café Meetups', 'Adventure Trips', 'Community Gatherings']}
            description="We organize and host a variety of events, from motorcycle rides and café meetups to adventure trips and community gatherings."
          />

          {/* Marketing Service */}
          <ServiceCard
            icon={(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d95410"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 11 18-5v12L3 13v-2z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            )}
            title="Marketing"
            items={['Brand Partnerships', 'Influencer Collaborations', 'Content Creation', 'Social Media Campaigns']}
            description="We help brands connect with our community through authentic marketing initiatives that resonate with adventure enthusiasts."
          />

          {/* Community Service */}
          <ServiceCard
            icon={<Users className="h-20 w-20 gold-text" />}
            title="Community Initiatives"
            items={['Membership Programs', 'Workshops & Training', 'Social Causes', 'Community Forums']}
            description="We build and nurture communities through various initiatives that bring people together around shared passions."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
        <ul className="mt-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="gold-text">•</span>
              {' '}
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
