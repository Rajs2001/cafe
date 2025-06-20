'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black py-24">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array.from({ length: 8 })].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          {[...Array.from({ length: 20 })].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-orange-500/30"
              style={{
                width: `${Math.random() * 100 + 50}%`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 h-full px-6 md:px-8 mx-auto">
        <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">PULSE</span>
            </h1>

            <p className="mb-8 text-2xl font-light text-gray-300">
              The Events & Brand Activation Wing of CRUISERVERSE
            </p>

            <div className="space-y-2 text-gray-400">
              <p className="leading-relaxed">
                {/* <span className="text-gold-400">Cruiserverse Pulse</span> */}
                {' '}
                The dynamic events and marketing division focused on creating
                {' '}
                <span className="underline decoration-orange-500/30">immersive experiences</span>
                {' '}
                for the automotive and lifestyle sectors.
              </p>
              <p className="leading-relaxed">
                As a premium B2B platform, we support automotive brands, lifestyle ventures, and riding communities in
                {' '}
                <span className="font-medium text-orange-400">culturally authentic</span>
                {' '}
                audience engagement, from concept to execution.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <Image
                src="/color1/full/white_logo_color1_background.png"
                alt="Cruiserverse Pulse"
                fill
                className="object-contain"
                priority
                quality={100}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full opacity-20 bg-orange-500 blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating adventure elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-orange-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
