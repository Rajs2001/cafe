import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ImageIcon, Film, Bookmark, Users, Calendar } from "lucide-react"

export default function StudioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cruiserverse <span className="text-gold">Studio</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Our media gallery showcasing the visual stories, adventures, and moments that define the Cruiserverse
                experience.
              </p>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Explore Gallery</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cruiserverse Studio"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-4 rounded-lg border border-gold/50 shadow-xl">
                <p className="text-gold font-semibold">Visual Storytelling</p>
                <p className="text-sm text-gray-400">Capturing moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Media <span className="text-gold">Gallery</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of photos, videos, and stories that capture the essence of the Cruiserverse
              experience.
            </p>
          </div>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="photos" className="data-[state=active]:text-gold">
                Photos
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:text-gold">
                Videos
              </TabsTrigger>
              <TabsTrigger value="stories" className="data-[state=active]:text-gold">
                Stories
              </TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={`photo-${i}`} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Photo ${i + 1}`}
                      alt={`Gallery Photo ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="rounded-full bg-gold/20 hover:bg-gold/30">
                        <ImageIcon className="h-6 w-6 text-gold" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
                  Load More
                </Button>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
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
                        className="rounded-full bg-gold/20 hover:bg-gold/30 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="h-8 w-8 text-gold" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="font-semibold text-white">Adventure Video {i + 1}</h3>
                      <p className="text-sm text-gray-300">Exploring the wilderness</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
                  View All Videos
                </Button>
              </div>
            </TabsContent>

            {/* Stories Tab */}
            <TabsContent value="stories">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
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
                          <Bookmark className="h-5 w-5 text-gold" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-gold/20 text-gold text-xs font-medium px-2.5 py-0.5 rounded">Adventure</div>
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
              <div className="mt-12 text-center">
                <Button variant="outline" className="rounded-full px-8 border-gold text-gold hover:bg-gold/10">
                  Read More Stories
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-black">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gold">Content</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked selection of content that showcases the best of Cruiserverse experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Featured Content"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="ghost" size="icon" className="rounded-full bg-gold/20 hover:bg-gold/30 scale-150">
                  <Play className="h-8 w-8 text-gold" />
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gold/20 text-gold text-sm font-medium px-3 py-1 rounded-full inline-block">
                Featured Documentary
              </div>
              <h3 className="text-3xl font-bold">The Road Less Traveled</h3>
              <p className="text-gray-400">
                An immersive documentary following a group of riders as they embark on a challenging journey through
                remote landscapes, facing obstacles and discovering the true meaning of adventure and camaraderie.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Film className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-gray-400">45 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Release Date</p>
                    <p className="text-sm text-gray-400">April 10, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Featured Riders</p>
                    <p className="text-sm text-gray-400">Rahul Sharma, Priya Patel, Vikram Singh</p>
                  </div>
                </div>
              </div>
              <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Watch Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Instagram <span className="text-gold">Feed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow us on Instagram for daily updates, behind-the-scenes content, and community highlights.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={`insta-${i}`} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Insta ${i + 1}`}
                  alt={`Instagram Post ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Follow Us on Instagram</Button>
          </div>
        </div>
      </section>

      {/* Submit Content Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Share Your <span className="text-gold">Story</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Have an amazing adventure story, photo, or video to share? Submit your content and be featured in our
                  gallery.
                </p>
                <Button className="rounded-full px-8 bg-gold text-black hover:bg-gold/90">Submit Content</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="User Content 1"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="User Content 2"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="User Content 3"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="User Content 4"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
