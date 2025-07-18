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
        // Static assets (images, fonts, etc.)
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
        // Global default for HTML pages
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

module.exports = {
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
};

export default nextConfig;
