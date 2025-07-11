import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/blog/",
          "/services/",
          "/gallery/",
          "/pricing/",
          "/about-us/",
          "/contact/",
          "/appointment/",
        ],
        disallow: ["/api/", "/admin/", "/_next/", "/private/"],
      },
    ],
    sitemap: "https://zayradental.co.uk/sitemap.xml",
    host: "https://zayradental.co.uk",
  };
}
