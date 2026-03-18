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
