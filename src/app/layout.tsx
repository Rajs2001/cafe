import type { Metadata } from 'next';
import type React from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cruiserverse | Built for the Wild',
  description: 'Built for the Wild. Powered by Stories. Driven by Community.',
  generator: 'TechServe Nexus',
  keywords: ['Motorcycle Long Drive', 'Riding Partner', 'Adventure Rides', 'Cruiserverse', 'Bike Rentals'],
  authors: [{ name: 'TechServe Nexus', url: 'https://techservenexus.com' }],
  openGraph: {
    title: 'Cruiserverse | Built for the Wild',
    description: 'Built for the Wild. Powered by Stories. Driven by Community.',
    url: 'https://cafecruisers.in',
    siteName: 'Cruiserverse',
    images: [
      {
        url: 'https://cafecruisers.in/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Cruiserverse Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cruiserverse | Built for the Wild',
    description: 'Built for the Wild. Powered by Stories. Driven by Community.',
    site: '@cruiserverse',
    creator: '@techservenexus',
    images: ['https://cafecruisers.in/favicon.ico'],
  },
  metadataBase: new URL('https://cafecruisers.in'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cafecruisers.in" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
