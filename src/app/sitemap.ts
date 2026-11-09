import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = `${site.url.replace(/\/$/, "")}/`;
  return [
    {
      url,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { "hi-IN": url } },
    },
  ];
}
