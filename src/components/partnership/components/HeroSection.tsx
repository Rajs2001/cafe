/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const getWindowHeight = () =>
  typeof window !== 'undefined' ? window.innerHeight : 0;

type Particle = {
  id: number;
  size: number;
  left: number;
  top: number;
  xDelta: number;
  duration: number;
  delay: number;
};

export const HeroSection: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const HandleClickToDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Ventures_Presentation.pdf';
    link.download = 'cruiserverse_Ventures_Presentation.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setHasMounted(true);

    const controls = animate(count, 100, { duration: 3 });

    const generated: Particle[] = [...Array.from({ length: 20 })].map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xDelta: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);

    return () => controls.stop();
  }, []);

  const focusItems = [
    {
      title: 'Community Experiences',
      description: 'Motorcycle & off-road adventures',
      icon: '🏍️',
    },
    { title: 'Event Production', description: 'Strategic brand activations', icon: '🎪' },
    { title: 'Digital Platforms', description: 'Planning, rentals & rewards', icon: '💻' },
    { title: 'Creative Content', description: 'Storytelling & media production', icon: '🎥' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <svg className="w-full max-w-4xl h-auto" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(234,88,12,0.1)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {[...Array.from({ length: 12 })].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="20"
                stroke="rgba(234,88,12,0.3)"
                strokeWidth="2"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {hasMounted && (
        <div className="absolute inset-0">
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-orange-500/10"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -getWindowHeight()],
                x: [0, p.xDelta],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      <div className="container px-4 mx-auto relative z-10 h-full flex items-center pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 block mb-4">
                ACCELERATE
              </span>
              <span className="text-white">WITH US.</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-orange-400 font-medium">Cruiserverse</span>
                {' '}
                is a future‑facing
                automotive adventure and lifestyle ecosystem.
              </motion.p>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center">
                <motion.span
                  className="inline-block mr-3"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  ⚙️
                </motion.span>
                We focus on:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl border transition-all duration-300 border-zinc-700 bg-zinc-800/30 hover:border-orange-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`text-3xl p-3 rounded-lg ${
                          hoveredIndex === index ? 'bg-orange-500/20' : 'bg-zinc-700/50'
                        }`}
                        animate={
                          hoveredIndex === index
                            ? { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }
                            : { rotate: 0, scale: 1 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column – logo */}
          <motion.button
            type="button"
            onClick={HandleClickToDownload}
            className="relative w-full aspect-square max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/img3.jpg"
              alt="Cruiserverse Logo"
              fill
              className="object-contain rounded-full cursor-pointer"
              priority
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl -z-10"
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-orange-500/20 rounded-full -z-10"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-8 text-orange-500 text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-white/50">SPEED: </span>
        <motion.span className="text-orange-400">{rounded}</motion.span>
        <span className="text-white/50"> MPH</span>
      </motion.div>
    </section>
  );
};
