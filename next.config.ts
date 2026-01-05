import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/scripts/:path*',
        destination: '/request-access',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;