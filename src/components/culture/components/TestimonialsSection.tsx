/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Abisek Shravn',
    role: 'Founder',
    image: '/assets/testimonials/6.jpg',
    quote: 'You’re not ‘fitting in’ — you’re helping shape what Cruiserverse is becoming',
    stars: 5,
  },
  {
    name: 'Mausam Singh',
    role: 'HR',
    image: '/assets/testimonials/8.jpg',
    quote: 'Working here feels like a road trip — a little wild, a little unpredictable, but always worth it.',
    stars: 5,
  },
  {
    name: 'Kuldeep',
    role: 'Expedition Leader',
    image: '/assets/testimonials/9.jpg',
    quote: 'Working here is like building a roller coaster while riding it — thrilling, chaotic, and ridiculously fun',
    stars: 4,
  },
];

export const TestimonialsSection: React.FC = () => (
  <section className="bg-zinc-900 py-16">
    <div className="container px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Crew
          {' '}
          <span className="gold-text">Testimonials</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Words from the Crew</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-zinc-800 border-zinc-700 overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array.from({ length: t.stars })].map((_, j) => (
                  <svg
                    key={j}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 italic">
                {t.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
