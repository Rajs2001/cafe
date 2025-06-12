/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
/* eslint-disable react-dom/no-missing-button-type */
'use client';

import { ArrowRight, Camera, Coffee, Cpu, Mountain, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      id: 'ventures',
      icon: Coffee,
      title: 'Ventures',
      description: 'Our journey, milestones, and the team behind Cruiserverse\'s vision and mission.',
      href: '/ventures',
      gradient: 'from-gold -500/20 to-gold-600/20',
      glowColor: 'shadow-gold -500/25',
      delay: '0ms',
    },
    {
      id: 'pulse',
      icon: Mountain,
      title: 'Pulse',
      description: 'Events, marketing initiatives, and community building activities that drive our ecosystem.',
      href: '/pulse',
      gradient: 'from-gold -500/20 to-gold-600/20',
      glowColor: 'shadow-gold -500/25',
      delay: '0ms',
    },
    {
      id: 'studio',
      icon: Camera,
      title: 'Studio',
      description: 'Our media gallery showcasing photos, video stories, and creative content from our adventures.',
      href: '/studio',
      gradient: 'from-gold -500/20 to-gold-600/20',
      glowColor: 'shadow-gold -500/25',
      delay: '0ms',
    },
    {
      id: 'core',
      icon: Cpu,
      title: 'Core',
      description: 'Our product ecosystem including GT Vault, Ride Pilot, and other innovative solutions.',
      href: '/core',
      gradient: 'from-gold -500/20 to-gold-600/20',
      glowColor: 'shadow-gold -500/25',
      delay: '0ms',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gold -500/10 to-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array.from({ length: 20 })].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-gold -400 to-gold-500 rounded-full opacity-60"
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
        {/* Header Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative inline-block mb-6">
            <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-gold -400 animate-spin" />
            <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-purple-400 animate-pulse" />
            <h2 className="text-3xl md:text-5xl lg:text-4xl font-black bg-gradient-to-r from-white via-gold-300 to-gold -400 bg-clip-text text-transparent leading-tight">
              Explore Our Thriving
              <br />
              <span className="relative">
                Ecosystem
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold -500 to-gold-500 rounded-full transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-out 0.5s forwards' }} />
              </span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Uncover a world of adventures, experiences, and innovations designed for both
            <br className="hidden md:block" />
            <span className="text-transparent bg-gradient-to-r from-gold -400 to-gold-500 bg-clip-text font-semibold">
              adventurers and storytellers
            </span>
            {' '}
            Dive into our four verticals that bring the Cruiserverse to life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: card.delay }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${card.glowColor} group-hover:shadow-2xl`} />

                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-gold -500/30 group-hover:shadow-2xl">

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-4 group-hover:bg-gradient-to-br group-hover:from-zinc-700 group-hover:to-zinc-800 transition-all duration-500">
                      <Icon className={`w-12 h-12 text-gold -400 group-hover:text-gold-300 transition-all duration-500 ${isHovered ? 'animate-bounce' : ''}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300 min-h-[5rem]">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-zinc-700/50 group-hover:border-gold-500/20 transition-colors duration-300 bg-transparent">
                    <button className="flex items-center gap-2 text-gold -400 hover:text-white  font-semibold group-hover:gap-4 transition-all duration-300 relative overflow-hidden" onClick={() => window.location.href = card.href}>
                      <span className="relative z-10 hover:border-none">Learn more</span>
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} />

                      {/* Button Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold -500/10 to-gold-500/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-gold -400 to-gold-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-200 transition-all duration-700 delay-100" />
                </div>

                {/* Floating Elements on Hover */}
                {isHovered && (
                  <div className="absolute -top-2 -right-2 pointer-events-none">
                    <div className="w-3 h-3 bg-gradient-to-r from-gold -400 to-gold-500 rounded-full animate-ping" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold -500/10 to-gold-500/10 backdrop-blur-sm border border-gold -500/20 rounded-full">
            <Sparkles className="w-5 h-5 text-gold -400 animate-spin" />
            <span className="text-gold-300 font-medium">Ready to dive deeper into the Cruiserverse?</span>
            <ArrowRight className="w-5 h-5 text-gold -400 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  );
};

export default Intro;
