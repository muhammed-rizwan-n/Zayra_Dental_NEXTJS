import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  async headers() {
    return [
      {
        // Static assets - Long cache
        source:
          "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
        ],
      },
      {
        // Dynamic content pages - Short cache
        source: "/:path(pricing|about-us)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, s-maxage=600, stale-while-revalidate=3600",
          },
        ],
      },
      {
        // Service pages - Medium cache
        source: "/services/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=1800, s-maxage=1800, stale-while-revalidate=7200",
          },
        ],
      },
      {
        // Contact and appointment pages - Short cache
        source: "/:path(contact|appointment)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=300, s-maxage=300, stale-while-revalidate=1800",
          },
        ],
      },
      {
        // API routes - no cache
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/our-team",
        destination: "/about-us#team",
        permanent: true,
      },
      {
        source: "/fees-and-finance",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
