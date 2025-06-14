'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const WhatWeValueSection: React.FC = () => {
  const values = [
    {
      text: "Authenticity over appearances",
      icon: "🛠️",
      animation: { rotate: [0, 10, -10, 0] }
    },
    {
      text: "Agility over hierarchy",
      icon: "⚡",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      text: "Craftsmanship over shortcuts",
      icon: "🔧",
      animation: { x: [0, 5, -5, 0] }
    },
    {
      text: "Adventure in everything — from code to content",
      icon: "🏍️",
      animation: { y: [0, -5, 0] }
    }
  ];

  return (
    <section className="relative py-20 bg-zinc-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
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

      {/* Floating bike parts */}
      <div className="absolute inset-0 overflow-hidden">
        {['⚙️', '🔩', '⛓️', '🔧'].map((part, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {part}
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
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"
            whileInView={{
              backgroundPositionX: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            What We Value
          </motion.h3>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.li
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-zinc-700/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-600 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col items-center"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(217, 84, 16, 0.1)"
                }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={value.animation}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {value.icon}
                </motion.div>
                <motion.p
                  className="text-white font-semibold text-center text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {value.text}
                </motion.p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Animated divider */}
        <motion.div
          className="mt-16 mx-auto h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-3/4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};