/* eslint-disable react/no-array-index-key */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Eye, Heart, Target } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const cardData = [
  {
    title: 'Our Vision',
    description:
      'Cruiserverse imagines a future where automotive adventure, lifestyle, and technology unite to create a future rooted in innovation and community.',
    icon: Eye,
    gradient: 'from-gold-700/20 to-gold-800/20',
    accent: 'border-gold/50',
  },
  {
    title: 'Our Mission',
    description:
      'We strive to build the ultimate ecosystem for automotive adventurers, offering impactful products, services, and experiences.',
    icon: Target,
    gradient: 'from-gold-700/20 to-gold-800/20',
    accent: 'border-gold/50',
  },
  {
    title: 'Our Values',
    values: [
      'Adventure in all that we do',
      'Community-focused approach',
      'Commitment to sustainability',
      'Innovation and creativity',
      'Pursuit of excellence',
      'Purpose-driven growth',
    ],
    icon: Heart,
    gradient: 'from-gold-700/20 to-gold-800/20',
    accent: 'border-gold/50',
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) {
      return;
    };

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextCard = () => {
    setActiveIndex(prev => (prev + 1) % cardData.length);
    setAutoPlay(false);
  };

  const prevCard = () => {
    setActiveIndex(prev => (prev - 1 + cardData.length) % cardData.length);
    setAutoPlay(false);
  };

  const goToCard = (index: number) => {
    setActiveIndex(index);
    setAutoPlay(false);
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
            About Cruiserverse
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our journey, mission, and the values that drive us forward
          </p>
        </motion.div>

        {/* Grid Layout for Carousel and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Vertical Carousel */}
          <div className="relative">
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-2">
                {cardData.map((_, index) => (
                  <Button key={index} onClick={() => goToCard(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gold shadow-lg shadow-gold/25' : 'bg-white/30 hover:bg-gold/50'}`} />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={prevCard}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                >
                  <ChevronUp className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextCard}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
                >
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative h-[350px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`absolute inset-0 bg-gradient-to-br ${cardData[activeIndex]?.gradient} backdrop-blur-lg border ${cardData[activeIndex]?.accent} rounded-3xl p-8 shadow-2xl `}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                      {cardData[activeIndex]?.icon
                        && React.createElement(cardData[activeIndex].icon, {
                          className: 'w-6 h-6 text-white',
                        })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {cardData[activeIndex]?.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {cardData[activeIndex]?.description && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-200 leading-relaxed text-lg"
                    >
                      {cardData[activeIndex].description}
                    </motion.p>
                  )}

                  {cardData[activeIndex]?.values && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-3"
                    >
                      {cardData[activeIndex].values.map((value, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center space-x-3 text-gray-200"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-lg">{value}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-white/10 rounded-full h-1">
              <motion.div
                className="h-1 bg-gradient-to-r from-gold/25 to-gold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / cardData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Right: Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group  mt-9"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-gold/50">
              <Image
                src="/assets/image-vision.jpg"
                alt="About Cruiserverse"
                width={600}
                height={600}
                className="rounded-3xl object-cover w-full h-auto group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Floating elements */}
              <motion.div
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100"
                initial={false}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
