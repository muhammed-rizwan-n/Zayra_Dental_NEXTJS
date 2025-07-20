import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.zayradental.co.uk";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/","/sitemap.xml" ],
        disallow: ["/admin/", "/api/", "/_next/", "/private/"],

      },
      {
        userAgent: "Googlebot",
        allow: ["/","/sitemap.xml" ],
      },
      {
        userAgent: "Bingbot",
        allow: ["/","/sitemap.xml" ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
