'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CorePage() {
  const handleButtonClick = () => {
    const a = document.createElement('a');
    a.href = '/assets/Ventures_Presentation.pdf';
    a.download = 'partnership-deck.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative w-full md:py-28 bg-gradient-to-b from-black to-zinc-800 bg-[url('/intentionally left')] bg-cover bg-center">
        <div className="container px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gold-text text-center pt-8">
                ACCELERATE WITH US.
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
              </p>
              <div className="grid grid-cols-1 py-16 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Cruiserverse is a future-facing automotive adventure
                    and lifestyle ecosystem. With a focus on experiences,
                    technology, and culture, we operate across multiple
                    verticals dedicated to redefining mobility and
                    recreation.
                    {' '}
                    <br />
                    <br />
                  </p>
                  <div>
                    <p> Community-based motorcycle & off-road experiences </p>
                    <p> Event production and strategic brand activations</p>
                    <p> Proprietary digital platforms for ride planning, rentals & rewards</p>
                    <p>Storytelling, media, and creative content development</p>
                  </div>
                </div>
                {/* Logo Right */}
                <div className="hidden flex justify-center lg:justify-end sm:hidden md:flex lg:flex">
                  <Image
                    src="/color1/full/white_logo_color1_background.png"
                    alt="Cruiserverse Studio Logo"
                    width={300}
                    height={300}
                    className="w-auto h-48 object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Partnership Opportunities Section */}
      <section className="py-16 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl text-[#d95410] font-bold mb-2 text-center">
            Where We Collaborate
          </h3>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10"></p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-left">
            <li>
              <span className="font-semibold text-[#d95410]"> Event Sponsorships – </span>
              {' '}
              Co-host and fund ride events, fests, launches, and tours.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]"> Brand Collaborations -</span>
              {' '}
              Product integration, test rides, apparel, gear collabs
              {' '}
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">.Media & Content Co-Production- </span>
              {' '}
              Joint video series, custom brand storytelling
              {' '}
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">  Technology Collaborations-</span>
              {' '}
              Integrate, co-develop, or pilot mobility tools.
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">   Training & Academy Tie-ups –</span>
              {' '}
              Skill building with our riders’ academy model
              {' '}
            </li>
            <li>
              <span className="font-semibold text-[#d95410]">Investment Partnerships –</span>
              {' '}
              Strategic support for scaling Cruiserverse initiatives.
              {' '}
            </li>
          </ul>
        </div>
      </section>

      {/* Why Partner with Us? */}
      <section className="py-15 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            Why Partner With Us?
          </h3>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Our workspaces (physical or remote) reflect the spirit of the road:
          </p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-center">
            <li>
              <span className="font-semibold text-white"> Pan-India reach with fast growing rider & creator communitie</span>
              {' '}
            </li>
            <li>
              <span className="font-semibold text-white">  Strong B2C + B2B crossover model</span>
              {' '}
            </li>
            <li>
              <span className="font-semibold text-white">Full-cycle execution: </span>
              {' '}
              <p>
                Idea
                {'>'}
                Activation
                {' '}
                {'>'}
                {' '}
                Media
                {' '}
                {'>'}
                Analytics
              </p>
            </li>
            <li>
              <span className="font-semibold text-white"> Multi-vertical ecosystem ready to scale</span>
              {' '}
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Together
            </h2>
            <div>
              <li>
                <span className="font-semibold text-[#d95410]"> Your Brand. Our Terrain. Shared Impact.</span>
                {' '}
              </li>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:gold-bg/90" onClick={handleButtonClick}>
                Our Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
