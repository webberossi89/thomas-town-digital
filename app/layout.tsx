import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thomas Town Digital | Home Services Marketing",
  description: "We help home service businesses grow with paid search, paid social, and local SEO. More leads. More jobs. More revenue.",
  metadataBase: new URL("https://thomastowndigital.com"),
  icons: {
    icon: [
      { url: "/logos/TT-Logo_MonoGram-Black-Sqaure.png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/TT-Logo_MonoGram-White-Square.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.thomastowndigital.com/feed.xml",
    },
  },
  openGraph: {
    title: "Thomas Town Digital",
    description: "Digital lead generation and SMB marketing for home service businesses.",
    url: "https://thomastowndigital.com",
    siteName: "Thomas Town Digital",
    type: "website",
    images: [{ url: "/logos/TT-Logo-Socials_Socials-01.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Organization schema — brand entity for AI Overviews and knowledge panels */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://thomastowndigital.com/#organization",
              "name": "Thomas Town Digital",
              "url": "https://thomastowndigital.com",
              "logo": "https://thomastowndigital.com/logos/TT-Logo-Socials_Socials-01.png",
              "description": "Thomas Town Digital is a home services marketing agency that helps contractors and local service businesses generate more qualified leads through SEO, Google Ads, Local Services Ads, and high-converting website design.",
              "foundingLocation": { "@type": "Place", "name": "Charlotte, NC" },
              "areaServed": { "@type": "Country", "name": "United States" },
              "serviceType": ["Home Services Marketing", "Google Ads Management", "Local Services Ads Management", "SEO for Contractors", "Lead Generation"],
              "sameAs": [
                "https://www.facebook.com/thomastowndigital",
                "https://www.linkedin.com/company/thomastowndigital"
              ]
            })
          }}
        />
        {/* LocalBusiness schema — local entity signal for local AI Overviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://thomastowndigital.com/#localbusiness",
              "name": "Thomas Town Digital",
              "url": "https://thomastowndigital.com",
              "image": "https://thomastowndigital.com/logos/TT-Logo-Socials_Socials-01.png",
              "description": "Home services marketing agency specialising in Google Ads, Local Services Ads, and SEO for contractors and home service businesses across the United States.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.2271,
                "longitude": -80.8431
              },
              "priceRange": "$$",
              "telephone": "",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
        {/* WebSite schema — brand identity and sitelinks search box signal */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://thomastowndigital.com/#website",
              "name": "Thomas Town Digital",
              "url": "https://thomastowndigital.com",
              "description": "Marketing agency for home service businesses — Google Ads, Local Services Ads, SEO, and lead generation for contractors.",
              "publisher": { "@id": "https://thomastowndigital.com/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://thomastowndigital.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5CZXKC2G');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CZXKC2G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
