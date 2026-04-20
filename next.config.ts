import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // ✅ Only proxy the register and login HTML pages
        {
          source: '/login',
          destination: 'https://user.flexicrm.in/login',
        },
        {
          source: '/login/:path*',
          destination: 'https://user.flexicrm.in/login/:path*',
        },
        {
          source: '/register',
          destination: 'https://user.flexicrm.in/register',
        },
        {
          source: '/register/:path*',
          destination: 'https://user.flexicrm.in/register/:path*',
        },
      ],
      // ✅ afterFiles won't interfere with your existing landing page routes
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;