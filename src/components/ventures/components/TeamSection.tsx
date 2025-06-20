'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function TeamSection() {
  const handleButtonClick = () => {
    const a = document.createElement('a');
    a.href = 'mailto:info@cafecruisers.in';
    a.click();
  };

  const teamMembers = [
    {
      name: 'Abisek Shravn',
      role: 'Founder & CTO',
      image: '/assets/founder/1.jpg',
      description: 'Adventure enthusiast with a passion for building communities and creating unique experiences.',
      accent: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Shree Babu',
      role: 'Co-founder & CEO',
      image: '/assets/founder/2.jpg',
      description: 'Visionary designer who brings our brand and experiences to life through creative storytelling.',
      accent: 'from-amber-500 to-orange-400',
    },
  ];
  return (
    <section className="relative py-24 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array.from({ length: 8 })].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-500"
            animate={{
              x: [0, i % 2 === 0 ? 50 : -50],
              y: [0, i % 3 === 0 ? 30 : -30],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{
              width: `${100 + (i * 20)}px`,
              height: '2px',
              left: `${10 + (i * 10)}%`,
              top: `${10 + (i * 7)}%`,
            }}
          />
        ))}
      </div>

      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our
            {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The passionate individuals behind Cruiserverse who bring our vision to life every day.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 py-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000 w-full sm:w-[360px]"
            >
              <div className="relative h-full transform-style-preserve-3d transition-all duration-500 group-hover:rotate-x-5">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-orange-500/20">
                  <div className="relative h-[380px] overflow-hidden">
                    <Image
                      fill
                      src={member.image}
                      alt={member.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${member.accent}`} />
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.accent} font-medium`}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105"
            onClick={handleButtonClick}
          >
            Join Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
