import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amzhive.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
