import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora ESLint no build
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
