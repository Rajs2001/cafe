'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Route, Camera, Users, Mic2, BarChart2, Package, ClipboardList } from 'lucide-react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 10 },
  },
};

const FloatingShapes = () => {
  const shapes = [
    { id: 1, style: 'left-10 top-1/4 w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full' },
    { id: 2, style: 'right-20 top-1/3 w-24 h-24 bg-amber-500/5 border border-amber-500/20 rounded-lg rotate-45' },
    { id: 3, style: 'left-1/4 bottom-1/4 w-20 h-20 bg-amber-500/15 border border-amber-500/25 rounded-full' },
    { id: 4, style: 'right-1/3 top-1/2 w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-lg' },
  ];

  return (
    <>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.style} backdrop-blur-sm`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
            y: [-10, 10, -10],
            x: [0, 5, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  );
};

export default function WhatWeDoSection() {
  const services = [
    { title: 'Ride-Based Events', desc: 'Route design, permissions, convoy management, marshals', icon: <Route className="w-5 h-5" /> },
    { title: 'Brand Launches', desc: 'End-to-end planning and execution', icon: <Package className="w-5 h-5" /> },
    { title: 'Community Meets', desc: 'Registration, rider kits, stage production', icon: <Users className="w-5 h-5" /> },
    { title: 'Media Production', desc: 'Aftermovies, reels, photography', icon: <Camera className="w-5 h-5" /> },
    { title: 'Brand Collaborations', desc: 'On-ground influence meets digital presence', icon: <Mic2 className="w-5 h-5" /> },
    { title: 'Pop-Up Installations', desc: 'Café booths, experiential zones', icon: <BarChart2 className="w-5 h-5" /> },
    { title: 'Reporting & Feedback', desc: 'Event analytics and impact summaries', icon: <ClipboardList className="w-5 h-5" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900 py-20 px-4">
      {/* Floating background shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with accent underline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            What We Do
            <span className="block w-20 h-1 bg-amber-500 mt-3"></span>
          </h3>
          <p className="text-zinc-400 text-lg max-w-2xl">
            End-to-End Project-Based Solutions
            <span className="block text-sm italic text-zinc-500 mt-1">
              (We don't do traditional retainers — each project gets our full throttle.)
            </span>
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/70 hover:bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/30 p-6 rounded-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with gradient ring */}
              <div className="relative z-10 flex items-center mb-4">
                <div className="p-2 rounded-full bg-zinc-800/70 group-hover:bg-gradient-to-br from-amber-500/20 to-amber-500/10 ring-1 ring-zinc-700 group-hover:ring-amber-500/30 transition-all">
                  {React.cloneElement(service.icon, {
                    className: `${service.icon.props.className} text-amber-500`,
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}