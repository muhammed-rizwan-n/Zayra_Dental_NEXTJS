import { MetadataRoute } from "next";
import serviceList from "./services/serviceList.json";
import { unstable_noStore as noStore } from "next/cache";

const baseUrl = "https://zayradental.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  noStore();
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: new Date(),
    },
  ];

  // Service pages from serviceList.json
  const servicePages = Object.entries(serviceList).map(([slug]) => ({
    url: `${baseUrl}${serviceList[slug].href}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages];
}
