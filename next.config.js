/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Temporarily disabled to see actual build errors
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
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
  // Temporarily disabled experimental features that might cause deployment issues
  // experimental: {
  //   serverComponentsExternalPackages: [
  //     '@genkit-ai/googleai',
  //   ],
  // },
};

module.exports = nextConfig;