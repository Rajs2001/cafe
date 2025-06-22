'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const WhatDrivesUsSection: React.FC = () => {
  const drivingPrinciples = [
    { icon: '⚙️', text: 'Freedom to innovate' },
    { icon: '🔧', text: 'Responsibility to our community' },
    { icon: '🏍️', text: 'Passion for riding' },
    { icon: '💡', text: 'Bold thinking' },
  ];

  return (
    <section className="relative pt-16 bg-zinc-900 overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array.from({ length: 8 })].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/20 rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 60 + 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating bike icon */}
      <motion.div
        className="absolute right-10 top-1/4 opacity-10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 15l1.5 1.5M18 15l-1.5 1.5M15 12h.01M12 3h5a2 2 0 012 2v8a5 5 0 11-10 0V5a2 2 0 012-2z" />
        </svg>
      </motion.div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Drives Us?
        </motion.h3>

        <motion.div
          className="max-w-3xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Animated quote marks */}
          <motion.div
            className="absolute -left-6 -top-6 text-6xl text-orange-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            "
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-12 text-center leading-relaxed relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At
            {' '}
            <span className="text-orange-400 font-semibold">Cruiserverse</span>
            , we're not just building products or events — we're igniting a movement. And it starts within. Our culture is rooted in freedom, responsibility, and creativity, allowing every individual to bring their best — not just to work, but to life.
          </motion.p>

          <motion.p
            className="text-orange-400 text-xl md:text-2xl italic text-center mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            "Ride fast, think bold, stay real."
          </motion.p>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {drivingPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/30 transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{principle.icon}</div>
              <h4 className="text-white font-medium">{principle.text}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="mt-20 mx-auto h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-3/4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};
