import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.246"],
  images: {
    remotePatterns:[
      {
        protocol:"https",
        hostname:"behold.pictures",
      },
      {
        protocol:"https",
        hostname:"*.cdinstagram.com"
      },
    ],
  },
};

export default withNextIntl(nextConfig);