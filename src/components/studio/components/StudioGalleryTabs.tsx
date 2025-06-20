'use client';

import { ImageIcon, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StudioGalleryTabs() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Media
            {' '}
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of photos, videos, and stories that capture the essence of the Cruiserverse experience.
          </p>
        </div>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="photos" className="data-[state=active]:gold-text">Photos</TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:gold-text">Videos</TabsTrigger>
          </TabsList>

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
        </Tabs>
      </div>
    </section>
  );
}
