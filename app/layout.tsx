import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thomas Town Digital — Digital Lead Gen & SMB Marketing",
  description: "We help home service businesses grow with paid search, paid social, and local SEO. More leads. More jobs. More revenue.",
  metadataBase: new URL("https://thomastowndigital.com"),
  openGraph: {
    title: "Thomas Town Digital",
    description: "Digital lead generation and SMB marketing for home service businesses.",
    url: "https://thomastowndigital.com",
    siteName: "Thomas Town Digital",
    type: "website",
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
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
