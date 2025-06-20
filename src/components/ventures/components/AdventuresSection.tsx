'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const adventures = [
  {
    title: 'Career Opportunities',
    desc: `Offering structured roles for experienced riders to become certified Ride Pilots, who lead group expeditions, ensure safety, and create memorable experiences.`,
    src: '/assets/beyond/6.jpg',
    highlight: 'Become a Ride Pilot'
  },
  {
    title: 'Integrated Digital Platforms',
    desc: `Innovating cutting-edge technologies and planning tools to enhance every facet of the adventure journey like route optimization, coordination, bookings, and more.`,
    src: '/assets/beyond/1.jpg',
    highlight: 'Explore Tech'
  },
  {
    title: 'Skill Development',
    desc: `Through workshops and accredited programs, we enable riders and enthusiasts to enhance skills and grow professionally within the adventure ecosystem.`,
    src: '/assets/beyond/2.jpg',
    highlight: 'Join Academy'
  },
  {
    title: 'Purposeful Career Alternative',
    desc: `For those seeking a shift from high-stress jobs, Cruiserverse offers a fulfilling career in the adventure industry — with balance, stability, and satisfaction.`,
    src: '/assets/beyond/3.jpg',
    highlight: 'Find Balance'
  },
  {
    title: 'Collaborative Creator Programs',
    desc: `We work with influencers, designers, and storytellers to share authentic narratives from our experiences — building culture and connection.`,
    src: '/assets/beyond/4.jpg',
    highlight: 'Create With Us'
  },
  {
    title: 'Community-Led Growth',
    desc: `Cruiserverse builds an inclusive culture where passion, sustainability, and innovation define how we ride and grow — together.`,
    src: '/assets/beyond/5.jpg',
    highlight: 'Join Community'
  },
];

export default function AdventuresSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Beyond Adventures
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our initiatives focused on building a meaningful ecosystem for enthusiasts,
            professionals, and change-makers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.map((adventure, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="bg-zinc-800 border-zinc-700 flex flex-col h-full overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={adventure.src}
                    alt={adventure.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <CardContent className="pt-6 pb-8 px-6 flex-grow">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-orange-500 font-mono text-sm mt-1">0{idx + 1}</div>
                    <h3 className="text-xl font-bold">{adventure.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{adventure.desc}</p>
                  <span className="inline-block px-4 py-2 text-sm bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/30">
                    {adventure.highlight}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}