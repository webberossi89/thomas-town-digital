import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host: permanently redirect apex (non-www) to www so Google
      // consolidates one hostname. Vercel's automatic apex->www redirect is a
      // 307 (temporary), which keeps both hostnames indexed and splits ranking
      // signal. A 308 permanent redirect here fixes consolidation. Requires the
      // apex domain to be assigned to the project as a normal domain in Vercel
      // (not a dashboard-level "redirect to www"), otherwise the platform 307
      // fires first and this rule never runs.
      {
        source: "/:path*",
        has: [{ type: "host", value: "thomastowndigital.com" }],
        destination: "https://www.thomastowndigital.com/:path*",
        permanent: true,
      },
      // Recover the second restoration-cities article (denver/phoenix/dallas/miami
      // variant). Still indexed and 404ing; route it to the same place as its
      // sibling slug.
      {
        source: "/restoration-marketing-in-major-u-s-cities-denver-phoenix-dallas-miami",
        destination: "/water-damage",
        permanent: true,
      },
      {
        source: "/restoration-marketing-in-major-u-s-cities-denver-phoenix-dallas-miami/",
        destination: "/water-damage",
        permanent: true,
      },
      // Recover the "complete guide" contractors Google Ads article (distinct
      // from the two-phase-ai-max slug already handled below). Still indexed at
      // position ~6 but 404ing; route to the contractor Google Ads management guide.
      {
        source: "/how-to-use-google-ads-for-contractors-the-complete-guide",
        destination: "/blog/google-ads-management-for-contractors",
        permanent: true,
      },
      {
        source: "/how-to-use-google-ads-for-contractors-the-complete-guide/",
        destination: "/blog/google-ads-management-for-contractors",
        permanent: true,
      },
      {
        source: "/how-to-use-google-ads-for-contractors-the-two-phase-ai-max-strategy-that-actually-works",
        destination: "/blog/google-ads-contractors-two-phase-ai-max",
        permanent: true,
      },
      {
        source: "/how-to-use-google-ads-for-contractors-the-two-phase-ai-max-strategy-that-actually-works/",
        destination: "/blog/google-ads-contractors-two-phase-ai-max",
        permanent: true,
      },
      {
        source: "/local-services-ads-for-home-service-businesses-whats-actually-working-in-2026",
        destination: "/blog/local-services-ads-home-service-2026",
        permanent: true,
      },
      {
        source: "/local-services-ads-for-home-service-businesses-whats-actually-working-in-2026/",
        destination: "/blog/local-services-ads-home-service-2026",
        permanent: true,
      },
      {
        source: "/the-2026-home-services-marketing-stack-whats-working-right-now",
        destination: "/blog/2026-home-services-marketing-stack",
        permanent: true,
      },
      {
        source: "/the-2026-home-services-marketing-stack-whats-working-right-now/",
        destination: "/blog/2026-home-services-marketing-stack",
        permanent: true,
      },
      {
        source: "/how-to-optimize-your-google-business-profile-for-local-services-ads-success",
        destination: "/blog/optimize-google-business-profile-lsa",
        permanent: true,
      },
      {
        source: "/how-to-optimize-your-google-business-profile-for-local-services-ads-success/",
        destination: "/blog/optimize-google-business-profile-lsa",
        permanent: true,
      },
      {
        source: "/the-complete-marketing-stack-for-home-service-businesses-in-2026",
        destination: "/blog/complete-marketing-stack-home-service",
        permanent: true,
      },
      {
        source: "/the-complete-marketing-stack-for-home-service-businesses-in-2026/",
        destination: "/blog/complete-marketing-stack-home-service",
        permanent: true,
      },
      {
        source: "/google-ads-for-roofing-companies-complete-budget-guide-and-roi-analysis",
        destination: "/blog/google-ads-roofing-budget-guide",
        permanent: true,
      },
      {
        source: "/google-ads-for-roofing-companies-complete-budget-guide-and-roi-analysis/",
        destination: "/blog/google-ads-roofing-budget-guide",
        permanent: true,
      },
      {
        source: "/google-local-services-ads-for-contractors-why-playing-the-long-game-wins-more-leads",
        destination: "/blog/google-local-services-ads-contractors-long-game",
        permanent: true,
      },
      {
        source: "/google-local-services-ads-for-contractors-why-playing-the-long-game-wins-more-leads/",
        destination: "/blog/google-local-services-ads-contractors-long-game",
        permanent: true,
      },
      {
        source: "/stop-chasing-googles-recommendations-why-their-best-practices-dont-always-work-for-real-businesses",
        destination: "/blog/stop-chasing-google-recommendations",
        permanent: true,
      },
      {
        source: "/stop-chasing-googles-recommendations-why-their-best-practices-dont-always-work-for-real-businesses/",
        destination: "/blog/stop-chasing-google-recommendations",
        permanent: true,
      },
      {
        source: "/top-5-marketing-mistakes-contractors-make-and-how-to-fix-them-fast",
        destination: "/blog/top-5-marketing-mistakes-contractors",
        permanent: true,
      },
      {
        source: "/top-5-marketing-mistakes-contractors-make-and-how-to-fix-them-fast/",
        destination: "/blog/top-5-marketing-mistakes-contractors",
        permanent: true,
      },
      {
        source: "/how-successful-contractors-are-using-google-ads-to-book-more-jobs",
        destination: "/blog/contractors-google-ads-book-more-jobs",
        permanent: true,
      },
      {
        source: "/how-successful-contractors-are-using-google-ads-to-book-more-jobs/",
        destination: "/blog/contractors-google-ads-book-more-jobs",
        permanent: true,
      },
      // Page URL changes
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/free-content",
        permanent: true,
      },
      {
        source: "/resources/",
        destination: "/free-content",
        permanent: true,
      },
      {
        source: "/blog-2",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-2/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/contact-3",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-3/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/",
        permanent: true,
      },
      // Legacy WordPress posts and CPTs still showing impressions in GSC
      {
        source: "/local-seo-strategies",
        destination: "/verticals",
        permanent: true,
      },
      {
        source: "/local-seo-strategies/",
        destination: "/verticals",
        permanent: true,
      },
      {
        source: "/restoration-marketing-in-major-u-s-cities-how-much-should-you-spend",
        destination: "/water-damage",
        permanent: true,
      },
      {
        source: "/restoration-marketing-in-major-u-s-cities-how-much-should-you-spend/",
        destination: "/water-damage",
        permanent: true,
      },
      {
        source: "/pixpopup-item/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio-item/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
