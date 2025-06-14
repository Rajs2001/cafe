'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PowersCoreSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const apps = [
    {
      title: "Café Cruisers App",
      subtitle: "Your portal to a vibrant motorcycling community",
      features: [
        'Reserve motorcycle rentals',
        'Participate in upcoming rides',
        'Connect with fellow riders',
        'Enjoy club features and local vendor benefits',
      ],
      buttonText: "Discover Café Cruisers",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Cruisers Pilot App",
      subtitle: "Empowering ride leaders and event organizers",
      features: [
        'Monitor earnings and trips',
        'Organize rides and manage bookings',
        'Utilize ride analytics and tools',
      ],
      buttonText: "Find Out About the Pilot App",
      color: "from-amber-400 to-amber-600"
    }
  ];

  return (
    <section className="relative py-20 bg-zinc-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/30 rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <motion.h4
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        > What Powers The Core? </motion.h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Animated hover effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0`}
                animate={{
                  opacity: hoveredItem === index ? 0.1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* App icon placeholder */}
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`text-2xl font-bold bg-gradient-to-br ${app.color} bg-clip-text text-transparent`}>
                    {index + 1}
                  </span>
                </motion.div>

                <motion.p 
                  className="text-xl md:text-2xl font-bold mb-2 text-white"
                  whileHover={{ x: 5 }}
                >
                  {app.title}
                </motion.p>
                <p className="text-orange-300/80 text-sm mb-6">{app.subtitle}</p>

                <ul className="space-y-3 mb-8">
                  {app.features.map((feature, i) => (
                    <li key={i} className="list-none">
                      <motion.div 
                        className="flex items-start gap-3 text-gray-300 group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i + index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className={`text-xl relative top-0.5 bg-gradient-to-br ${app.color} bg-clip-text text-transparent`}
                          animate={{
                            scale: hoveredItem === index ? [1, 1.2, 1] : 1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          •
                        </motion.span>
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className={`rounded-full px-8 bg-gradient-to-r ${app.color} text-white hover:shadow-lg hover:shadow-orange-500/20 transition-all`}
                  >
                    {app.buttonText}
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{
                        x: hoveredItem === index ? [0, 5, 0] : 0
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </div>

              {/* Floating elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full bg-gradient-to-br ${app.color} opacity-10`}
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 50],
                    y: [0, (Math.random() - 0.5) * 50],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Animated divider */}
        <motion.div 
          className="mt-16 mx-auto h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent w-3/4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}