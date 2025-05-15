import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: 'src/shared/assets/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
