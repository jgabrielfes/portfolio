import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/config/site";
import { routing } from "@/i18n/routing";

const paths = ["", "/projetos", "/experiencia"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.9,
      });
    }
  }

  return entries;
}
