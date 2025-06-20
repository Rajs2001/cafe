'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const ventures = [
  {
    title: 'Born to Ride. Built to Connect.',
    desc: 'A premier space for motorcyclists to discover new routes, strengthen connections, and honor the essence of two-wheels.',
    link: '/venture',
    img: '/assets/cafe-cruiser.jpg',
    accent: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Unleash the Off-Road Within.',
    desc: 'A rugged 4×4 culture for those who chase dirt, defy limits, and thrive in the wild unknown.',
    link: '/venture2',
    img: '/assets/mud-cruiser.jpg',
    accent: 'from-amber-500 to-orange-400',
  },
];

export default function VenturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {[...Array.from({ length: 6 })].map((_, i) => (
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
              left: `${10 + (i * 15)}%`,
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Our Flagship Ventures
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the communities that ride, roam, and rally together. Introducing
            Café Cruisers and Mud Cruisers — where passion becomes a vibrant movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ventures.map((venture, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={venture.link} passHref>
                <Card className="group relative h-full bg-zinc-800 border-zinc-700 overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={venture.img}
                      alt={venture.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${venture.accent}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {venture.title}
                        </h3>
                        <p className="text-gray-400 mt-2">{venture.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-6 text-orange-400 group-hover:text-orange-300 transition-colors">
                      <span className="font-medium">Explore Venture</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
