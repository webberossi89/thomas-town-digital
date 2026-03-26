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

  // Service / location pages
  const servicePages = [
    "home-services-marketing-agency",
    "local-services-ads",
    "charlotte",
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts
  const posts = [
    "2026-home-services-marketing-stack",
    "charlotte-google-ads-agency-contractors",
    "choose-home-service-lead-generation-agency",
    "complete-marketing-stack-home-service",
    "contractors-google-ads-book-more-jobs",
    "google-ads-contractors-two-phase-ai-max",
    "google-ads-for-roofers-cost",
    "google-ads-management-for-contractors",
    "google-ads-roofing-budget-guide",
    "google-guaranteed-vs-lsa-ads",
    "google-local-services-ads-contractors-long-game",
    "home-service-lead-generation-agency",
    "home-services-marketing-agency",
    "hvac-marketing-agency-services",
    "local-services-ads-home-service-2026",
    "local-services-ads-management-home-services",
    "optimize-google-business-profile-lsa",
    "seo-for-contractors-faq",
    "stop-chasing-google-recommendations",
    "top-5-marketing-mistakes-contractors",
    "what-are-local-services-ads",
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

  return [...core, ...verticals, ...servicePages, ...posts, ...resources];
}
