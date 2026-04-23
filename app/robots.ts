import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/free-content/home-services-playbook-newsletter"],
      },
    ],
    sitemap: "https://www.thomastowndigital.com/sitemap.xml",
    host: "https://www.thomastowndigital.com",
  };
}
