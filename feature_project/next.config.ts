import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/feature",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
