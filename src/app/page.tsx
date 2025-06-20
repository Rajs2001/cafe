'use client';

import Image from 'next/image';
import React from 'react';
import { About, ExperienceSection, Hero, Intro } from '@/components/home';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  function buttonclick() {
    window.location.href = '/core';
  }

  function cultureExploreButtonClick() {
    window.location.href = '/studio';
  }

  function allExperiacneButtonClick() {
    window.location.href = '/pulse';
  }

  function ctaClick(mailId: string) {
    const a = document.createElement('a');
    a.href = `mailto:${mailId}`;
    a.click();
    a.remove();
  }

  return (
    <div className="flex flex-col">
      <Hero buttonclick={buttonclick} />
      <Intro />
      <About />
      {/* working Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <Image
                src="/assets/image-working.jpg"
                alt="Working at Cruiserverse"
                width={600}
                height={400}
                className="rounded-lg object-cover h-[500px] "
              />
            </div>
            <div className="order-2 md:order-2">
              <h3 className="text-2xl font-bold mb-4"> Working at Cruiserverse </h3>
              <p className="text-gray-400 mb-6">
                Fuelled by passion. Driven by purpose.
                At Cruiserverse, every challenge is a
                new road waiting to be conquered—together.
              </p>
              <Button size="lg" className="rounded-full px-8 py-6 text-lg gold-bg text-black hover:bg-[#d95410]/90" onClick={cultureExploreButtonClick}>
                Explore our culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection onExplore={allExperiacneButtonClick} />

      {/* Testimonials Section */}
      <section className="bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Customer
              {' '}
              <span className="gold-text">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our customers have to say about their experience with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/assets/testimonials/1.jpg"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full h-[60px] w-[60px]"
                  />
                  <div>
                    <p className="font-semibold">Rahul Mehta</p>
                    <p className="text-sm text-gray-400">Adventure Rider</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array.from({ length: 5 })].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 italic">
                  "GT Vault has completely transformed how I store and maintain my motorcycle. The security features
                  give me peace of mind, and the maintenance services ensure my bike is always ready for the next
                  adventure."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/assets/testimonials/2.jpg"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Priya Singh</p>
                    <p className="text-sm text-gray-400">Travel Blogger</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array.from({ length: 5 })].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 italic">
                  "Ride Pilot has been a game-changer for my off-road adventures. The navigation is incredibly accurate,
                  and the safety features have already saved me once when I had a minor accident in a remote area."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/assets/testimonials/4.png"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Vikram Joshi</p>
                    <p className="text-sm text-gray-400">Expedition Leader</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array.from({ length: 5 })].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 italic">
                  "The Trail Tech gear has survived everything I've thrown at it. The smart luggage with GPS tracking is
                  brilliant, and the adventure cameras capture stunning footage even in the most challenging
                  conditions."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          {/* <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl p-8 md:p-12 text-center border border-gold-500/50 shadow-lg shadow-gold-800 hover:shadow-lg hover:shadow-gold-500 transition-all"> */}
          <div className="bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl p-8 md:p-12 text-center border border-gold-500/50 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">  Looking for exciting job opportunities or interested in partnering or investing with us? Join the Cruiserverse movement today. </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90" onClick={() => ctaClick('contact@cafecruisers.in')}>
                Apply for Job
              </Button>
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90" onClick={() => ctaClick('contact@cafecruisers.in')}>
                Contact for Partners / Investors
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
