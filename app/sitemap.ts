import { MetadataRoute } from "next";
import serviceList from "./services/serviceList.json";
import { unstable_noStore as noStore } from "next/cache";

const baseUrl = "https://zayra-dental-nextjs.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  noStore();
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Service pages from serviceList.json
  const servicePages = Object.entries(serviceList).map(([slug]) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages];
}
