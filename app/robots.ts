import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/offer-request-confirmed", "/api/"],
      },
    ],
    sitemap: "https://dallas.honestofferhome.com/sitemap.xml",
  };
}
