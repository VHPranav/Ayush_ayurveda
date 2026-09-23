import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography is served from Unsplash until the client's
    // own Montenegro shoot is delivered.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
    qualities: [70, 80],
  },
};

export default nextConfig;
