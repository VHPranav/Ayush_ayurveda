import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All photography is self-hosted in /public/images/flow.
    qualities: [70, 75, 80],
  },
  // VIVUM moved to its own website; UK, India, Montenegro and Travel pages were removed — send old links home.
  // Temporary (307) so they can point at the new VIVUM domain once it is live.
  async redirects() {
    return [
      { source: "/vivum/:path*", destination: "/", permanent: false },
      // The UK centre has its own site
      { source: "/uk", destination: "https://ayushuk.com", permanent: false },
      { source: "/india", destination: "/", permanent: false },
      { source: "/montenegro", destination: "/", permanent: false },
      { source: "/travel", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
