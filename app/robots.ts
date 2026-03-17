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
    sitemap: "https://thomastowndigital.com/sitemap.xml",
  };
}
