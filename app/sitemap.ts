import type { MetadataRoute } from "next";
import { unstable_noStore as noStore } from 'next/cache';

export default function sitemap(): MetadataRoute.Sitemap {
  noStore();
  const baseUrl = "https://zayra-dental-nextjs.vercel.app";
  const urls = [
    "",
    "about-us",
    "services",
    "services/teeth-whitening",
    "services/dental-implants",
    "services/dental-aligners",
    "services/composite-and-veneers",
    "services/general-dentistry",
    "services/root-canal",
    "services/emergency-dental-care",
    "pricing",
    "gallery",
    "contact",
    "appointment",
  ];
 return urls.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));
}
