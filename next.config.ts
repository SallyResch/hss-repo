import type { NextConfig } from "next";
 
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
        hostname:"*.cdninstagram.com"
      },
    ],
  },
};
 
export default nextConfig;