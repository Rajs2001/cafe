import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export default function PulsePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cruiserverse <span className="text-gold">Pulse</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                The heartbeat of our community. Events, marketing initiatives, and community-building activities that
                bring people together.
              </p>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Explore Events</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cruiserverse Pulse"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Join Our Next Event</p>
                <p className="text-sm text-gray-400">May 25, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the range of services we offer to create memorable experiences and build vibrant communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <Calendar className="h-20 w-20 text-gold" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We organize and host a variety of events, from motorcycle rides and café meetups to adventure trips
                  and community gatherings.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Motorcycle Rides
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Café Meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Adventure Trips
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Community Gatherings
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Marketing Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-megaphone"
                >
                  <path d="m3 11 18-5v12L3 13v-2z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We help brands connect with our community through authentic marketing initiatives that resonate with
                  adventure enthusiasts.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Brand Partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Influencer Collaborations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Content Creation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Social Media Campaigns
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Community Initiatives Service */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gold/20 to-zinc-800 flex items-center justify-center">
                <Users className="h-20 w-20 text-gold" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Community Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We build and nurture communities through various initiatives that bring people together around shared
                  passions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Membership Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Workshops & Training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Social Causes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">•</span> Community Forums
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="text-gold">Events</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join us for our upcoming events and experiences. Connect with like-minded individuals and create memories
              that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Weekend Ride"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Weekend Mountain Ride</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">May 25-26, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">Western Ghats, Karnataka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">Limited to 20 riders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">2-day adventure</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Join us for an exhilarating weekend ride through the scenic Western Ghats. Experience breathtaking
                  views, challenging trails, and great company.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">Register Now</Button>
              </CardFooter>
            </Card>

            {/* Event 2 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Café Meetup"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Urban Café Meetup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">June 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">Café Cruisers, Indiranagar, Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">Open to all</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">6:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Connect with fellow enthusiasts over coffee and conversations. Share stories, discuss rides, and make
                  new friends in a relaxed urban setting.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">RSVP Now</Button>
              </CardFooter>
            </Card>

            {/* Event 3 */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Workshop"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Motorcycle Maintenance Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">June 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">GT Vault, Koramangala, Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">Limited to 15 participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className="text-sm text-gray-400">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Learn essential motorcycle maintenance skills from experts. Hands-on workshop covering basic to
                  advanced maintenance techniques.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gold text-black hover:bg-gold/90">Book Your Spot</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Marketing Showcase Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marketing <span className="text-gold">Showcase</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our marketing initiatives and brand collaborations that connect businesses with our passionate
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Marketing Showcase"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Brand Partnerships</p>
                <p className="text-sm text-gray-400">Authentic collaborations</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Marketing Approach</h3>
              <p className="text-gray-400">
                We believe in authentic marketing that resonates with our community. Our approach focuses on creating
                meaningful connections between brands and adventure enthusiasts through genuine experiences and
                storytelling.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Brand Partnerships</h4>
                  <p className="text-sm text-gray-400">
                    We collaborate with brands that share our values and vision, creating authentic partnerships that
                    benefit our community.
                  </p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Influencer Collaborations</h4>
                  <p className="text-sm text-gray-400">
                    We work with influencers who are genuine enthusiasts and can authentically connect with our
                    community.
                  </p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Content Creation</h4>
                  <p className="text-sm text-gray-400">
                    We create compelling content that tells stories, showcases experiences, and inspires our community.
                  </p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Media Campaigns</h4>
                  <p className="text-sm text-gray-400">
                    We design and execute social media campaigns that engage our community and drive meaningful
                    interactions.
                  </p>
                </div>
              </div>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Partner With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Initiatives Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community <span className="text-gold">Initiatives</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how we build and nurture our community through various initiatives and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1 bg-gradient-to-br from-gold/20 to-zinc-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-badge"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M12 12v-2" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">Membership Program</h3>
                  <p className="text-gray-400 mb-4">
                    Join our exclusive membership program and enjoy special benefits, access to members-only events, and
                    a vibrant community.
                  </p>
                  <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                    Join Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1 bg-gradient-to-br from-gold/20 to-zinc-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">Workshops & Training</h3>
                  <p className="text-gray-400 mb-4">
                    Enhance your skills through our workshops and training programs, covering everything from riding
                    techniques to maintenance.
                  </p>
                  <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                    Explore Workshops <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1 bg-gradient-to-br from-gold/20 to-zinc-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart-handshake"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">Social Causes</h3>
                  <p className="text-gray-400 mb-4">
                    We're committed to giving back to society through various social initiatives, from environmental
                    conservation to community development.
                  </p>
                  <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                    Get Involved <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                <div className="col-span-1 bg-gradient-to-br from-gold/20 to-zinc-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">Community Forums</h3>
                  <p className="text-gray-400 mb-4">
                    Connect with fellow enthusiasts through our online forums and discussion groups, sharing experiences
                    and knowledge.
                  </p>
                  <Button variant="link" className="text-gold p-0 flex items-center gap-1">
                    Join the Conversation <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the <span className="text-gold">Pulse</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join our community and be part of exciting events, marketing initiatives, and community-building
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
