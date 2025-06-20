'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const InsideCruiserverseSection: React.FC = () => {
  const culturePoints = [
    {
      title: 'Flat Structure',
      description: 'Ideas win here — not titles',
      icon: '📊',
    },
    {
      title: 'Creative Freedom',
      description: 'You get space to explore, experiment, and shape what we\'re building',
      icon: '🎨',
    },
    {
      title: 'Rider\'s Rhythm',
      description: 'We respect your time — whether it\'s the 6 AM ride or the 2 PM brainstorm',
      icon: '⏱️',
    },
    {
      title: 'Outcome Hours',
      description: 'Work isn\'t clocked. It\'s lived, created, and delivered',
      icon: '🚀',
    },
  ];

  return (
    <section className="relative py-20 bg-zinc-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array.from({ length: 6 })].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/20 rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
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

      {/* Floating bike gear */}
      <motion.div
        className="absolute left-1/4 top-1/3 opacity-5"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6m11-3a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"
          >
            Inside Cruiserverse
          </motion.h3>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We operate more like a passionate crew than a traditional office
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {culturePoints.map((point, index) => (
            <motion.li
              key={index}
              className="bg-zinc-700/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-600 hover:border-orange-500/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(217, 84, 16, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-3xl p-3 rounded-lg bg-zinc-700/50"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {point.icon}
                </motion.div>
                <div>
                  <motion.h4
                    className="text-lg font-bold text-orange-500 mb-2"
                    whileHover={{ x: 2 }}
                  >
                    {point.title}
                  </motion.h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Animated divider */}
        <motion.div
          className="mt-16 mx-auto h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-3/4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};
