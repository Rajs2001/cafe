'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsNextSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden">
      {/* Animated road lines in background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-amber-500/30"
            style={{
              top: `${20 + (i * 15)}%`,
              width: '150%',
              left: '-25%'
            }}
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="container px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-text">What's Next</h2>
          
          <div className="relative inline-block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 h-0.5 bg-amber-500"
            />
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We're just getting started. As Cruiserverse expands, so will Pulse — with:
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Seasonal Tours',
              icon: '🗺️',
              desc: 'Curated riding experiences across diverse terrains'
            },
            {
              title: 'Large Festivals',
              icon: '🎪', 
              desc: 'Expanding to major automotive celebrations'
            },
            {
              title: 'Brand Experiences',
              icon: '✨',
              desc: 'Creator-led activations for authentic engagement'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 text-center transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="gold-text text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block border-l-2 border-amber-500 pl-4">
            <p className="text-gray-400 italic text-lg">
              "Join us as we shape the future of automotive events — one ride at a time."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}