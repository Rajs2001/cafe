'use client';

import { Bike, Coffee, Sparkles, Users } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: <Users className="h-10 w-10 gold-text" />,
    title: 'Community-Driven',
    description: 'Built by and for motorcycle enthusiasts and café lovers.',
  },
  {
    icon: <Coffee className="h-10 w-10 gold-text" />,
    title: 'Passion for Coffee & Bikes',
    description: 'Our experiences revolve around the culture of great brews and rides.',
  },
  {
    icon: <Bike className="h-10 w-10 gold-text" />,
    title: 'Events & Rides',
    description: 'Engaging meetups, curated rides, and community events all year round.',
  },
  {
    icon: <Sparkles className="h-10 w-10 gold-text" />,
    title: 'Lifestyle Branding',
    description: 'A blend of biking passion and lifestyle identity in every touchpoint.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Why Café Cruisers?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          We’re not just a club; we’re a lifestyle. Here’s why we stand out:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
