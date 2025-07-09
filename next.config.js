/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Reduces bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimize for production
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

module.exports = nextConfig;