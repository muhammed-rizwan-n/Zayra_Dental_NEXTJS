import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600, // 1 hour for images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
        // Static assets (images, fonts, etc.) - Long cache
        source:
          "/(.*\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot|css|js)).*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800", // 1 day cache, 1 week stale
          },
        ],
      },
      {
        // Dynamic content pages - Short cache
        source: "/(pricing|about-us)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, s-maxage=600, stale-while-revalidate=3600", // 10 minutes cache, 1 hour stale
          },
        ],
      },
      {
        // Service pages - Medium cache (content changes less frequently)
        source: "/services/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=1800, s-maxage=1800, stale-while-revalidate=7200", // 30 minutes cache, 2 hours stale
          },
        ],
      },
      {
        // Contact and appointment pages - Short cache
        source: "/(contact|appointment)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=300, s-maxage=300, stale-while-revalidate=1800", // 5 minutes cache, 30 minutes stale
          },
        ],
      },
      {
        // Gallery page - Medium cache
        source: "/gallery/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400", // 1 hour cache, 1 day stale
          },
        ],
      },
      {
        // Homepage - Medium cache
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=1800, s-maxage=1800, stale-while-revalidate=7200", // 30 minutes cache, 2 hours stale
          },
        ],
      },
      {
        // Global default for other HTML pages
        source: "/((?!api/).*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400", // 1 hour cache, 1 day stale
          },
        ],
      },
      {
        // API routes - no cache by default
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
