import { allTreatments } from "@/lib/data/allTreatments";
import { allStaff } from "@/lib/data/allStaff";

const SITE_URL = "https://www.mavemedspa.com";

const getUrl = (path) => `${SITE_URL}${path}`;

export async function getServerSideProps({ res }) {
  const staticPages = [
    "/",
    "/treatments",
    "/promos",
    "/aboutus",
    "/ourteam",
    "/contact",
    "/location",
    "/faq",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const treatmentPages = allTreatments
    .filter((t) => t?.urlSlug)
    .map((t) => `/treatments/${t.urlSlug}`);

  const staffPages = allStaff
    .filter((s) => s?.name)
    .map((s) => `/ourteam/${s.name}`);

  const urls = [...new Set([...staticPages, ...treatmentPages, ...staffPages])];
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${getUrl(url)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
