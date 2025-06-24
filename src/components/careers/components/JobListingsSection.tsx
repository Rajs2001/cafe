'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code, CreditCard, MailCheck, Paintbrush, Truck } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Define job categories
const categories = [
  { id: 'all', label: 'All Positions' },
  { id: 'tech', label: 'Technology', icon: <Code className="h-4 w-4" /> },
  { id: 'operations', label: 'Operations', icon: <Truck className="h-4 w-4" /> },
  { id: 'marketing', label: 'Marketing', icon: <MailCheck className="h-4 w-4" /> },
  { id: 'finance', label: 'Finance', icon: <CreditCard className="h-4 w-4" /> },
  { id: 'design', label: 'Creative', icon: <Paintbrush className="h-4 w-4" /> },
];

// Define job listings
const jobListings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'tech',
    experience: '3-5 years',
    description: 'Join our Core team to build innovative digital platforms that power the adventure ecosystem.',
    featured: true,
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    category: 'design',
    experience: '2-4 years',
    description: 'Design beautiful interfaces for our adventure planning and community platforms.',
    featured: true,
  },
  {
    id: 3,
    title: 'Operations Manager',
    location: 'Mumbai, India',
    type: 'Full-time',
    category: 'operations',
    experience: '4+ years',
    description: 'Oversee our adventure operations, ensuring smooth experiences for all participants.',
    featured: false,
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    location: 'Hybrid',
    type: 'Full-time',
    category: 'marketing',
    experience: '2-3 years',
    description: 'Grow our online presence and connect with adventure enthusiasts through creative campaigns.',
    featured: false,
  },
  {
    id: 5,
    title: 'Finance Analyst',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'finance',
    experience: '3+ years',
    description: 'Help manage the financial aspects of our growing adventure business.',
    featured: false,
  },
  {
    id: 6,
    title: 'Community Manager',
    location: 'Delhi, India',
    type: 'Full-time',
    category: 'marketing',
    experience: '2+ years',
    description: 'Nurture and grow our rider communities, organizing events and fostering connections.',
    featured: true,
  },
];

export default function JobListingsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter jobs based on selected category
  const filteredJobs = activeCategory === 'all'
    ? jobListings
    : jobListings.filter(job => job.category === activeCategory);

  return (
    <section id="open-positions" className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container px-6 md:px-8 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Open Positions
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find the perfect role to match your skills and passion for adventure
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 ${
                activeCategory === category.id
                  ? 'bg-orange-500 hover:bg-orange-600 border-transparent text-black'
                  : 'border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                {category.icon && <span>{category.icon}</span>}
                <span>{category.label}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Job listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.length > 0
            ? (
                filteredJobs.map(job => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`bg-zinc-800/50 border ${job.featured ? 'border-orange-500/30' : 'border-zinc-700'} 
                  rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/5 transition-all`}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-5 w-5 text-orange-500" />
                            <h3 className="text-lg font-bold text-white">{job.title}</h3>
                            {job.featured && (
                              <span className="px-2 py-1 text-xs font-semibold bg-orange-500/20 text-orange-400 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 mb-4">{job.description}</p>

                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-gray-300">
                              {job.location}
                            </span>
                            <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-gray-300">
                              {job.type}
                            </span>
                            <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-gray-300">
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-right">
                        <Button
                          variant="ghost"
                          asChild
                          className="text-orange-400 hover:text-orange-500 hover:bg-orange-500/10"
                        >
                          <Link href={`/careers/${job.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )
            : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-gray-400 text-lg">No positions currently open in this category.</p>
                  <p className="text-gray-500 mt-2">Please check back later or explore other categories.</p>
                </div>
              )}
        </div>
      </div>
    </section>
  );
}
