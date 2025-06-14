'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhyBrandsChooseSection() {
  const points = [
    'Biking Culture Experts',
    'End-to-End Execution',
    'Pan-India Access',
    'Scalable Solutions',
    'Content-Ready Delivery',
    'Brand-Safe Operations'
  ];

  const descriptions = [
    'Deep understanding of motorcycle culture and community',
    'Complete in-house planning and execution',
    'Nationwide mobility and terrain expertise',
    'From intimate rides to national campaigns',
    'With social & cinematic assets included',
    'Reliable, on-time, professional execution'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Floating subtle hexagons in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-amber-500/20 w-24 h-24"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Brands Choose <span className="gold-text">Pulse</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Because We Speak <span className="gold-text italic">"Rider"</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              whileHover={{ 
                y: -5,
                borderColor: 'rgba(255, 183, 0, 0.3)'
              }}
              className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 transition-all duration-300 group"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                minHeight: '220px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className="gold-bg text-black w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold">
                  {idx + 1}
                </div>
                <h3 className="gold-text text-lg font-semibold mb-2">{point}</h3>
                <p className="text-zinc-400 text-sm">{descriptions[idx]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central hexagon for visual balance */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="gold-bg w-32 h-32 mx-auto mt-12 flex items-center justify-center rounded-full"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          <span className="text-black font-bold text-xl">PULSE</span>
        </motion.div>
      </div>
    </section>
  );
}