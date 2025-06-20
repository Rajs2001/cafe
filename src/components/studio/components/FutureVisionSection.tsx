// components/FutureVisionSection.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookText, Film, Rocket } from 'lucide-react';

const FloatingOrb = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        filter: 'blur(20px)'
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 6 + delay,
        delay,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    />
  );
};

export default function FutureVisionSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  const visions = [
    {
      icon: <BookText className="w-5 h-5" />,
      title: "Digital Comic Series",
      description: "Launching a full digital comic universe by 2030 with interactive storytelling"
    },
    {
      icon: <Film className="w-5 h-5" />,
      title: "Creator Labs",
      description: "Cutting-edge film labs for automotive content creators with VR capabilities"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Branded Media",
      description: "Next-gen media services powered by AI for automotive startups"
    }
  ];

  // Fixed positions for orbs (no randomness)
  const orbs = [
    { x: 10, y: 20, size: 200, delay: 0 },
    { x: 80, y: 40, size: 150, delay: 2 },
    { x: 30, y: 70, size: 180, delay: 4 },
    { x: 70, y: 10, size: 120, delay: 6 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Background orbs - only render on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {orbs.map((orb, i) => (
            <FloatingOrb key={i} {...orb} />
          ))}
        </div>
      )}

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gold-text bg-clip-text text-transparent">
              Future Vision
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            As we scale, Cruiserverse Studio is pioneering the next generation of automotive storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visions.map((vision, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 rounded-2xl p-8 backdrop-blur-sm border border-zinc-700/50 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF8C0010,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="gold-bg p-3 rounded-full w-max mb-6">
                  {React.cloneElement(vision.icon, { className: "w-6 h-6 text-black" })}
                </div>
                <h3 className="text-2xl font-bold gold-text mb-3">{vision.title}</h3>
                <p className="text-zinc-300">{vision.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center relative"
        >
          <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full -z-10" />
          <p className="text-2xl text-zinc-300 italic relative">
            "Where automotive passion meets digital innovation"
          </p>
        </motion.div>
      </div>
    </section>
  );
}