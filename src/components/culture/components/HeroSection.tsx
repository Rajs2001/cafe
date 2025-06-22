'use client';

import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

export const HeroSection = () => {
  useEffect(() => {
    // Create floating mechanical particles
    const createMechanicalParticle = () => {
      const types = ['gear', 'bolt', 'nut'];
      const type = types[Math.floor(Math.random() * types.length)];
      const particle = document.createElement('div');
      particle.className = 'mechanical-particle absolute';

      let svgPath = '';
      switch (type) {
        case 'gear':
          svgPath = '<path d="M12 6v6m0 0v6m0-6h6m-6 0H6m11-3a3 3 0 11-6 0 3 3 0 016 0z" />';
          break;
        case 'bolt':
          svgPath = '<path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z" />';
          break;
        case 'nut':
          svgPath = '<path d="M12 2v4m0 12v4m8-8h-4m-12 0H4m16.657-5.657l-2.829-2.829m-9.172 9.172l-2.828-2.829m12.02 2.828l2.829-2.828m-9.171-9.172L4.343 4.343" />';
          break;
      }

      particle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full">          ${svgPath}
        </svg>
      `;
      particle.style.width = `${Math.random() * 30 + 10}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.opacity = `${Math.random() * 0.2 + 0.05}`;
      particle.style.color = `rgba(234, 88, 12, ${Math.random() * 0.3 + 0.1})`;
      const duration = `${Math.random() * 40 + 20}s`;
      particle.style.animation = `float ${duration} infinite linear`;
      document.querySelector('.mechanical-container')?.appendChild(particle);
    };

    for (let i = 0; i < 20; i++) {
      createMechanicalParticle();
    }
  }, []);
  return (
    <section className="relative w-full min-h-[90vh] py-24 overflow-hidden bg-gradient-to-b from-black to-zinc-900 flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            background: 'url(/assets/img2.jpg)',
            backgroundBlendMode: 'overlay',
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900 opacity-80"></div>
      </div>

      {/* Mechanical background elements container */}
      <div className="absolute inset-0 overflow-hidden mechanical-container"></div>

      {/* Large rotating gear in top-left */}
      <motion.div
        className="absolute -left-20 -top-20 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg className="w-64 h-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6m11-3a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>

      {/* Large rotating nut in bottom-right */}
      <motion.div
        className="absolute -right-20 -bottom-20 opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <svg className="w-72 h-72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <path d="M12 2v4m0 12v4m8-8h-4m-12 0H4m16.657-5.657l-2.829-2.829m-9.172 9.172l-2.828-2.829m12.02 2.828l2.829-2.828m-9.171-9.172L4.343 4.343" />
        </svg>
      </motion.div>

      {/* Bike chain pattern background */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
          radial-gradient(circle, rgba(234, 88, 12, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
        }}
      >
      </div>

      {/* Animated bike silhouette */}
      <motion.div
        className="absolute right-10 bottom-1/4 opacity-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg className="w-64 h-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M5 15l1.5 1.5M18 15l-1.5 1.5M15 12h.01M12 3h5a2 2 0 012 2v8a5 5 0 11-10 0V5a2 2 0 012-2z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DRIVEN BY PASSION.
            <br />
            FUELED BY PURPOSE.
          </motion.h1>

          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-orange-500 to-amber-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Optional descriptive text can go here */}
          </motion.p>
        </div>
      </div>

      <style jsx>
        {`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
        
        .mechanical-particle {
          animation: float linear infinite;
        }
      `}
      </style>
    </section>
  );
};
