// 'use client';

// import { Shield, Zap } from 'lucide-react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function CorePage() {
//   const handleButtonClick = () => {
//     const a = document.createElement('a');
//     a.href = 'mailto:info@cafecruisers.in';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
//         <div className="container px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 gold-text text-center">
//                 WHERE ADVENTURE MEETS INNOVATION
//               </h1>
//               <p className="text-gray-300 text-lg mb-8 max-w-xl">
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Black About Section */}
//       <section className="text-white py-20 bg-zinc-900">
//         <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Text Left */}
//           <div>
//             <p className="text-gray-300 leading-relaxed">
//               Step into the Core of Cruiserverse, our
//               engine room of innovation, where
//               technology powers exploration, and bold
//               ideas shape the future of automotive
//               adventures.
//               {' '}
//               <br />
//               <br />
//               This is where rider-first digital tools meet
//               community spirit — building smarter
//               journeys, seamless operations, and
//               immersive experiences.
//             </p>
//           </div>

//           {/* Logo Right */}
//           <div className="flex justify-center lg:justify-end">
//             <Image
//               src="/color1/full/white_logo_color1_background.png"
//               alt="Cruiserverse Studio Logo"
//               width={300}
//               height={300}
//               className="w-auto h-48 object-contain opacity-80"
//             />
//           </div>
//         </div>
//       </section>

//       {/* What Power's Core Section */}
//       <section className="py-20 bg-zinc-900">
//         <div className="container px-4">
//           <h3 className="text-2xl font-bold mb-4 text-center"> What Powers the Core? </h3>
//           <div className="text-start mx-auto space-y-10 grid grid-cols-1 md:grid-cols-2 gap-10">

//             {/* Section 1: Café Cruisers App */}
//             <div>
//               <p className="text-white mb-4 font-medium text-lg mt-10">
//                 1. Café Cruisers App
//                 <br />
//                 <span className="text-sm text-gray-400">
//                   Your portal to a vibrant motorcycling community.
//                 </span>
//               </p>

//               <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left">
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Reserve motorcycle rentals</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Participate in upcoming rides</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Connect with fellow riders</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Enjoy club features and local vendor benefits</span>
//                 </li>
//               </ul>

//               <div className="mt-6">
//                 <a href="https://cafecruisers.in" target="_blank" rel="noopener noreferrer">
//                   <Button className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">
//                     Discover Café Cruisers
//                   </Button>
//                 </a>
//               </div>
//             </div>

//             {/* Section 2: Cruisers Pilot App */}
//             <div>
//               <p className="text-white mb-4 font-medium text-lg">
//                 2. Cruisers Pilot App
//                 <br />
//                 <span className="text-sm text-gray-400">
//                   Empowering ride leaders and event organizers.
//                 </span>
//               </p>

//               <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left">
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Monitor earnings and trips</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Organize rides and manage bookings</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="gold-text text-xl relative -top-0.5">•</span>
//                   <span>Utilize ride analytics and tools</span>
//                 </li>
//               </ul>

//               <div className="mt-6">
//                 <a href="https://cafecruisers.in" target="_blank" rel="noopener noreferrer">
//                   <Button className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">
//                     Find Out About the Pilot App
//                   </Button>
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* What Power's the Experience Section */}
//       <section className=" bg-zinc-900">
//         <div className="px-4 sm:px-8 lg:px-16">
//           <h3 className="text-2xl font-bold mb-2 text-center">What Powers the Experience?</h3>
//         </div>
//         <div className="text-center max-w-2xl mx-auto space-y-2">
//           <section className="py-8 bg-zinc-900 text-center">
//             <div className="max-w-3xl mx-auto px-4">
//               <p className="text-gray-400 text-lg mb-10">
//                 At the core of
//                 {' '}
//                 <span className="gold-text font-semibold">Cruiserverse</span>
//                 {' '}
//                 is technology designed to foster freedom,
//                 planning, and performance—suitable for both casual riders and
//                 professional pilots.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Intelligent Trip Planning</p>
//                 </div>
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Real-Time Tracking</p>
//                 </div>
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Ride & Rental Integration</p>
//                 </div>
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Club & Community Modules</p>
//                 </div>
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Smart Notifications</p>
//                 </div>
//                 <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
//                   <p className="gold-text font-semibold text-center">Location-Based Vendor Booking</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* Future Tech Section */}
//       <section className="py-15 bg-zinc-900">
//         <div className="px-4 sm:px-8 lg:px-16">
//           <h3 className="text-2xl sm:text-3xl font-bold mb-12">
//             Built for Today. Designed for Tomorrow.
//           </h3>

//           <p className="text-gray-400 text-start max-w-2xl mx-auto mb-10">
//             Here’s a glimpse into what we’re building next to elevate the rider experience.
//           </p>
//           <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-left">
//             <li>
//               <span className="font-semibold text-white">AI Route Planning:</span>
//               {' '}
//               Predictive ride suggestions based on traffic, terrain, and mood.
//             </li>
//             <li>
//               <span className="font-semibold text-white">AR Ride Overlays:</span>
//               {' '}
//               Augmented Reality for immersive navigation and on-road guides.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Backend Suite:</span>
//               {' '}
//               A control hub for community managers, ride hosts, and vendors.
//             </li>
//             <li>
//               <span className="font-semibold text-white">Cross-Platform Sync:</span>
//               {' '}
//               Seamless experience across devices and roles.
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-zinc-900">
//         <div className="container px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Key
//               {' '}
//               <span className="gold-text">Features</span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Our products are designed with these core features that set them apart from the competition.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
//               <CardHeader className="pb-2">
//                 <div className="gold-bg/20 p-3 rounded-full w-fit mb-4">
//                   <Shield className="h-6 w-6 gold-text" />
//                 </div>
//                 <CardTitle className="text-xl font-bold">Durability</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-400">
//                   Built to withstand the harshest conditions and environments, our products are designed for longevity
//                   and reliability.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
//               <CardHeader className="pb-2">
//                 <div className="gold-bg/20 p-3 rounded-full w-fit mb-4">
//                   <Zap className="h-6 w-6 gold-text" />
//                 </div>
//                 <CardTitle className="text-xl font-bold">Innovation</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-400">
//                   Cutting-edge technology and innovative design solutions that address real-world challenges faced by
//                   adventurers.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
//               <CardHeader className="pb-2">
//                 <div className="gold-bg/20 p-3 rounded-full w-fit mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#d95410"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-smartphone"
//                   >
//                     <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
//                     <path d="M12 18h.01" />
//                   </svg>
//                 </div>
//                 <CardTitle className="text-xl font-bold">Connectivity</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-400">
//                   Seamless integration with mobile devices and other tech, providing a connected experience even in
//                   remote locations.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
//               <CardHeader className="pb-2">
//                 <div className="gold-bg/20 p-3 rounded-full w-fit mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#d95410"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-leaf"
//                   >
//                     <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//                     <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//                   </svg>
//                 </div>
//                 <CardTitle className="text-xl font-bold">Sustainability</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-400">
//                   Environmentally conscious design and manufacturing processes, with a focus on reducing our ecological
//                   footprint.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
//         <div className="container px-4">
//           <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               WANT TO BRING OUR TOOLS
//               TO YOUR COMMUNITY OR
//               BUSINESS? LET’S TALK
//               INNOVATION.
//             </h2>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="rounded-full px-8 gold-bg text-black hover:gold-bg/90" onClick={handleButtonClick}>
//                 Collaborate with us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import React from 'react';
import { AboutSection, HeroSection, JoinMovementSection, PowersCoreSection, PowersExperienceSection } from '@/components/core';

export default function CorePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <PowersCoreSection />
      <PowersExperienceSection />
      <JoinMovementSection />
    </div>
  );
}
