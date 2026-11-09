import type { MetadataRoute } from "next";
import { seo } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.manifestName,
    short_name: seo.manifestShortName,
    description: seo.description,
    lang: "hi",
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    background_color: seo.themeColor,
    theme_color: seo.themeColor,
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
