'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Briefcase, Globe, Heart, Map, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Work-Adventure Balance',
    description: 'Flexible work schedules and regular team adventures ensure you stay connected to what you love.',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: 'Growth & Development',
    description: 'Continuous learning opportunities with specialized adventure training and leadership programs.',
    icon: <BadgeCheck className="h-6 w-6" />,
  },
  {
    title: 'Collaborative Culture',
    description: 'Work alongside passionate individuals who share your enthusiasm for adventure and innovation.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Incredible Locations',
    description: 'Offices situated near adventure hotspots with access to incredible riding and off-road terrain.',
    icon: <Map className="h-6 w-6" />,
  },
  {
    title: 'Purpose-Driven Work',
    description: 'Create products and experiences that make adventure more accessible and connected.',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: 'Global Opportunities',
    description: 'As we expand, take your career across borders to build adventure communities worldwide.',
    icon: <Globe className="h-6 w-6" />,
  },
];

export default function WhyJoinSection() {
  return (
    <section id="why-join" className="py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container px-6 md:px-8 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Why Join Cruiserverse?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Beyond just a job, we offer a lifestyle that celebrates adventure,
            innovation, and making meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-orange-500/30 p-6 rounded-xl transition-all"
            >
              <div className="p-3 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full w-fit mb-4 border border-orange-500/30">
                <span className="text-orange-400">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
