import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "i.ibb.co.com" ,
        port: '',
       
      },
      {
        protocol: 'https',
        hostname: "upload.wikimedia.org" ,
        port: '',
       
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
