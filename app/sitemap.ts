import type { MetadataRoute } from "next";

const BASE = "https://dallas.honestofferhome.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                   lastModified: new Date(), changeFrequency: "monthly", priority: 1    },
    { url: `${BASE}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/reviews`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/privacy`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    // TODO: add /sell-*-texas situation pages and DFW city sub-pages
    // (Fort Worth, Plano, Arlington, Irving, Garland) once those are built.
  ];
}
