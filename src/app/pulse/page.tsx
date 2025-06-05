'use client';

import { Calendar, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PulsePage() {
  function ctaClick(mailId: string) {
    const a = document.createElement('a');
    a.href = `mailto:${mailId}`;
    a.click();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gold-text">PULSE</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                The Events & Brand Activation Wing of CRUISERVERSE
              </p>
              <p>
                Cruiserverse Pulse is the dynamic events and marketing division of Cruiserverse, focused on creating immersive experiences for the automotive and lifestyle sectors.
              </p>
              <p className="mt-4">
                As a B2B platform, we support automotive brands, lifestyle ventures, and riding communities in connecting with their audiences, emphasizing cultural crafting from concept to execution.
              </p>
              {/* <Button className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90">Explore Events</Button> */}
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/color1/full/white_logo_color1_background.png"
                alt="Cruiserverse Pulse"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-zinc-900">
        <div className="container px-4">
          <h3 className="text-2xl font-bold mb-4">What We Do ?</h3>
          <p className="text-gray-400 mb-6 font-medium">
            End-to-End Project-Based Solutions
            {' '}
            <br />
            <span className="text-sm text-gray-400 italic">
              (We don’t do traditional retainers — each project gets our full throttle.)
            </span>
          </p>
          <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-tight">
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Ride-Based Events</strong>
                {' '}
                – Route design, permissions, convoy management, marshals
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Brand Launches & Test-Ride Experiences</strong>
                {' '}
                – End-to-end planning and execution
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Community & Club Meets</strong>
                {' '}
                – Registration, rider kits, stage production, emceeing
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Media Production</strong>
                {' '}
                – Aftermovies, reels, photography, storytelling (with Cruiserverse Studio)
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Strategic Brand Collaborations</strong>
                {' '}
                – On-ground influence meets digital presence
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Pop-Up Installations & Experiences</strong>
                {' '}
                – Café booths, experiential zones, product demos
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                <strong className="gold-text">Reporting & Feedback</strong>
                {' '}
                – Event analytics, coverage reports, and impact summaries
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why choose Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Brands Choose
            <span className="gold-text">&nbsp;Pulse ?</span>
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            <span className="block mb-2">Because We Speak "Rider".</span>
          </p>
          {/* <span className="block mb-2 text-center text-gray-400 ">Bullets or Icons:</span> */}
          <ul className="space-y-4 text-sm sm:text-base leading-tight">
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>Deep understanding of biking and automotive culture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span> End-to-end execution by in-house experts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>Pan-India mobility and terrain access</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>Scalable from intimate rides to national rollouts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>Content-ready delivery with social & cinematic assets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>Reliable, on-time, brand-safe operations</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Whats next Section */}
      <section className="py-15 bg-zinc-900">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center"> What’s Next</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            <span className="block mb-2">
              We're just getting started. As Cruiserverse expands, so will Pulse — with curated seasonal tours,
              larger-scale festivals, and creator-led brand experiences.
              “Join us as we shape the future of automotive events — one ride at a time.”
            </span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our
              {' '}
              <span className="gold-text">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the range of services we offer to create memorable experiences and build vibrant communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <Calendar className="h-20 w-20 gold-text" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We organize and host a variety of events, from motorcycle rides and café meetups to adventure trips
                  and community gatherings.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Motorcycle Rides
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Café Meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Adventure Trips
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Community Gatherings
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d95410"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-megaphone"
                >
                  <path d="m3 11 18-5v12L3 13v-2z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We help brands connect with our community through authentic marketing initiatives that resonate with
                  adventure enthusiasts.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Brand Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Influencer Collaborations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Content Creation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Social Media Campaigns
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Initiatives Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <Users className="h-20 w-20 gold-text" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Community Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We build and nurture communities through various initiatives that bring people together around shared
                  passions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Membership Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Workshops & Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Social Causes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="gold-text">•</span>
                    {' '}
                    Community Forums
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the
              {' '}
              <span className="gold-text">Pulse</span>
              ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Got a Ride, Launch, or Event in Mind? Let’s make it an
              experience they’ll talk about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:bg-[#d95410]/90" onClick={() => ctaClick('contact@cafecruisers.in')}>
                Let's talk
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gold-border gold-text" onClick={() => ctaClick('contact@cafecruisers.in')}>
                Join Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
