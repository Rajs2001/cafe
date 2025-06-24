'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { SearchIcon, Star, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Predefined animation values for floating elements
const ANIMATION_VALUES = [
  { left: '10%', top: '20%', duration: 4.5, delay: 0.3 },
  { left: '25%', top: '70%', duration: 5.2, delay: 0.8 },
  { left: '40%', top: '30%', duration: 3.8, delay: 0.5 },
  { left: '55%', top: '80%', duration: 4.2, delay: 0.2 },
  { left: '70%', top: '40%', duration: 5.0, delay: 0.7 },
  { left: '85%', top: '60%', duration: 4.8, delay: 0.4 },
  { left: '30%', top: '10%', duration: 5.5, delay: 0.6 },
  { left: '90%', top: '90%', duration: 4.0, delay: 0.9 },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useEffect(() => {
    // Create floating mechanical particles
    const createMechanicalParticle = () => {
      const types = ['gear', 'bolt', 'briefcase', 'star'];
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
        case 'briefcase':
          svgPath = '<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />';
          break;
        case 'star':
          svgPath = '<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />';
          break;
      }

      particle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full">${svgPath}
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
    <section
      ref={containerRef}
      className="relative w-full min-h-[80vh] py-24 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-zinc-900"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            background: 'url(/assets/image-working.jpg)',
            backgroundBlendMode: 'overlay',
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-zinc-900 opacity-80"></div>
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

      {/* Large rotating briefcase in bottom-right */}
      <motion.div
        className="absolute -right-20 -bottom-20 opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        <svg className="w-72 h-72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.div>

      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {ANIMATION_VALUES.map((value, i) => (
          <motion.div
            key={`animation-element-${i}-${value.left}-${value.top}`}
            className="absolute bg-orange-500 rounded-full"
            style={{
              width: `${150 + (i * 30)}px`,
              height: '2px',
              left: value.left,
              top: value.top,
            }}
            animate={{
              x: [0, i % 2 === 0 ? 50 : -50],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: value.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: value.delay,
            }}
          />
        ))}
      </div>

      <div className="container px-6 md:px-8 mx-auto relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                CAREERS AT CRUISERVERSE
              </span>
              <br />
              <span className="text-gray-300">
                JOIN THE ADVENTURE
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Turn your passion for adventure into a fulfilling career. Build innovative
              experiences with a team that's reshaping the way people connect with the open road.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#open-positions"
                className="rounded-full px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-medium transition-all transform hover:scale-105 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SearchIcon className="mr-2 h-5 w-5" />
                Find Open Positions
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/assets/image-working.jpg"
                alt="Careers at Cruiserverse"
                fill
                className="object-cover rounded-lg shadow-2xl shadow-orange-500/20"
                priority
                quality={90}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-orange-500/30 via-transparent to-transparent" />
            </div>

            {/* Stats cards */}
            <motion.div
              className="absolute -bottom-6 -right-3 bg-zinc-900 p-4 rounded-lg border border-orange-500/30 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center">
                <Users className="text-orange-400 w-5 h-5 mr-2" />
                <div>
                  <p className="text-orange-400 font-semibold">Growing Team</p>
                  <p className="text-sm text-gray-400">Join 50+ passionate professionals</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-3 bg-zinc-900 p-4 rounded-lg border border-orange-500/30 shadow-xl"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <Star className="text-orange-400 w-5 h-5 mr-2" />
                <div>
                  <p className="text-orange-400 font-semibold">4.8/5 Rating</p>
                  <p className="text-sm text-gray-400">Employee satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#why-join" className="text-orange-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
