'use client';

export default function JoinMovementSection() {
  return (
    <section className="bg-zinc-900 py-20 text-white text-center">
      <div className="container px-4">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Ready to Ride with Us?
        </h3>
        <p className="max-w-xl mx-auto text-lg sm:text-xl mb-8">
          Join a movement that celebrates the spirit of riding, rewards your passion, and connects you to a growing biker community across India.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.ridernity"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 text-gold-500 font-semibold px-6 py-3 rounded hover:bg-zinc-400 transition-colors duration-200"
        >
          Download the App
        </a>
      </div>
    </section>
  );
}
