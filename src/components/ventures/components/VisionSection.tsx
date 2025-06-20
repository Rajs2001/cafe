'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const visionPoints = [
  {
    title: 'Pan-India Rider Clubs',
    description: 'Establishing Pan-India Club Networks for local rider communities and skill development.',
  },
  {
    title: 'National Certification Academy',
    description: 'Expanding Skill Development Academy into a national certification body for ride leaders and tour professionals.',
  },
  {
    title: 'Smart Touring Infrastructure',
    description: 'Developing Smart Touring Infrastructure to enhance the riding experience in India.',
  },
  {
    title: 'Rural & Urban Mobility',
    description: 'Creating synergies for Rural & Urban Mobility through responsible tourism and sustainable models.',
  },
  {
    title: 'Adventure Career Platform',
    description: 'Positioning ourselves as the leading platform for adventure-based careers and community innovations.',
  },
];

export default function VisionSection() {
  return (
    <section className="relative z-10 py-28 bg-gradient-to-b from-[#1f1a17] via-[#191512] to-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            Future Vision
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cruiserverse is committed to building futures and fostering a more connected, inspired, and adventurous tomorrow.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-[#2a211d] border border-[#3a2f2a] rounded-2xl p-6 shadow-lg hover:shadow-orange-500/10 transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-black shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-1">
                    {point.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
