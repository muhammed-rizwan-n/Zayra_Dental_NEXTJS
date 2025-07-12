import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
