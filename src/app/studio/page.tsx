import { ImageIcon, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StudioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gold-text"> STUDIO</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Where Adventure Meets Art.
              </p>
              <p className="text-gray-300 leading-relaxed">
                At Cruiserverse Studio, we are
                committed to harnessing the
                transformative power of storytelling to
                inspire movement. As the dedicated
                media and content division of
                Cruiserverse, we produce visuals,
                narratives, and campaigns that embody
                the spirit of our adventure-driven
                culture
                {' '}
                <br />
                <br />
                From cinematic reels and documentary
                shorts to comic art and digital
                storytelling, the Studio serves as a
                creative hub where our community’s
                most boldest ideas come to life visually
              </p>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/assets/studio-hero.jpg" // replace with your image path
                alt="Cruiserverse Studio"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-zinc-900">
        <div className="container ">
          <h3 className="text-2xl font-bold mb-4 text-center">What We Do ?</h3>
          <p className="text-gray-400 mb-2 font-medium text-center">
            Visual Storytelling | Creative Production | Branded Media
            {' '}
            <br />
            <span className="text-sm text-gray-400 mt-4">
              Whether it’s launching a new ride series, building cinematic content for a campaign, or
              publishing original comic universes — we offer end-to-end creative production services aligned
              with the Cruiserverse spirit.
            </span>
            <span className="text-lg text-white text-center block mt-14 text-start">
              Our Core Focus Areas:
              {' '}
            </span>
          </p>
          <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-tight">
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Event & Ride Aftermovies – Crisp, cinematic edits that capture the soul of every journey.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Creator Collaborations – Partnering with riders, filmmakers, and artists to co-create content.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Cruiserverse Comics – Original illustrated narratives, combining mobility and mythology.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Content Design – From brand films and teasers to visual content for social and web.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Media
              {' '}
              <span className="gold-text">Gallery</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of photos, videos, and stories that capture the essence of the Cruiserverse
              experience.
            </p>
          </div>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="photos" className="data-[state=active]:gold-text">
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:gold-text">
                Videos
              </TabsTrigger>
              {/* <TabsTrigger value="stories" className="data-[state=active]:gold-text">
                Stories
              </TabsTrigger> */}
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array.from({ length: 12 })].map((_, i) => (
                  <div key={`photo-${i}`} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Photo ${i + 1}`}
                      alt={`Gallery Photo ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="rounded-full gold-bg/20 hover:gold-bg/30">
                        <ImageIcon className="h-6 w-6 gold-text" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="rounded-full px-8 gold-border gold-text hover:gold-bg/10">
                  Load More
                </Button>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array.from({ length: 6 })].map((_, i) => (
                  <div key={`video-${i}`} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Video ${i + 1}`}
                      alt={`Gallery Video ${i + 1}`}
                      width={500}
                      height={300}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full gold-bg/20 hover:gold-bg/30 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-8 w-8 gold-text" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="font-semibold text-white">
                        Adventure Video
                        {i + 1}
                      </h3>
                      <p className="text-sm text-gray-300">Exploring the wilderness</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="rounded-full px-8 gold-border gold-text hover:gold-bg/10">
                  View All Videos
                </Button>
              </div>
            </TabsContent>

            {/* Stories Tab */}
            {/* <TabsContent value="stories">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array.from({ length: 4 })].map((_, i) => (
                  <Card key={`story-${i}`} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=600&text=Story ${i + 1}`}
                        alt={`Story ${i + 1}`}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
                          <Bookmark className="h-5 w-5 gold-text" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="gold-bg/20 gold-text text-xs font-medium px-2.5 py-0.5 rounded">Adventure</div>
                        <div className="text-xs text-gray-400">May 15, 2025</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">The Mountain Expedition</h3>
                      <p className="text-gray-400 mb-4">
                        A thrilling account of our recent expedition through the rugged mountain trails, facing
                        challenges and discovering hidden gems.
                      </p>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Author"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium">Rahul Sharma</p>
                          <p className="text-xs text-gray-400">Adventure Lead</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </section>

      {/* Want to Join Section */}
      <section className=" bg-zinc-900">
        <div className="container px-4">
          <h3 className="text-2xl font-bold mb-4 text-center">
            {' '}
            Want to Join Us?
          </h3>
          <p className="text-gray-400 mb-2 font-medium text-start">
            Help Us Craft the Future of Adventure Storytelling
            We're building a collaborative studio of passionate filmmakers, editors, visual designers, and
            writers who believe that motorcycles, mud, and media belong together. If you’ve got the spark,
            we’ve got the canvas.
            <span className="text-lg text-white text-start block mt-10">
              Ways to Collaborate:
              {' '}
            </span>
          </p>
          <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-tight">
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Apply to Join the Studio Team (Form / Email CTA)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Pitch a Creative Project (Link to Google Form or Typeform)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Submit Your Portfolio or Reel
              </span>
            </li>
            <p className="text-center text-start">
              {' '}
              “Freelancers, creators, and curious minds — this is your open road.”
            </p>
          </ul>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <h3 className="text-2xl font-bold mb-4 text-center"> Future Vision </h3>
          <p className="text-gray-400 mb-2 font-medium text-center">
            As we scale, Cruiserverse Studio aims to:
          </p>
          <ul className="space-y-4 text-gray-400 text-sm sm:text-base leading-tight mt-12">
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Launch a full digital comic series by 2030
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Host Creator Camps & Film Labs for
                automotive content
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="gold-text text-xl relative -top-0.5">•</span>
              <span>
                {' '}
                Expand into branded media services for
                automotive startups
              </span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
