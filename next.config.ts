import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: 'src/shared/assets/**',
      },
    ],
  },
};

export default nextConfig;
