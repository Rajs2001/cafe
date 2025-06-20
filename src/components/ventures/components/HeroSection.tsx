'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

// Predefined animation values to avoid hydration mismatch
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

const HeroSection = ({ handleScroll }: { handleScroll: () => void }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section
      ref={containerRef}
      className="py-24 relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-zinc-900"
    >
      {/* Static adventure trail elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {ANIMATION_VALUES.map((value, i) => (
          <motion.div
            key={i}
            className="absolute bg-orange-500 rounded-full"
            animate={{
              x: [0, i % 2 === 0 ? 50 : -50],
              y: [0, i % 3 === 0 ? 30 : -30],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: value.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{
              width: `${100 + (i * 20)}px`,
              height: '2px',
              left: value.left,
              top: value.top,
              animationDelay: `${value.delay}s`,
            }}
          />
        ))}
        {' '}

      </div>

      <div className="container relative z-10 h-full px-6 md:px-8 mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                ADVENTURE IS OUR LANGUAGE.
              </span>
              <br />
              <span className="text-gray-300">
                COMMUNITY IS OUR TERRAIN.
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Meet our thriving adventure verticals — communities fueled by passion for the open road, off-road terrain,
              and the stories in between.
            </p>

            <Button
              className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-black font-medium transition-all transform hover:scale-105"
              onClick={handleScroll}
            >
              Meet Our Team
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y }}
          >
            <div className="relative w-full aspect-[3/4] max-w-[600px] mx-auto">
              <Image
                src="/assets/Motorcycle.png.webp"
                alt="Ventures Team"
                fill
                className="object-contain"
                priority
                quality={100}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-20 bg-orange-500 blur-xl" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-3 bg-zinc-900 p-4 rounded-lg border border-orange-500/30 shadow-xl"
              whileHover={{ y: -5 }}
            >
              <p className="text-orange-400 font-semibold">Founded in 2018</p>
              <p className="text-sm text-gray-400">5+ years of adventure</p>
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
        <div className="text-orange-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
