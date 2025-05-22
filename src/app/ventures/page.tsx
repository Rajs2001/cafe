import { Award, Calendar, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VenturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our
                {' '}
                <span className="text-gold">Ventures</span>
                {' '}
                Journey
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                From a small idea to a thriving ecosystem of experiences, discover the story behind Cruiserverse and the
                team that makes it all possible.
              </p>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Meet Our Team</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Ventures Team"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Founded in 2018</p>
                <p className="text-sm text-gray-400">5+ years of adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About
              {' '}
              <span className="text-gold">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cruiserverse was born from a passion for adventure, community, and storytelling. We create experiences
              that bring people together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                To create immersive experiences that connect people through shared adventures, stories, and passions,
                while fostering a community of like-minded individuals.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 mb-6">
                To become the leading ecosystem for adventure enthusiasts, providing innovative products, services, and
                experiences that inspire and empower our community.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {' '}
                  Adventure in everything we do
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {' '}
                  Community-driven approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {' '}
                  Sustainability and responsibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {' '}
                  Innovation and creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">•</span>
                  {' '}
                  Quality and excellence
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="About Cruiserverse"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our
              {' '}
              <span className="text-gold">Milestones</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The key moments that have shaped our journey and growth over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/20"></div>

            {/* Timeline Items */}
            <div className="space-y-24 relative">
              {/* 2018 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-gold mb-2">2018</h3>
                  <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                  <p className="text-gray-400">
                    Cruiserverse was founded with a vision to create unique experiences for adventure enthusiasts.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Foundation"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* 2019 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-8 md:mb-0">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Café Cruisers Launch"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover ml-auto"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gold mb-2">2019</h3>
                  <h4 className="text-xl font-semibold mb-2">Café Cruisers Launch</h4>
                  <p className="text-gray-400">
                    Launched our first venture, Café Cruisers, combining coffee culture with motorcycle enthusiasm.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-gold mb-2">2021</h3>
                  <h4 className="text-xl font-semibold mb-2">Expansion</h4>
                  <p className="text-gray-400">
                    Expanded our ecosystem with Mud Cruisers and GT Vault, reaching new communities and markets.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Expansion"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-2 mb-8 md:mb-0">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Digital Transformation"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover ml-auto"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gold mb-2">2023</h3>
                  <h4 className="text-xl font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-gray-400">
                    Launched our digital platform, connecting our community online and expanding our reach globally.
                  </p>
                </div>
              </div>

              {/* 2025 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-gold mb-2">2025</h3>
                  <h4 className="text-xl font-semibold mb-2">Future Vision</h4>
                  <p className="text-gray-400">
                    Our roadmap includes new ventures, international expansion, and innovative products for our
                    community.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gold"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Future Vision"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our
              {' '}
              <span className="text-gold">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind Cruiserverse who bring our vision to life every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team Member"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1">Rahul Sharma</h3>
                <p className="text-gold mb-2">Founder & CEO</p>
                <p className="text-sm text-gray-400">
                  Adventure enthusiast with a passion for building communities and creating unique experiences.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team Member"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-gold mb-2">Creative Director</p>
                <p className="text-sm text-gray-400">
                  Visionary designer who brings our brand and experiences to life through creative storytelling.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team Member"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1">Vikram Singh</h3>
                <p className="text-gold mb-2">Operations Head</p>
                <p className="text-sm text-gray-400">
                  Logistics expert who ensures our experiences run smoothly and exceed expectations.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Team Member"
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-1">Ananya Reddy</h3>
                <p className="text-gold mb-2">Community Manager</p>
                <p className="text-sm text-gray-400">
                  Relationship builder who nurtures our community and creates meaningful connections.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Join Our Team</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-400">Community Members</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="text-gray-400">Events Organized</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-gray-400">Ventures Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the
              {' '}
              <span className="text-gold">Cruiserverse</span>
              {' '}
              Journey?
            </h2>
            <p className="text-gray-400 mb-8">
              Whether you're looking to join our team, partner with us, or become part of our community, we'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                Join Our Community
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
