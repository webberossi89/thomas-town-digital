import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://thomastowndigital.com";

// Directories that are Next.js internals or should not appear in the sitemap
const EXCLUDED_DIRS = new Set([
  "api",
  "_next",
  "blog",        // included separately below
  "free-content", // included separately below
]);

// Top-level dirs that are layout/config files, not pages
const EXCLUDED_FILES = new Set([
  "layout.tsx",
  "page.tsx",
  "globals.css",
  "sitemap.ts",
  "robots.ts",
  "not-found.tsx",
  "error.tsx",
  "loading.tsx",
]);

function getSubdirectories(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        !d.name.startsWith("_") &&
        !d.name.startsWith("(") &&
        !EXCLUDED_DIRS.has(d.name) &&
        !EXCLUDED_FILES.has(d.name)
    )
    .map((d) => d.name);
}

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        !d.name.startsWith("_") &&
        !d.name.startsWith("(")
    )
    .map((d) => d.name);
}

function getFreeContentSlugs(): string[] {
  const dir = path.join(process.cwd(), "app", "free-content");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        !d.name.startsWith("_") &&
        !d.name.startsWith("(")
    )
    .map((d) => d.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const appDir = path.join(process.cwd(), "app");

  // ── Core pages (fixed priority) ──────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    { url: BASE,                    priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/services`,      priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/pricing`,       priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/about`,         priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/contact`,       priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/blog`,          priority: 0.8, changeFrequency: "weekly" },
  ].map((p) => ({ ...p, lastModified: now }));

  // ── All other top-level pages (auto-discovered) ───────────────────────────
  const coreUrls = new Set(["/", "/services", "/pricing", "/about", "/contact", "/blog"]);
  const topLevelPages: MetadataRoute.Sitemap = getSubdirectories(appDir)
    .filter((slug) => !coreUrls.has(`/${slug}`))
    .map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  // ── Blog posts (auto-discovered) ─────────────────────────────────────────
  const posts: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // ── Free content / resources (auto-discovered) ───────────────────────────
  const resources: MetadataRoute.Sitemap = getFreeContentSlugs().map((slug) => ({
    url: `${BASE}/free-content/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...core, ...topLevelPages, ...posts, ...resources];
}
