'use client';

export default function PowersExperienceSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">
          What Powers the Experience?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-start text-gray-400 text-sm sm:text-base leading-relaxed">
          {/* Community */}
          <div>
            <p className="text-white text-lg font-semibold mb-3">Community</p>
            <ul className="space-y-2">
              <li>Build local and national motorcycle communities.</li>
              <li>Attend meetups, rides, and special club events.</li>
              <li>Engage with passionate riders across India.</li>
            </ul>
          </div>

          {/* Rides */}
          <div>
            <p className="text-white text-lg font-semibold mb-3">Rides</p>
            <ul className="space-y-2">
              <li>Participate in weekly city rides and long-hauls.</li>
              <li>Curated routes led by experienced ride pilots.</li>
              <li>Safe and well-organized for all skill levels.</li>
            </ul>
          </div>

          {/* Rewards */}
          <div>
            <p className="text-white text-lg font-semibold mb-3">Rewards</p>
            <ul className="space-y-2">
              <li>Earn points for participating in rides and activities.</li>
              <li>Redeem exclusive club merchandise and services.</li>
              <li>Get discounts from partner brands and vendors.</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-lg font-semibold mb-3">Services</p>
            <ul className="space-y-2">
              <li>On-demand motorcycle rentals through the app.</li>
              <li>Access service partners and riding gear discounts.</li>
              <li>Dedicated support for trip planning and issues.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
