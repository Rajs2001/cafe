import { ArrowRight, Camera, Coffee, Cpu, Mountain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            <span className="text-gold">BUILT FOR THE WILD.</span>
            <br />
            <span>POWERED BY STORIES.</span>
            <br />
            <span>DRIVEN BY COMMUNITY.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Cruiserverse is a collective of ventures, experiences, and products designed for those who seek adventure
            and community.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-gold text-black hover:bg-gold/90">
            Explore
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to
              {' '}
              <span className="text-gold">Cruiserverse</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our ecosystem of ventures, experiences, and innovations built for adventurers and storytellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ventures Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Coffee className="h-12 w-12 text-gold mb-2" />
                <CardTitle className="text-xl font-bold">Ventures</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our journey, milestones, and the team behind Cruiserverse's vision and mission.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/ventures" className="text-gold flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Pulse Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Mountain className="h-12 w-12 text-gold mb-2" />
                <CardTitle className="text-xl font-bold">Pulse</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Events, marketing initiatives, and community building activities that drive our ecosystem.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/pulse" className="text-gold flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Studio Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Camera className="h-12 w-12 text-gold mb-2" />
                <CardTitle className="text-xl font-bold">Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our media gallery showcasing photos, video stories, and creative content from our adventures.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/studio" className="text-gold flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Core Card */}
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardHeader className="pb-2">
                <Cpu className="h-12 w-12 text-gold mb-2" />
                <CardTitle className="text-xl font-bold">Core</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 min-h-[80px]">
                  Our product ecosystem including GT Vault, Ride Pilot, and other innovative solutions.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/core" className="text-gold flex items-center gap-1 text-sm hover:underline">
                  Learn more
                  {' '}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover Our
                {' '}
                <span className="text-gold">Featured Experiences</span>
              </h2>
              <p className="text-gray-400 mb-8">
                From café cruisers to mud adventures, we create unique experiences that bring communities together
                through shared passions and stories.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 p-2 rounded-full">
                    <Coffee className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Café Cruisers</h3>
                    <p className="text-sm text-gray-400">
                      Urban café experiences for motorcycle enthusiasts and coffee lovers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 p-2 rounded-full">
                    <Mountain className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mud Cruisers</h3>
                    <p className="text-sm text-gray-400">
                      Off-road adventures and experiences for thrill-seekers and nature lovers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 p-2 rounded-full">
                    <Cpu className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GT Vault</h3>
                    <p className="text-sm text-gray-400">
                      Premium storage and maintenance solutions for adventure vehicles and gear.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 rounded-full px-6 bg-gold text-black hover:bg-gold/90">
                Explore All Experiences
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Featured Experiences"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Join Our Community</p>
                <p className="text-sm text-gray-400">5000+ adventurers and growing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Adventure?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Become part of our community and experience the thrill of adventure, the warmth of connection, and the joy
              of shared stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                Join Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
