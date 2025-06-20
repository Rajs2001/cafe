'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function StudioHero() {
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
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] overflow-hidden py-16">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:80px_80px]"></div>
      </div>

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

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="inline-block px-3 py-1 mb-6 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-mono rounded-full">
              CRUISERVERSE STUDIO
            </span> */}

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">STUDIO</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-8">
              Where Adventure Meets Art.
            </p>

            <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl">
              <p>
                {/* At
                {' '}
                <span className="text-orange-400">Cruiserverse Studio</span>
                {', '} */}
                We push creative boundaries through immersive storytelling and cutting-edge visual experiences.
              </p>

              <p>
                Our team transforms bold visions into reality—from cinematic masterpieces to interactive digital narratives that redefine adventure.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/assets/img.jpg"
                alt="Cruiserverse creative team working"
                // fill
                // className="object-contain"
                priority
                quality={100}
                width={800}
                height={900}
                className="border border rounded-lg shadow-lg object-cover h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Orange accent elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
    </section>
  );
}
