import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.macsdigitalmedia.com";
  const routes = [
    ["", "weekly", 1],
    ["/maxx", "monthly", 0.9],
    ["/founding-launch", "monthly", 0.9],
    ["/website-rescue", "monthly", 0.8],
    ["/small-business", "monthly", 0.7],
    ["/apply", "monthly", 0.9],
    ["/privacy", "yearly", 0.3],
    ["/accessibility", "yearly", 0.3],
  ] as const;

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
