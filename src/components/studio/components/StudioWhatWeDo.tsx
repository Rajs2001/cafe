'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Users, BookOpen, PenTool } from 'lucide-react';

export default function StudioWhatWeDo() {
  const [isMounted, setIsMounted] = useState(false);
  
  const services = [
    {
      icon: <Film className="w-5 h-5" />,
      title: "Event & Ride Aftermovies",
      description: "Crisp, cinematic edits that capture the soul of every journey"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Creator Collaborations",
      description: "Partnering with riders, filmmakers, and artists to co-create content"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Cruiserverse Comics",
      description: "Original illustrated narratives combining mobility and mythology"
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Content Design",
      description: "From brand films to visual content for social and web"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden">
      {/* Animated floating film reels */}
      {isMounted && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-amber-500/20 rounded-full"
              style={{
                width: `${100 + i * 40}px`,
                height: `${100 + i * 40}px`,
                left: `${10 + i * 20}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, 20, 0],
                rotate: [0, 180],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      )}

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gold-text">What We Do</h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 mb-8 flex-wrap"
          >
            {['Visual Storytelling', 'Creative Production', 'Branded Media'].map((item, idx) => (
              <span key={idx} className="text-amber-500/80 text-lg font-medium">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Whether it's launching a new ride series, building cinematic content for a campaign, or publishing original comic universes — we offer end-to-end creative production services aligned with the Cruiserverse spirit.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="text-xl gold-text font-semibold">Our Core Focus Areas</h4>
          <div className="w-20 h-0.5 bg-amber-500 mx-auto mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/30 rounded-xl p-6 transition-all"
            >
              <div className="gold-bg text-black w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                {React.cloneElement(service.icon, { className: `${service.icon.props.className} w-6 h-6` })}
              </div>
              <h4 className="gold-text text-lg font-semibold mb-2 text-center">{service.title}</h4>
              <p className="text-gray-400 text-sm text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}