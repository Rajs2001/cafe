'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export const PartnershipSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const collaborations = [
    {
      title: 'Event Sponsorships',
      description: 'Co-host and fund ride events, fests, launches, and tours',
      icon: '🎪',
    },
    {
      title: 'Brand Collaborations',
      description: 'Product integration, test rides, gear & apparel collabs',
      icon: '🤝',
    },
    {
      title: 'Media & Content',
      description: 'Joint video series, custom storytelling',
      icon: '🎥',
    },
    {
      title: 'Technology',
      description: 'Co-develop or pilot digital mobility tools',
      icon: '💻',
    },
    {
      title: 'Training & Academy',
      description: 'Skill-building with our academy model',
      icon: '🎓',
    },
    {
      title: 'Investment Partnerships',
      description: 'Strategic scaling of Cruiserverse initiatives',
      icon: '📈',
    },
  ];

  const benefits = [
    {
      title: 'Pan-India reach',
      description: 'Fast-growing rider & creator communities',
      icon: '🗺️',
    },
    {
      title: 'B2C + B2B crossover',
      description: 'Model that delivers measurable impact',
      icon: '🔄',
    },
    {
      title: 'Full-cycle execution',
      description: 'Idea → Activation → Media → Analytics',
      icon: '🔄',
    },
    {
      title: 'Multi-vertical ecosystem',
      description: 'Designed to scale your impact',
      icon: '🌐',
    },
  ];

  return (
    <section className="relative lg:py-14 bg-zinc-900 overflow-hidden">
      {/* Animated background elements */}
      { hasMounted && (
        <div className="absolute inset-0 opacity-10">
          {[...Array.from({ length: 6 })].map((_, i) => (
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
      ) }

      <div className="container px-4 mx-auto relative z-10">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Strategic Collaborations
        </motion.h3>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Partnership Types */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-8 text-white flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                ⚙️
              </motion.span>
              Where We Collaborate
            </h4>

            <div className="space-y-6">
              {collaborations.map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 ${hoveredItem === index ? 'border-orange-500 bg-zinc-800/50' : 'border-zinc-700 bg-zinc-800/30'}`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`text-2xl p-3 rounded-lg ${hoveredItem === index ? 'bg-orange-500/20' : 'bg-zinc-700/50'}`}
                      animate={{
                        rotate: hoveredItem === index ? [0, 10, -10, 0] : 0,
                        scale: hoveredItem === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-orange-500 mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Why Partner */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-8 text-white flex items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ✨
              </motion.span>
              Why Partner With Us?
            </h4>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/30 hover:border-orange-500/50 transition-all duration-300"
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(217, 84, 16, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl p-3 rounded-lg bg-zinc-700/50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
