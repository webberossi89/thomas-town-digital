import Link from "next/link";
import type { ReactNode } from "react";

interface ArticleLayoutProps {
  children: ReactNode;
  meta: {
    title: string;
    description: string;
    category: string;
    date: string;
    dateISO: string;
    readTime: string;
    slug: string;
  };
}

export default function ArticleLayout({ children, meta }: ArticleLayoutProps) {
  const canonicalUrl = `https://www.thomastowndigital.com/blog/${meta.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: canonicalUrl,
    datePublished: meta.dateISO,
    dateModified: meta.dateISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: {
      "@type": "Person",
      name: "Jared Webber",
      url: "https://www.thomastowndigital.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Thomas Town Digital",
      url: "https://www.thomastowndigital.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <section style={{ paddingTop: "120px", paddingBottom: "56px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <Link
              href="/blog"
              style={{ fontSize: "13px", color: "rgba(0,0,0,0.45)", textDecoration: "none", transition: "color 0.15s" }}
              className="link-muted-dark"
            >
              Blog
            </Link>
            <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "13px" }}>→</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#2D8A45",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backgroundColor: "rgba(45,138,69,0.1)",
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              {meta.category}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              marginBottom: "20px",
            }}
          >
            {meta.title}
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "rgba(0,0,0,0.55)",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}
          >
            {meta.description}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              paddingBottom: "0",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#2D8A45",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#fff", fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "14px" }}>JW</span>
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#0a0a0a", fontFamily: "'Barlow', sans-serif" }}>Jared Webber</p>
              <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)" }}>
                <time dateTime={meta.dateISO}>{meta.date}</time> · {meta.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article style={{ padding: "64px 24px 100px", background: "#fff" }}>
        <div
          style={{ maxWidth: "760px", margin: "0 auto" }}
          className="article-body"
        >
          {children}
        </div>
      </article>

      {/* Bottom CTA */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(24px, 3vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            Ready to Put This Into Practice?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "32px" }}>
            We build the campaigns and systems described in these articles — for roofing, HVAC, and plumbing companies across the US.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "14px 30px" }}>
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        .link-muted-dark:hover { color: rgba(0,0,0,0.8) !important; }

        .article-body p {
          font-size: 16px;
          color: rgba(0,0,0,0.7);
          line-height: 1.85;
          margin-bottom: 22px;
        }
        .article-body h2 {
          font-family: 'Barlow', sans-serif;
          font-weight: 900;
          font-size: clamp(20px, 2.5vw, 28px);
          text-transform: uppercase;
          letter-spacing: -0.015em;
          color: #0a0a0a;
          margin-top: 52px;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .article-body h3 {
          font-family: 'Barlow', sans-serif;
          font-weight: 800;
          font-size: 17px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #0a0a0a;
          margin-top: 36px;
          margin-bottom: 12px;
        }
        .article-body h4 {
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #0a0a0a;
          margin-top: 28px;
          margin-bottom: 8px;
        }
        .article-body ul, .article-body ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .article-body li {
          font-size: 16px;
          color: rgba(0,0,0,0.7);
          line-height: 1.8;
          margin-bottom: 8px;
        }
        .article-body strong {
          font-weight: 700;
          color: #0a0a0a;
        }
        .article-body blockquote {
          border-left: 3px solid #2D8A45;
          margin: 36px 0;
          padding: 20px 24px;
          background: rgba(45,138,69,0.05);
          border-radius: 0 8px 8px 0;
        }
        .article-body blockquote p {
          font-size: 17px;
          font-style: italic;
          color: rgba(0,0,0,0.65);
          margin-bottom: 0;
        }
        .article-body .callout {
          background: #f7f7f7;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          padding: 24px 28px;
          margin: 36px 0;
        }
        .article-body .callout p {
          margin-bottom: 0;
        }
        .article-body a {
          color: #2D8A45;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .article-body hr {
          border: none;
          border-top: 1px solid rgba(0,0,0,0.08);
          margin: 48px 0;
        }
      `}</style>
    </>
  );
}
