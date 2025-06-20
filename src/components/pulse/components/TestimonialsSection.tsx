'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Rahul Mehta',
    title: 'Adventure Enthusiast',
    content:
      'Café Cruisers has completely changed the way I ride. The community, the vibes, and the events are just unmatched. Love being part of this tribe!',
  },
  {
    name: 'Sneha Verma',
    title: 'Marketing Manager',
    content:
      'As a brand, collaborating with Café Cruisers gave us incredible exposure. Their audience is niche, engaged, and truly passionate.',
  },
  {
    name: 'Arjun Rawat',
    title: 'Photographer & Rider',
    content:
      'The rides are thrilling, the cafés are cozy, and the people are amazing. Every event is a new story waiting to happen.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gold-text">Community Says</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Hear from the riders, brands, and creators who’ve been part of our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-300 italic mb-4">“{testimonial.content}”</p>
              <h4 className="text-lg font-semibold gold-text">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
