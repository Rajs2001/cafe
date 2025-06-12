/* eslint-disable react/no-array-index-key */
'use client';

import { Button } from '@/components/ui/button';

export default function PowersCoreSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container px-4">
        <h3 className="text-2xl font-bold mb-4 text-center"> What Powers the Core? </h3>
        <div className="text-start mx-auto space-y-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Café Cruisers App */}
          <div>
            <p className="text-white mb-4 font-medium text-lg mt-10">
              1. Café Cruisers App
              <br />
              <span className="text-sm text-gray-400">
                Your portal to a vibrant motorcycling community.
              </span>
            </p>

            <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left">
              {[
                'Reserve motorcycle rentals',
                'Participate in upcoming rides',
                'Connect with fellow riders',
                'Enjoy club features and local vendor benefits',
              ].map((item, index) => (
                <li className="flex items-start gap-2" key={index}>
                  <span className="gold-text text-xl relative -top-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="https://cafecruisers.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">
                  Discover Café Cruisers
                </Button>
              </a>
            </div>
          </div>

          {/* Cruisers Pilot App */}
          <div>
            <p className="text-white mb-4 font-medium text-lg">
              2. Cruisers Pilot App
              <br />
              <span className="text-sm text-gray-400">
                Empowering ride leaders and event organizers.
              </span>
            </p>

            <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left">
              {[
                'Monitor earnings and trips',
                'Organize rides and manage bookings',
                'Utilize ride analytics and tools',
              ].map((item, index) => (
                <li className="flex items-start gap-2" key={index}>
                  <span className="gold-text text-xl relative -top-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="https://cafecruisers.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">
                  Find Out About the Pilot App
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
