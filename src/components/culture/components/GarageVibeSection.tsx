'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const GarageVibeSection: React.FC = () => {
  const vibePoints = [
    { 
      text: "Open tables, not cubicles",
      icon: "🛠️",
      color: "from-orange-400 to-orange-500"
    },
    { 
      text: "Loud ideas, quiet focus",
      icon: "🔊",
      color: "from-amber-400 to-amber-500"
    },
    { 
      text: "Music, machines, and meaningful work",
      icon: "🎵",
      color: "from-yellow-400 to-yellow-500"
    },
    { 
      text: "Team hangouts, ride days, and café runs",
      icon: "🏍️",
      color: "from-red-400 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 bg-zinc-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
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
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating tools animation */}
      <div className="absolute inset-0 overflow-hidden">
        {['🛠️', '🔧', '⚙️', '🔩'].map((tool, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              delay: Math.random() * 5
            }}
          >
            {tool}
          </motion.div>
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
            whileInView={{
              backgroundPositionX: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            The Garage Vibe
          </motion.h3>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our workspaces (physical or remote) reflect the spirit of the road:
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {vibePoints.map((point, index) => (
            <motion.li
              key={index}
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`h-full bg-gradient-to-br ${point.color} p-0.5 rounded-xl`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full bg-zinc-800/90 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center">
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                  >
                    {point.icon}
                  </motion.div>
                  <motion.p
                    className="text-white font-semibold text-center text-lg"
                    whileHover={{ x: 3 }}
                  >
                    {point.text}
                  </motion.p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Animated bike at bottom */}
        <motion.div
          className="mt-16 mx-auto w-24 h-24"
          animate={{
            x: ['-20%', '120%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-orange-500">
            <path d="M5 15l1.5 1.5M18 15l-1.5 1.5M15 12h.01M12 3h5a2 2 0 012 2v8a5 5 0 11-10 0V5a2 2 0 012-2z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};