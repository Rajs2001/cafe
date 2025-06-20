'use client';

import React from 'react';
import { Award, Calendar, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      icon: <Award className="h-10 w-10" />,
      value: '7+',
      label: 'Years of Experience',
      suffix: 'Years',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Users className="h-10 w-10" />,
      value: '5,000+',
      label: 'Community Members',
      suffix: 'Riders',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      value: '100+',
      label: 'Events Organized',
      suffix: 'Events',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      value: '3',
      label: 'Ventures Launched',
      suffix: 'Ventures',
      color: 'from-amber-500 to-orange-400'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
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
              ease: 'linear'
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

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group perspective-1000"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700 shadow-xl h-full flex flex-col items-center text-center group-hover:shadow-orange-500/20 transition-all duration-300">
                <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${stat.color} text-black`}>
                  {stat.icon}
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-amber-500">
                    {stat.value}
                  </span>
                  <span className="text-orange-400 ml-1">{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">{stat.label}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}