import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.macsdigitalmedia.com";
  const routes = [
    ["", "weekly", 1],
    ["/programs", "monthly", 0.9],
    ["/work", "monthly", 0.9],
    ["/story", "monthly", 0.8],
    ["/team", "monthly", 0.8],
    ["/built-here", "monthly", 0.8],
    ["/notes", "weekly", 0.7],
    ["/maxx", "monthly", 0.8],
    ["/website-rescue", "monthly", 0.7],
    ["/small-business", "monthly", 0.7],
    ["/apply", "monthly", 0.9],
    ["/privacy", "yearly", 0.3],
    ["/accessibility", "yearly", 0.3],
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = routes.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    changeFrequency: "monthly",
    priority: study.slug === "asc3nd" ? 0.9 : 0.75,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
