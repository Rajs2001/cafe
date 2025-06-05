'use client';

import { ArrowRight, Camera, Coffee, Cpu, Mountain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container relative z-10 px-4 py-12 md:py-20 lg:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            <span className="gold-text">BUILT FOR THE WILD.</span>
            <br />
            <span>POWERED BY STORIES.</span>
            <br />
            <span>DRIVEN BY COMMUNITY.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            A Cruisers-Universe devoted to the spirit of adventure
            and a passion for Automotive experiences.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-[#d95410] text-black hover:bg-[#d95410]/90" onClick={buttonclick}>
            Explore
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Thriving Ecosystem
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Uncover a world of adventures, experiences, and innovations designed for both
              adventurers and storytellers. Dive into our four verticals that bring the Cruiserverse
              to life.
              {' '}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ventures Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 gold-text mb-2" />
                <CardTitle className="text-xl font-bold">Ventures</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our journey, milestones, and the team behind Cruiserverse's vision and mission.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/ventures" className="gold-text flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Pulse Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Mountain className="h-12 w-12 gold-text mb-2" />
                <CardTitle className="text-xl font-bold">Pulse</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Events, marketing initiatives, and community building activities that drive our ecosystem.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/pulse" className="gold-text flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Studio Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Camera className="h-12 w-12 gold-text mb-2" />
                <CardTitle className="text-xl font-bold">Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our media gallery showcasing photos, video stories, and creative content from our adventures.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/studio" className="gold-text flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Core Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Cpu className="h-12 w-12 gold-text mb-2" />
                <CardTitle className="text-xl font-bold">Core</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our product ecosystem including GT Vault, Ride Pilot, and other innovative solutions.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/core" className="gold-text flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 mb-6">
                Cruiserverse imagines a future where automotive adventure,
                lifestyle, and technology come together harmoniously to create
                enduring success. We advocate for innovation and sustainability,
                empowering our teams to spearhead efforts that redefine
                industries and enhance community.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                To establish ourselves as the premier ecosystem for Automotive
                adventure enthusiasts, offering innovative products, services, and
                experiences that inspire and empower our community.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Adventure in all that we do
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Community-focused approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Commitment to sustainability and responsibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Emphasis on innovation and creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Pursuit of quality and excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Purpose-driven growth
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/assets/image-vision.jpg"
                alt="About Cruiserverse"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Featured Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Our
                {' '}
                <span className="gold-text">Featured Experiences</span>
              </h2>
              <p className="text-gray-400 mb-8">
                From café cruisers to mud adventures, we create unique experiences that bring communities together
                through shared passions and stories.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="gold-bg/20 p-2 rounded-full">
                    <Coffee className="h-5 w-5 gold-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Café Cruisers</h3>
                    <p className="text-sm text-gray-400">
                      Urban café experiences for motorcycle enthusiasts and coffee lovers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="gold-bg/20 p-2 rounded-full">
                    <Mountain className="h-5 w-5 gold-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mud Cruisers</h3>
                    <p className="text-sm text-gray-400">
                      Off-road adventures and experiences for thrill-seekers and nature lovers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="gold-bg/20 p-2 rounded-full">
                    <Cpu className="h-5 w-5 gold-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GT Vault</h3>
                    <p className="text-sm text-gray-400">
                      Premium storage and maintenance solutions for adventure vehicles and gear.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 rounded-full px-6 gold-bg text-black hover:bg-[#d95410]/90" onClick={allExperiacneButtonClick}>
                Explore All Experiences
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/image-experience.jpeg"
                alt="Featured Experiences"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-lg border gold-border shadow-xl">
                <p className="gold-text font-semibold">Join Our Community</p>
                <p className="text-sm text-gray-400">5000+ adventurers and growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">  Looking for exciting job opportunities or interested in partnering or investing with us? Join the Cruiserverse movement today. </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90" onClick={() => ctaClick('Contact@cafecruisers.in')}>
                Apply for Job
              </Button>
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90" onClick={() => ctaClick('Contact@cafecruisers.in')}>
                Contact for Partners / Investors
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
