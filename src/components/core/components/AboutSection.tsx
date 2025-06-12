'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="text-white py-20 bg-zinc-900">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Left */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            Step into the Core of Cruiserverse, our engine room of innovation,
            where technology powers exploration, and bold ideas shape the
            future of automotive adventures.
            <br />
            <br />
            This is where rider-first digital tools meet community spirit —
            building smarter journeys, seamless operations, and immersive
            experiences.
          </p>
        </div>

        {/* Logo Right */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/color1/full/white_logo_color1_background.png"
            alt="Cruiserverse Studio Logo"
            width={300}
            height={300}
            className="w-auto h-48 object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
