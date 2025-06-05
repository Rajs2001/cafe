'use client';
import { Award, Calendar, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VenturesPage() {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: 'Abisek Shravn',
      role: 'Founder & CTO',
      image: '/assets/founder/1.jpg',
      description: 'Adventure enthusiast with a passion for building communities and creating unique experiences.',
    },
    {
      name: 'Shree Babu',
      role: 'Co-founder & CEO',
      image: '/assets/founder/2.jpg',
      description: 'Visionary designer who brings our brand and experiences to life through creative storytelling.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ADVENTURE IS OUR LANGUAGE.
                {' '}
                <br />
                COMMUNITY IS OUR TERRAIN.

              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Meet our thriving adventure verticals — communities
                fueled by passion for the open road, off-road terrain,
                and the stories in between.
              </p>
              <Button className="rounded-full px-8 gold-bg text-black" onClick={handleScroll}>Meet Our Team</Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/motorcycle.png.webp"
                alt="Ventures Team"
                width={600}
                height={500}
                className="rounded-lg object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-3 bg-zinc-900 p-4 rounded-lg border gold-border shadow-xl">
                <p className="gold-text font-semibold">Founded in 2018</p>
                <p className="text-sm text-gray-400">5+ years of adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Flagship Ventures
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the communities that ride, roam, and rally together. Introducing
              Café Cruisers and Mud Cruisers — where passion becomes a vibrant movement.
            </p>
          </div>

          {/* Grid with equal height and responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Venture Card Component */}
            {[
              {
                title: 'Born to Ride. Built to Connect.',
                desc: 'A premier space for motorcyclists to discover new routes, strengthen connections, and honor the essence of two-wheels.',
                link: '/venture',
                img: '/assets/cafe-cruiser.jpg',
              },
              {
                title: 'Unleash the Off-Road Within.',
                desc: 'A rugged 4×4 culture for those who chase dirt, defy limits, and thrive in the wild unknown.',
                link: '/venture2',
                img: '/assets/mud-cruiser.jpg',
              },
            ].map((venture, i) => (
              <Card key={i} className="flex flex-col h-full overflow-hidden">
                <Image
                  src={venture.img}
                  alt={venture.title}
                  width={350}
                  height={450}
                  className="w-full h-64 object-cover"
                />
                <div className="flex flex-col flex-grow justify-between">
                  <CardContent className="pt-4 flex-grow">
                    <h3 className="text-xl font-bold mb-1">{venture.title}</h3>
                    <p className="text-sm text-gray-400">{venture.desc}</p>
                  </CardContent>
                  {/* <CardFooter>
                    <Link
                      href={venture.link}
                      className="gold-text flex items-center gap-1 text-sm hover:underline"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      {/* <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our
              {' '}
              <span className="gold-text">Milestones</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The key moments that have shaped our journey and growth over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 gold-bg/20"></div>

            <div className="space-y-24 relative">

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold gold-text mb-2">2018</h3>
                  <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                  <p className="text-gray-400">
                    Cruiserverse was founded with a vision to create unique experiences for adventure enthusiasts.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full gold-bg"></div>
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
                  <div className="w-8 h-8 rounded-full gold-bg"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-2xl font-bold gold-text mb-2">2019</h3>
                  <h4 className="text-xl font-semibold mb-2">Café Cruisers Launch</h4>
                  <p className="text-gray-400">
                    Launched our first venture, Café Cruisers, combining coffee culture with motorcycle enthusiasm.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold gold-text mb-2">2021</h3>
                  <h4 className="text-xl font-semibold mb-2">Expansion</h4>
                  <p className="text-gray-400">
                    Expanded our ecosystem with Mud Cruisers and GT Vault, reaching new communities and markets.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full gold-bg"></div>
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
                  <div className="w-8 h-8 rounded-full gold-bg"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                  <h3 className="text-2xl font-bold gold-text mb-2">2023</h3>
                  <h4 className="text-xl font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-gray-400">
                    Launched our digital platform, connecting our community online and expanding our reach globally.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold gold-text mb-2">2025</h3>
                  <h4 className="text-xl font-semibold mb-2">Future Vision</h4>
                  <p className="text-gray-400">
                    Our roadmap includes new ventures, international expansion, and innovative products for our
                    community.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full gold-bg"></div>
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
      </section> */}

      {/* Adventures Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond Adventures
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our initiatives focused on building a meaningful ecosystem for enthusiasts,
              professionals, and change-makers.
            </p>
          </div>

          {/* Grid for Adventures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Opportunities:',
                desc: `Offering structured roles for experienced riders to become certified Ride Pilots,
                        who lead group expeditions, ensure safety, and create memorable experiences.`,
                src: '/assets/beyond/6.jpg',
              },
              {
                title: 'Integrated Digital Platforms:',
                desc: `Innovating cutting-edge technologies and planning tools to enhance every facet
                       of the adventure journey like route optimization, coordination, bookings, and more.`,
                src: '/assets/beyond/1.jpg',
              },
              {
                title: 'Skill Development & Training Academies:',
                desc: `Through workshops and accredited programs, we enable riders and enthusiasts to
                       enhance skills and grow professionally within the adventure ecosystem.`,
                src: '/assets/beyond/2.jpg',
              },
              {
                title: 'A Purposeful Career Alternative:',
                desc: `For those seeking a shift from high-stress jobs, Cruiserverse offers a fulfilling
                       career in the adventure industry — with balance, stability, and satisfaction.`,
                src: '/assets/beyond/3.jpg',
              },
              {
                title: 'Collaborative Creator Programs:',
                desc: `We work with influencers, designers, and storytellers to share authentic narratives
                       from our experiences — building culture and connection.`,
                src: '/assets/beyond/4.jpg',
              },
              {
                title: 'Community-Led Growth:',
                desc: `Cruiserverse builds an inclusive culture where passion, sustainability, and innovation
                       define how we ride and grow — together.`,
                src: '/assets/beyond/5.jpg',
              },
            ].map((adventure, idx) => (
              <Card key={idx} className="bg-zinc-800 border-zinc-700 flex flex-col h-full overflow-hidden">
                <Image
                  src={adventure.src}
                  alt={adventure.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{adventure.title}</h3>
                  <p className="text-sm text-gray-400 whitespace-pre-line">
                    {adventure.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
              <p className="text-gray-400 mb-6">
                Cruiserverse is committed to building futures and fostering a more connected,
                inspired, and adventurous tomorrow
              </p>

              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Establishing Pan-India Club Networks for local rider communities and skill development.
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Expanding Skill Development Academy into a national certification body for ride leaders and
                  tour professionals.
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Developing Smart Touring Infrastructure to enhance the riding experience in India.
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Creating synergies for Rural & Urban Mobility through responsible tourism and sustainable
                  models.
                  {' '}
                </li>
                <li className="flex items-center gap-2">
                  <span className="gold-text">•</span>
                  {' '}
                  Positioning ourselves as the leading platform for adventure-based careers and community
                  innovations
                  {' '}
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-900" ref={targetRef}>
        <div className="container px-4">
          <div className="text-center mb-16">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="team" className="hidden">team</a>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our
              {' '}
              <span className="gold-text">Team</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind Cruiserverse who bring our vision to life every day.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 py-10 px-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl overflow-hidden w-[320px] hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <Image
                  width={320}
                  height={400}
                  src={member.image}
                  alt={member.name}
                  className="w-[320px] h-[340px] object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-full px-8 gold-bg text-black hover:gold-bg/90">Join Our Team</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Award className="h-12 w-12 gold-text mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">7+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 gold-text mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-400">Community Members</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Calendar className="h-12 w-12 gold-text mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-gray-400">Events Organized</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <TrendingUp className="h-12 w-12 gold-text mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-gray-400">Ventures Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      {/* <section className="py-20 bg-zinc-900">
        <div className="px-4 sm:px-8 lg:px-16 max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-left">
            Ready to Join the Adventure?
            {' '}
          </h3>
          <p className="text-gray-400 text-center mb-12">
            Whether you're looking for exciting career opportunities or interested in partnering with us, join the movement and be part of Cruiserverse's growing community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="gold-bg text-black rounded-full px-8 py-3 text-lg hover:gold-bg/90 transition">
              Join as Job Seeker
            </button>
            <button className="bg-transparent border border-gold gold-text rounded-full px-8 py-3 text-lg hover:gold-bg hover:text-black transition">
              Partner with Us
            </button>
          </div>
        </div>
      </section> */}

    </div>
  );
}
