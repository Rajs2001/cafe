'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StudioHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:80px_80px]"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-mono rounded-full">
              CRUISERVERSE STUDIO
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">STUDIO</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8">
              Where Adventure Meets Art.
            </p>

            <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl">
              <p>
                At <span className="text-orange-400">Cruiserverse Studio</span>, we push creative boundaries through immersive storytelling and cutting-edge visual experiences.
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
                src="/assets/studio-hero.jpg"
                alt="Cruiserverse creative team working"
                fill
                className="object-contain"
                priority
                quality={100}
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