import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.246"],
  images: {
<<<<<<< HEAD
    remotePatterns:[
=======
    remotePatterns:[    
>>>>>>> feature/043-departmentspage
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