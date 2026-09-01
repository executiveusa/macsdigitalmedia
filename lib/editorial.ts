import fs from "node:fs";
import path from "node:path";

export type TruthClass = "FACT" | "INFERENCE" | "HYPOTHESIS" | "DECISION" | "EVIDENCE";

export type InsightSection = {
  type: "lead" | "statement" | "text" | "contrast";
  heading?: string;
  body?: string;
  before?: string;
  after?: string;
};

export type InsightArticle = {
  id: string;
  slug: string;
  status: "draft" | "preview" | "published" | "archived";
  title: string;
  dek: string;
  audience: string;
  thesis: string;
  author: string;
  publishedAt: string | null;
  revisionNote: string;
  sources: Array<{ type: string; label: string }>;
  claims: Array<{ text: string; truthClass: TruthClass; support: string }>;
  sections: InsightSection[];
  cta?: { label: string; href: string };
};

const contentRoot = path.join(process.cwd(), "content", "insights");

export function listInsights(): InsightArticle[] {
  if (!fs.existsSync(contentRoot)) return [];
  return fs
    .readdirSync(contentRoot)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(contentRoot, file), "utf8")) as InsightArticle)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function getInsight(slug: string): InsightArticle | null {
  return listInsights().find((article) => article.slug === slug) ?? null;
}
