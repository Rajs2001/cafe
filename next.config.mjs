import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',

  webpack(config) {
    return config;
  },

  sentry: {
    hideSourceMaps: true,
    disableLogger: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  experimental: {
    instrumentationHook: false,
  },
};

export default withBundleAnalyzer(nextConfig);
