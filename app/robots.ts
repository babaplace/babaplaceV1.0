import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/", "/discover"],
        disallow: "/private/",
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/", "/discover"],
      },
    ],
    sitemap: "https://babaplace.ma/sitemap.xml",
  };
}
