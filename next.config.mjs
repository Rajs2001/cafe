import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configure webpack to handle Node.js modules in the browser
  webpack: (config, { isServer }) => {
    // If client-side (browser)
    if (!isServer) {
      // Replace Node.js modules with empty modules when bundling for the browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        worker_threads: false,
        pino: false,
        'pino-pretty': false,
        '@logtail/pino': false,
      };
    }
    
    return config;
  },
  
  // Disable image optimization during development to speed up builds
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  // Enable experimental features
  experimental: {
    serverComponentsExternalPackages: [
      'pino',
      'pino-pretty',
      '@logtail/pino',
    ],
  },
};

// Wrap with Sentry config
export default withSentryConfig(
  nextConfig,
  {
    // Sentry options
    silent: true, // Suppresses source map upload logs during build
  },
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options
    
    // Upload source maps only in production
    disableServerWebpackPlugin: process.env.NODE_ENV !== 'production',
    disableClientWebpackPlugin: process.env.NODE_ENV !== 'production',
  },
);
