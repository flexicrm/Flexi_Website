import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
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
        // ✅ Proxy dashboard and all app routes after login
        {
          source: '/:username/dashboard',
          destination: 'https://user.flexicrm.in/:username/dashboard',
        },
        {
          source: '/:username/dashboard/:path*',
          destination: 'https://user.flexicrm.in/:username/dashboard/:path*',
        },
        {
          source: '/:username/:path*',
          destination: 'https://user.flexicrm.in/:username/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;