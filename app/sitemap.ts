import { MetadataRoute } from "next";

const BASE = "https://thomastowndigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const core = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/pricing`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  // Vertical landing pages
  const verticals = [
    "hvac",
    "roofing",
    "plumbing",
    "electrical",
    "water-damage",
  ].map((v) => ({
    url: `${BASE}/${v}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts
  const posts = [
    "google-ads-contractors-two-phase-ai-max",
    "local-services-ads-home-service-2026",
    "2026-home-services-marketing-stack",
    "optimize-google-business-profile-lsa",
    "google-ads-roofing-budget-guide",
    "google-local-services-ads-contractors-long-game",
    "stop-chasing-google-recommendations",
    "top-5-marketing-mistakes-contractors",
    "contractors-google-ads-book-more-jobs",
    "complete-marketing-stack-home-service",
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Resources
  const resources = [
    "home-services-growth-playbook",
    "local-seo-cheat-sheet",
    "google-lsa-guide",
    "lead-management-system",
  ].map((slug) => ({
    url: `${BASE}/free-content/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...core, ...verticals, ...posts, ...resources];
}
