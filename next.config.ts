import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '@shared/assets/images',
        search: ''
      }
    ]
  }
};

export default nextConfig;
