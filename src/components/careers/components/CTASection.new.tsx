'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, Users } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array.from({ length: 6 })].map((_, i) => {
          // Generate a stable unique key that doesn't use Math.random() in render
          const uniqueKey = `shape-career-cta-${i}-${i * 10 + 5}`;
          return (
            <motion.div
              key={uniqueKey}
              className="absolute bg-orange-500 rounded-full"
              style={{
                width: `${100 + i * 30}px`,
                height: '2px',
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                x: [0, i % 2 === 0 ? 50 : -50],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      <div className="container px-6 md:px-8 mx-auto">
        <motion.div
          className="relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-8 md:p-12 border border-orange-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6">
            <FileText className="w-12 h-12 text-orange-500 opacity-30" />
          </div>
          <div className="absolute -bottom-6 -left-6">
            <Users className="w-12 h-12 text-orange-500 opacity-30" />
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Ready to Join Our Adventure?
              </span>
            </h2>
            <p className="text-gray-300 md:text-lg max-w-3xl mx-auto mb-8">
              Whether you see an open position that fits your skills or want to introduce yourself for future opportunities, we'd love to hear from you. Join our team of passionate professionals shaping the future of adventure mobility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-black font-medium transition-all transform hover:scale-105 flex items-center"
                size="lg"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = 'mailto:careers@cafecruisers.in';
                  a.click();
                }}
              >
                Send Your CV
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-orange-500/30 hover:border-orange-500/60 text-gray-200 hover:bg-orange-500/10 flex items-center"
                onClick={() => {
                  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
