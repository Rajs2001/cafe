'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text text-center">
              WHERE ADVENTURE MEETS INNOVATION
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
