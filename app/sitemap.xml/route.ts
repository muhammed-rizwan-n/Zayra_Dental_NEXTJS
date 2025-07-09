// app/sitemap/route.ts

export async function GET(): Promise<Response> {
  const baseUrl = "https://zayra-dental-nextjs.vercel.app";
  const currentDate = new Date().toISOString();

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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `<url>
  <loc>${baseUrl}/${path}</loc>
  <lastmod>${currentDate}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
