'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const constraintsRef = useRef(null);

  useEffect(() => {
    // Coffee bean animation effect
    const createCoffeeBean = () => {
      const bean = document.createElement('div');
      bean.className = 'coffee-bean absolute rounded-full opacity-20';
      bean.style.width = `${Math.random() * 20 + 5}px`;
      bean.style.height = `${Math.random() * 10 + 5}px`;
      bean.style.background = `rgba(198, 124, 78, ${Math.random() * 0.5 + 0.1})`;
      bean.style.left = `${Math.random() * 100}vw`;
      bean.style.top = `${Math.random() * 100}vh`;
      bean.style.transform = `rotate(${Math.random() * 360}deg)`;

      const animationDuration = `${Math.random() * 20 + 10}s`;
      bean.style.animation = `float ${animationDuration} infinite linear`;

      const heroBg = document.querySelector('.hero-background');
      if (heroBg) {
        heroBg.appendChild(bean);
      }
    };

    // Create multiple coffee beans
    for (let i = 0; i < 30; i++) {
      createCoffeeBean();
    }
  }, []);
  return (
    <section className="relative w-full py-24 overflow-hidden" ref={constraintsRef}>
      {/* Animated gradient background */}
      <div className="hero-background absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-grid-pattern"></div>

        {/* Animated coffee steam effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array.from({ length: 5 })].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 w-full h-1/2"
              style={{
                background: `radial-gradient(ellipse at center, rgba(255,140,0,0.8) 0%, transparent 70%)`,
                animation: `steamRise ${10 + i * 2}s infinite ${i * 2}s ease-in-out`,
                transform: `scale(${0.8 + i * 0.1})`,
              }}
            >
            </div>
          ))}
        </div>

        {/* Animated orange particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array.from({ length: 15 })].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange-500 opacity-20"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        {' '}

      </div>

      <div className="container px-6 md:px-8 mx-auto relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 tracking-tight">
              WHERE ADVENTURE MEETS INNOVATION
            </h1>

            <div className="space-y-6 mb-10">
              <motion.p
                className="text-gray-300 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Step into the Core of Cruiserverse, our engine room of innovation, where technology powers exploration, and bold ideas shape the future of automotive adventures.
              </motion.p>

              <motion.p
                className="text-gray-300 text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                This is where rider-first digital tools meet community spirit — building smarter journeys, seamless operations, and immersive experiences.
              </motion.p>
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.03] transform group w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Explore More
              <span className="ml-3 inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </motion.button>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative h-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-full max-w-xl h-96 lg:h-[500px]">
              {/* Bike vector image with animations */}
              <motion.img
                src="/assets/image-experience.jpeg" // Replace with your bike vector image path
                alt="Motorcycle"
                className="absolute w-full h-full object-contain"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-0"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating gears animation */}

            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>
        {`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes steamRise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-50vh) scale(1.5);
            opacity: 0;
          }
        }
        
        .coffee-bean {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
      `}
      </style>
    </section>
  );
}
