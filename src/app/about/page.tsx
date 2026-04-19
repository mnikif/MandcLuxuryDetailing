import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: 'About M&C Luxury Detailing — Mobile Detailer in Danvers, MA' },
  description: 'Matt has been detailing cars on the North Shore since high school. Based in Danvers, MA — a local you can trust with your vehicle. Read his story.',
  alternates: {
    canonical: 'https://www.mandcluxurydetailing.com/about',
  },
};

const values = [
  { title: "Fully Mobile", desc: "We bring everything — water, power, professional products — right to your driveway." },
  { title: "Premium Products", desc: "Industry-leading brands only. No shortcuts on the products touching your paint." },
  { title: "North Shore Local", desc: "Danvers-born, locally owned. We care deeply about our community and reputation." },
  { title: "Detail-Obsessed", desc: "We check our work twice. Then again. Perfectionists about every panel and surface." },
];

const cities = [
  { name: "Beverly", slug: "beverly" },
  { name: "Danvers", slug: "danvers" },
  { name: "Salem", slug: "salem" },
  { name: "Peabody", slug: "peabody" },
  { name: "Manchester-by-the-Sea", slug: "manchester" },
  { name: "Gloucester", slug: "gloucester" },
  { name: "Marblehead", slug: "marblehead" },
  { name: "Swampscott", slug: "swampscott" },
  { name: "Lynn", slug: "lynn" },
  { name: "Hamilton", slug: "hamilton" },
  { name: "Wenham", slug: "wenham" },
];

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Matt",
            "jobTitle": "Founder & Lead Detailer",
            "worksFor": {
              "@type": "LocalBusiness",
              "name": "M&C Luxury Detailing",
              "url": "https://www.mandcluxurydetailing.com",
              "telephone": "+17816325193",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Danvers",
                "addressRegion": "MA",
                "postalCode": "01923",
                "addressCountry": "US",
              },
              "description": "Mobile car detailing business serving Danvers, Beverly, Salem, Peabody, Gloucester, Marblehead and all of North Shore Massachusetts.",
            },
            "knowsAbout": ["Car Detailing", "Auto Detailing", "Mobile Detailing", "Interior Detailing", "Exterior Detailing"],
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Mobile Car Detailing · North Shore MA
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Meet Your North Shore Detailer
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section style={{ background: "#060606", padding: "4rem 0" }}>
        <div style={wrap}>

          {/* Story text */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
              The Founder
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "#f2ede4", lineHeight: 1.1, marginBottom: "1.75rem", textAlign: "center" }}>
              Matt —<br />
              <span style={{ color: "#c9a84c" }}>Built for the North Shore</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#7a7a7a", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}>
              <p>
                M&amp;C Luxury Detailing started the way most good things do — A high school student from Danvers who cared too much about clean cars and figured he could do it better than anyone else.
              </p>
              <p>
                Matt grew up on the North Shore doing mobile car detailing out of driveways on weekends. What started as a side hustle turned into something real when clients kept coming back — and kept sending their friends.
              </p>
              <p>
                He went mobile because it made sense: why make someone drive to him when he can bring everything they need right to their door? Professional-grade equipment, proper technique, and one standard — do the job so well that every client brags about it.
              </p>
              <p>
                Today he provides mobile car detailing across Beverly, Danvers, Salem, Peabody, Gloucester, Marblehead, and the rest of North Shore Massachusetts. Every car still gets treated like his own.
              </p>
            </div>
          </div>

          {/* Founder photo with pull quote */}
          <div style={{ position: "relative", maxWidth: "42rem", margin: "0 auto", border: "1px solid #1c1c1c", overflow: "hidden", aspectRatio: "3/4" }}>
            <Image
              src="/Matt.PNG"
              alt="Matt, founder of M&C Luxury Detailing, mobile car detailing professional serving Danvers and North Shore Massachusetts"
              fill
              quality={100}
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            {/* Gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(6,6,6,0.4) 45%, transparent 75%)" }} />
            {/* Pull quote */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2rem" }}>
              <div style={{ width: "2.5rem", height: "1px", background: "#c9a84c", marginBottom: "1rem" }} />
              <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", color: "#f2ede4", lineHeight: 1.45, marginBottom: "1rem" }}>
                &ldquo;Every car still gets treated like my own.&rdquo;
              </p>
              <span style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Matt — Founder, M&amp;C Luxury Detailing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem", textAlign: "center" }}>
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, textAlign: "center" }}>
              The M&amp;C Difference
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ background: "#060606", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2.5rem", color: "#c9a84c", opacity: 0.18, lineHeight: 1, marginBottom: "0.75rem", textAlign: "center" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.3rem", color: "#f2ede4", marginBottom: "0.6rem", textAlign: "center" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#7a7a7a", fontSize: "0.84rem", lineHeight: 1.7, textAlign: "center" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem", textAlign: "center" }}>
            Coverage
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "2.5rem", textAlign: "center" }}>
            The Entire North Shore
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {cities.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="hover:border-[#c9a84c]/40 hover:text-[#c9a84c]" style={{ border: "1px solid #1c1c1c", color: "#7a7a7a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.5rem 0.875rem", transition: "all 0.2s", textAlign: "center" }}>
                {city.name}
              </Link>
            ))}
          </div>
          <p style={{ color: "#565656", fontSize: "0.8rem", marginTop: "1.75rem", textAlign: "center" }}>
            Don&apos;t see your city?{" "}
            <Link href="/contact" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Contact us
            </Link>{" "}
            — we likely cover it.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "2rem", textAlign: "center" }}>
            Ready to Experience the Difference?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", maxWidth: "22rem", margin: "0 auto" }} className="sm:flex-row">
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
              Book a Detail
            </Link>
            <a href="tel:+17816325193" style={{ width: "100%", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Call (781) 632-5193
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
