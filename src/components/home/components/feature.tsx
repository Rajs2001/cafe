/* eslint-disable react/no-array-index-key */
'use client';

import { motion } from 'framer-motion';
import { Coffee, Cpu, Mountain } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Café Cruisers',
    description:
      'Urban café experiences for motorcycle enthusiasts and coffee lovers.',
    icon: Coffee,
  },
  {
    title: 'Mud Cruisers',
    description:
      'Off-road adventures and experiences for thrill-seekers and nature lovers.',
    icon: Mountain,
  },
  {
    title: 'GT Vault',
    description:
      'Premium storage and maintenance solutions for adventure vehicles and gear.',
    icon: Cpu,
  },
];

const ExperienceSection = ({ onExplore }: { onExplore?: () => void }) => {
  return (
    <section className="relative py-20 bg-zinc-900 overflow-hidden">
      {/* Soft background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Discover Our
              {' '}
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-transparent bg-clip-text">
                Featured Experiences
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl">
              From café cruisers to mud adventures, we create unique experiences that bring communities together through shared passions and stories.
            </p>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 border-l-4 border-gold/30 hover:border-gold transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gold-100/10 p-3 rounded-full border border-gold/30">
                    {exp.icon && (
                      <exp.icon className="w-5 h-5 text-gold" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={onExplore}
              className="mt-10 px-6 py-3 rounded-full text-black bg-gold hover:bg-gold/90 transition-all"
            >
              Explore All Experiences
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold/30">
              <Image
                src="/assets/image-experience.jpeg"
                alt="Featured Experiences"
                width={600}
                height={600}
                className="object-cover w-full h-auto rounded-3xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Floating label */}
              {/* <motion.div
                className="absolute -bottom-6 -left-6 bg-zinc-900 px-5 py-4 rounded-xl border border-gold/40 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gold font-semibold">Join Our Community</p>
                <p className="text-sm text-gray-400">5000+ adventurers and growing</p>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
