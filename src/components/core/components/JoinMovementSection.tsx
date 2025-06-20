'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function JoinMovementSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  const generateParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      });
    }
    setParticles(newParticles);
  };

  return (
    <section className="relative bg-zinc-900 py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array.from({ length: 5 })].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/20 rounded-full"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 40 + 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute bg-orange-500 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            className="text-4xl sm:text-5xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500"
            whileInView={{
              backgroundPositionX: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Ready to Ride with Us?
          </motion.h3>

          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl mb-12 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join a movement that celebrates the spirit of riding, rewards your passion, and connects you to a growing biker community across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => {
              setIsHovered(true);
              generateParticles();
            }}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block"
          >
            <motion.a
              href="https://cafecruisers.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button shine effect */}
              {isHovered && (
                <motion.span
                  className="absolute inset-0 bg-white opacity-10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              )}

              <span>Visit Cafecruisers</span>

              <motion.span
                className="ml-3 inline-block"
                animate={{
                  x: isHovered ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating bike icons */}
        <div className="absolute -bottom-20 left-1/4 opacity-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 15l1.5 1.5M18 15l-1.5 1.5M15 12h.01M12 3h5a2 2 0 012 2v8a5 5 0 11-10 0V5a2 2 0 012-2z" />
            </svg>
          </motion.div>
        </div>

        <div className="absolute -bottom-10 right-1/4 opacity-10">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 15l1.5 1.5M18 15l-1.5 1.5M15 12h.01M12 3h5a2 2 0 012 2v8a5 5 0 11-10 0V5a2 2 0 012-2z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
