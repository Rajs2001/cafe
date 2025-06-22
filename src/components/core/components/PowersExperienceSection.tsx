'use client';

import {
  ArrowRight,
  Calendar,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

/**
 * PowersExperienceSection – revamp of the original “What Powers the Experience?” block.
 * Adopts the dynamic neon‑glass UI used in the Intro component shared by the user.
 */
export default function PowersExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      id: 'community',
      icon: Users,
      title: 'Community',
      points: [
        'Build local and national motorcycle communities.',
        'Attend meetups, rides, and special club events.',
        'Engage with passionate riders across India.',
      ],
      gradient: 'from-gold-500/20 to-gold-600/20',
      glowColor: 'shadow-gold-500/25',
      delay: '0ms',
    },
    {
      id: 'rides',
      icon: Calendar,
      title: 'Rides',
      points: [
        'Participate in weekly city rides and long‑hauls.',
        'Curated routes led by experienced ride pilots.',
        'Safe and well‑organised for all skill levels.',
      ],
      gradient: 'from-purple-500/20 to-pink-600/20',
      glowColor: 'shadow-purple-500/25',
      delay: '100ms',
    },
    {
      id: 'rewards',
      icon: Trophy,
      title: 'Rewards',
      points: [
        'Earn points for taking part in rides and activities.',
        'Redeem exclusive club merchandise and services.',
        'Enjoy discounts from partner brands and vendors.',
      ],
      gradient: 'from-amber-500/20 to-amber-600/20',
      glowColor: 'shadow-amber-500/25',
      delay: '200ms',
    },
    {
      id: 'services',
      icon: Wrench,
      title: 'Services',
      points: [
        'On‑demand motorcycle rentals through the app.',
        'Access service partners and riding‑gear discounts.',
        'Dedicated support for trip planning and issues.',
      ],
      gradient: 'from-cyan-500/20 to-sky-600/20',
      glowColor: 'shadow-cyan-500/25',
      delay: '300ms',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gold-500/10 to-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array.from({ length: 20 })].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="relative inline-block mb-6">
            <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-gold-400 animate-spin" />
            <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-purple-400 animate-pulse" />
            <h2 className="text-3xl md:text-5xl lg:text-4xl font-black bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-clip-text text-transparent leading-tight">
              What Powers The Experience?
              <br />
              <span className="relative">
                Experience?
                <div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-500 rounded-full transform scale-x-0 animate-pulse"
                  style={{ animation: 'scaleX 2s ease-out 0.5s forwards' }}
                />
              </span>
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: card.delay }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow layer */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${card.glowColor} group-hover:shadow-2xl`}
                />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-gold-500/30 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-4 group-hover:from-zinc-700 group-hover:to-zinc-800 transition-all duration-500">
                      <Icon
                        className={`w-12 h-12 text-gold-400 group-hover:text-gold-300 transition-all duration-500 ${isHovered ? 'animate-bounce' : ''}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed">
                      {card.points.map(pt => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-zinc-700/50 group-hover:border-gold-500/20 transition-colors duration-300">
                    {/* In this context the cards are informational; adjust behaviour if click action required */}
                    <button
                      className="flex items-center gap-2 text-gold-400 hover:text-white font-semibold group-hover:gap-4 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="relative z-10">Join the club</span>
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-500/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-200 transition-all duration-700 delay-100" />
                </div>

                {/* Ping effect */}
                {isHovered && (
                  <div className="absolute -top-2 -right-2 pointer-events-none">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full animate-ping" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Local keyframes */}
      <style jsx>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}
      </style>
    </section>
  );
}
