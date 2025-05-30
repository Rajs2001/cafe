import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Compass, Settings, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function CorePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gold">
                  WHERE ADVENTURE MEETS
                  INNOVATION
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
              </p>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Explore Products</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cruiserverse Core"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Innovative Solutions</p>
                <p className="text-sm text-gray-400">For modern adventurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black About Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Left */}
          <div>
            <p className="text-gray-300 leading-relaxed">
              Step into the Core of Cruiserverse, our
              engine room of innovation, where
              technology powers exploration, and bold
              ideas shape the future of automotive
              adventures.
              {' '}
              <br />
              <br />
              This is where rider-first digital tools meet
              community spirit — building smarter
              journeys, seamless operations, and
              immersive experiences.
            </p>
          </div>

          {/* Logo Right */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/path-to-your-logo.svg" // replace later
              alt="Cruiserverse Studio Logo"
              width={300}
              height={300}
              className="w-auto h-48 object-contain opacity-80"
            />
          </div>
        </div>
      </section>

      {/* What Power's Core Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <h3 className="text-2xl font-bold mb-4"> What Powers the Core? </h3>
          <div className="text-center max-w-2xl mx-auto space-y-10">
            <p></p>
            {/* Section 1: Café Cruisers App */}
            <div>
              <p className="text-white mb-4 font-medium text-lg">
                1. Café Cruisers App
                {' '}
                <br />
                <span className="text-sm text-gray-400">Your portal to a vibrant motorcycling community.</span>
              </p>

              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left inline-block">
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Reserve motorcycle rentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Participate in upcoming rides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Connect with fellow riders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Enjoy club features and local vendor benefits</span>
                </li>
              </ul>

              <div className="mt-6">
                <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                  Discover Café Cruisers
                </Button>
              </div>
            </div>

            {/* Section 2: Cruisers Pilot App */}
            <div>
              <p className="text-white mb-4 font-medium text-lg">
                2. Cruisers Pilot App
                {' '}
                <br />
                <span className="text-sm text-gray-400">Empowering ride leaders and event organizers.</span>
              </p>

              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-tight text-left inline-block">
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Monitor earnings and trips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Organize rides and manage bookings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold text-xl relative -top-0.5">•</span>
                  <span>Utilize ride analytics and tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                  Find Out About the Pilot App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Power's the Experience Section */}
      <section className="py-20 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl font-bold mb-4">What Powers the Experience?</h3>
        </div>
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <section className="py-16 bg-zinc-900 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-gray-400 text-lg mb-10">
                At the core of
                {' '}
                <span className="text-gold font-semibold">Cruiserverse</span>
                {' '}
                is technology designed to foster freedom,
                planning, and performance—suitable for both casual riders and
                professional pilots.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Intelligent Trip Planning</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Real-Time Tracking</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Ride & Rental Integration</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Club & Community Modules</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Smart Notifications</p>
                </div>
                <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl w-full max-w-xs">
                  <p className="text-gold font-semibold text-center">Location-Based Vendor Booking</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Future Tech Section */}
      <section className="py-20 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12">
            Built for Today. Designed for Tomorrow.
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Here’s a glimpse into what we’re building next to elevate the rider experience.
          </p>
          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-left">
            <li>
              <span className="font-semibold text-white">AI Route Planning:</span>
              {' '}
              Predictive ride suggestions based on traffic, terrain, and mood.
            </li>
            <li>
              <span className="font-semibold text-white">AR Ride Overlays:</span>
              {' '}
              Augmented Reality for immersive navigation and on-road guides.
            </li>
            <li>
              <span className="font-semibold text-white">Backend Suite:</span>
              {' '}
              A control hub for community managers, ride hosts, and vendors.
            </li>
            <li>
              <span className="font-semibold text-white">Cross-Platform Sync:</span>
              {' '}
              Seamless experience across devices and roles.
            </li>
          </ul>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our
              {' '}
              <span className="text-gold">Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our range of innovative products designed to enhance your adventure experience and provide
              practical solutions.
            </p>
          </div>

          <Tabs defaultValue="gt-vault" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="gt-vault" className="data-[state=active]:text-gold">
                GT Vault
              </TabsTrigger>
              <TabsTrigger value="ride-pilot" className="data-[state=active]:text-gold">
                Ride Pilot
              </TabsTrigger>
              <TabsTrigger value="trail-tech" className="data-[state=active]:text-gold">
                Trail Tech
              </TabsTrigger>
            </TabsList>

            {/* GT Vault Tab */}
            <TabsContent value="gt-vault">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gold/20 text-gold text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Premium Storage Solution
                  </div>
                  <h3 className="text-3xl font-bold mb-4">GT Vault</h3>
                  <p className="text-gray-400 mb-6">
                    GT Vault is a premium storage and maintenance solution for adventure vehicles and gear. It provides
                    secure, climate-controlled storage with advanced monitoring and maintenance services.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <Shield className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Secure Storage</h4>
                        <p className="text-sm text-gray-400">
                          24/7 monitored, climate-controlled storage facilities with advanced security systems.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <Settings className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Maintenance Services</h4>
                        <p className="text-sm text-gray-400">
                          Regular maintenance checks, fluid changes, and mechanical services by certified technicians.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <Zap className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quick Access</h4>
                        <p className="text-sm text-gray-400">
                          App-based access control allowing you to retrieve your vehicle or gear whenever you need it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Learn More</Button>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="GT Vault"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Ride Pilot Tab */}
            <TabsContent value="ride-pilot">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Ride Pilot"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <div className="bg-gold/20 text-gold text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Navigation & Tracking
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Ride Pilot</h3>
                  <p className="text-gray-400 mb-6">
                    Ride Pilot is an advanced navigation and tracking system designed specifically for adventure riders.
                    It provides real-time navigation, tracking, and safety features.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <Compass className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Navigation</h4>
                        <p className="text-sm text-gray-400">
                          Off-road and on-road navigation with custom routes, points of interest, and real-time updates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Real-time Tracking</h4>
                        <p className="text-sm text-gray-400">
                          GPS tracking with location sharing, route recording, and trip analytics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <Shield className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Safety Features</h4>
                        <p className="text-sm text-gray-400">
                          Emergency alerts, crash detection, and SOS functionality for peace of mind during adventures.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Learn More</Button>
                </div>
              </div>
            </TabsContent>

            {/* Trail Tech Tab */}
            <TabsContent value="trail-tech">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gold/20 text-gold text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Adventure Gear
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Trail Tech</h3>
                  <p className="text-gray-400 mb-6">
                    Trail Tech is our line of innovative adventure gear and accessories designed to enhance your outdoor
                    experience with practical, durable, and tech-enabled solutions.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-backpack"
                        >
                          <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                          <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
                          <path d="M8 10h8" />
                          <path d="M8 18h8" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Smart Luggage</h4>
                        <p className="text-sm text-gray-400">
                          Durable, waterproof luggage with integrated GPS tracking and smart organization features.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-helmet"
                        >
                          <path d="M12 4a8 8 0 0 0-8 8v2h16v-2a8 8 0 0 0-8-8Z" />
                          <path d="M8 14v1a4 4 0 0 0 8 0v-1" />
                          <path d="M8.5 6A5.5 5.5 0 0 0 3 11.5V14h2" />
                          <path d="M15.5 6A5.5 5.5 0 0 1 21 11.5V14h-2" />
                          <path d="M12 4v4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Tech-Enabled Apparel</h4>
                        <p className="text-sm text-gray-400">
                          Protective gear with integrated communication systems, temperature regulation, and safety
                          features.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/20 p-2 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFD700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-camera"
                        >
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Adventure Cameras</h4>
                        <p className="text-sm text-gray-400">
                          Rugged, weatherproof cameras designed specifically for capturing adventure moments in any
                          condition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Learn More</Button>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Trail Tech"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key
              {' '}
              <span className="text-gold">Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our products are designed with these core features that set them apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="bg-gold/20 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-xl font-bold">Durability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Built to withstand the harshest conditions and environments, our products are designed for longevity
                  and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="bg-gold/20 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-xl font-bold">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Cutting-edge technology and innovative design solutions that address real-world challenges faced by
                  adventurers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="bg-gold/20 p-3 rounded-full w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-bold">Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Seamless integration with mobile devices and other tech, providing a connected experience even in
                  remote locations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader className="pb-2">
                <div className="bg-gold/20 p-3 rounded-full w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-leaf"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-bold">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Environmentally conscious design and manufacturing processes, with a focus on reducing our ecological
                  footprint.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Customer
              {' '}
              <span className="text-gold">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our customers have to say about their experience with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Rahul Mehta</p>
                    <p className="text-sm text-gray-400">Adventure Rider</p>
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
                  "GT Vault has completely transformed how I store and maintain my motorcycle. The security features
                  give me peace of mind, and the maintenance services ensure my bike is always ready for the next
                  adventure."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Priya Singh</p>
                    <p className="text-sm text-gray-400">Travel Blogger</p>
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
                  "Ride Pilot has been a game-changer for my off-road adventures. The navigation is incredibly accurate,
                  and the safety features have already saved me once when I had a minor accident in a remote area."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Customer"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Vikram Joshi</p>
                    <p className="text-sm text-gray-400">Expedition Leader</p>
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
                  "The Trail Tech gear has survived everything I've thrown at it. The smart luggage with GPS tracking is
                  brilliant, and the adventure cameras capture stunning footage even in the most challenging
                  conditions."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product
              {' '}
              <span className="text-gold">Showcase</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest products and innovations designed for adventure enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="GT Vault Premium"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">GT Vault Premium</CardTitle>
                  <p className="text-gold font-bold">₹5,999/mo</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Our flagship storage solution with premium features and priority maintenance services.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Climate-controlled storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">24/7 security monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Monthly maintenance check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">App-based access control</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Product 2 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Ride Pilot Pro"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Ride Pilot Pro</CardTitle>
                  <p className="text-gold font-bold">₹12,999</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Advanced navigation and tracking system with premium features for serious adventurers.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Global off-road navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Real-time tracking & sharing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Emergency SOS functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Rugged, waterproof design</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Product 3 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Trail Tech Adventure Kit"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Adventure Kit</CardTitle>
                  <p className="text-gold font-bold">₹24,999</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Complete adventure gear kit with smart luggage, tech-enabled apparel, and adventure camera.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">GPS-enabled smart luggage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Tech-enabled protective gear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">4K adventure camera</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-gray-400">Integrated ecosystem</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="py-20 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Experience the Tools that Drive the Movement.
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-10">
            Join the growing number of adventurers who use our tech daily.
            Whether you're exploring or organizing, Core keeps you in control.
          </p>

          <div className="flex justify-center">
            <button className="bg-gold text-black font-medium px-6 py-2 rounded-full hover:bg-gold/90 transition">
              Download Café Cruisers
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WANT TO BRING OUR TOOLS
              TO YOUR COMMUNITY OR
              BUSINESS? LET’S TALK
              INNOVATION.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                Collaborate with us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
