// app/robots.ts
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services",
          "/blog",
          "/membership",
          "/contact",
        ],
        disallow: [
          "/admin",
          "/dashboard",
          "/api",
        ],
      },
    ],
    sitemap: "https://engabiensamba.com/sitemap.xml",
  }
}