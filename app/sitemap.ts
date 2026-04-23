import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://www.thomastowndigital.com";

// Directories / files that should not appear as pages in the sitemap
const EXCLUDED_DIRS = new Set(["api", "_next", "blog", "free-content"]);

function getSubdirectories(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        !d.name.startsWith("_") &&
        !d.name.startsWith("(") &&
        !EXCLUDED_DIRS.has(d.name)
    )
    .map((d) => d.name);
}

function getSlugs(subDir: string): string[] {
  const dir = path.join(process.cwd(), "app", subDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_") && !d.name.startsWith("("))
    .map((d) => d.name);
}

type Frequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

function entry(
  url: string,
  changeFrequency: Frequency,
  priority: number,
  lastModified: string
): MetadataRoute.Sitemap[number] {
  return { url, lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const appDir = path.join(process.cwd(), "app");

  // ── Core pages ────────────────────────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    entry(BASE,                 "weekly",  1.0, now),
    entry(`${BASE}/services`,   "monthly", 0.9, now),
    entry(`${BASE}/pricing`,    "monthly", 0.9, now),
    entry(`${BASE}/about`,      "monthly", 0.7, now),
    entry(`${BASE}/contact`,    "monthly", 0.8, now),
    entry(`${BASE}/blog`,       "weekly",  0.8, now),
  ];

  // ── Auto-discovered top-level pages ───────────────────────────────────────
  const coreSegments = new Set(["services", "pricing", "about", "contact", "blog"]);
  const topLevel: MetadataRoute.Sitemap = getSubdirectories(appDir)
    .filter((slug) => !coreSegments.has(slug))
    .map((slug) => entry(`${BASE}/${slug}`, "monthly", 0.8, now));

  // ── Blog posts (auto-discovered) ──────────────────────────────────────────
  const posts: MetadataRoute.Sitemap = getSlugs("blog").map((slug) =>
    entry(`${BASE}/blog/${slug}`, "yearly", 0.6, now)
  );

  // ── Free content / resources (auto-discovered) ────────────────────────────
  const resources: MetadataRoute.Sitemap = getSlugs("free-content").map((slug) =>
    entry(`${BASE}/free-content/${slug}`, "yearly", 0.5, now)
  );

  return [...core, ...topLevel, ...posts, ...resources];
}
