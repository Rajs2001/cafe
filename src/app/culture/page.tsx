'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CorePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text text-center">
              DRIVEN BY PASSION. FUELED BY PURPOSE.
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl text-center"></p>
          </div>
        </div>
      </section>

      {/* What Drives Us? Section */}
      <section className="bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl font-bold mb-2 text-center">What Drives Us?</h3>
        </div>
        <div className="max-w-2xl mx-auto space-y-2">
          <section className="py-8 bg-zinc-900 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-gray-400 text-lg mb-10">
                At Cruiserverse, we’re not just building products or events — we’re igniting a movement. And it starts within.
                <span className="gold-text font-semibold"> Cruiserverse </span>
                Our culture is rooted in freedom, responsibility, and creativity, allowing every individual to bring their best — not just to work, but to life.
                <span className="block mt-2 italic">“Ride fast, think bold, stay real.”</span>
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="py-16 bg-zinc-800">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl text-[#d95410] font-bold mb-2 text-center">
            Inside Cruiserverse
          </h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            We operate more like a passionate crew than a traditional office
          </p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-left">
            <li>
              <span className="font-semibold text-[#d95410]">Flat Structure:</span>
              <span className="ml-1">Ideas win here — not titles</span>
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Creative Freedom:</span>
              <span className="ml-1">You get space to explore, experiment, and shape what we’re building</span>
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Rider's Rhythm:</span>
              <span className="ml-1">We respect your time — whether it’s the 6 AM ride or the 2 PM brainstorm.</span>
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Outcome Hours:</span>
              <span className="ml-1">Work isn’t clocked. It’s lived, created, and delivered.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Garage Vibe */}
      <section className="py-16 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            The Garage Vibe
          </h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Our workspaces (physical or remote) reflect the spirit of the road:
          </p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-center">
            <li>
              <span className="font-semibold text-white">Open tables, not cubicles</span>
            </li>
            <li>
              <span className="font-semibold text-white">Loud ideas, quiet focus</span>
            </li>
            <li>
              <span className="font-semibold text-white">Music, machines, and meaningful work</span>
            </li>
            <li>
              <span className="font-semibold text-white">Team hangouts, ride days, and café runs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-16 bg-zinc-800">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-[#d95410]">
            What We Value
          </h3>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-center">
            <li>
              <span className="font-semibold text-white">Authenticity over appearances</span>
            </li>
            <li>
              <span className="font-semibold text-white">Agility over hierarchy</span>
            </li>
            <li>
              <span className="font-semibold text-white">Craftsmanship over shortcuts</span>
            </li>
            <li>
              <span className="font-semibold text-white">Adventure in everything — from code to content</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-900 py-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Crew
              <span className="gold-text">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Words from the Crew
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
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Abisek Shravn</p>
                    <p className="text-sm text-gray-400">Founder</p>
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
                  "You’re not ‘fitting in’ — you’re helping shape what Cruiserverse is becoming"
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
                    <p className="font-semibold">Mausam Singh</p>
                    <p className="text-sm text-gray-400">HR</p>
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
                  "Working here feels like a road trip — a little wild, a little unpredictable, but always worth it."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/assets/testimonials/3.png"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Kuldeep </p>
                    <p className="text-sm text-gray-400">Expedition Leader</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array.from({ length: 4 })].map((_, i) => (
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
                  "Working here is like building a roller coaster while riding it — thrilling, chaotic, and ridiculously fun"
                </p>
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
              WANT TO RIDE WITH US?
            </h2>
            <ul className="mb-8 flex justify-center">
              <li>
                <span className="font-semibold text-[#d95410]">
                  We’re always looking for thinkers, tinkerers, creators, and riders who want to build something real.
                </span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">
                Collaborate with us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
