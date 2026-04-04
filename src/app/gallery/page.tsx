import type { Metadata } from "next";
import Image from "next/image";

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export const metadata: Metadata = {
  title: { absolute: 'Before & After Gallery — Mobile Car Detailing North Shore MA | M&C' },
  description: "See real before and after results from M&C Luxury Detailing. Mobile car detailing transformations in Danvers, Beverly, Salem & across North Shore MA.",
  alternates: {
    canonical: "https://www.mandcluxurydetailing.com/gallery",
  },
};

const pairs = [
  { label: "Honda Civic full detail — before and after mobile detailing in Beverly, MA", before: "/civic before.jpg", after: "/civic after.jpg" },
  { label: "Honda Pilot interior and exterior detail — North Shore Massachusetts", before: "/honda before.jpg", after: "/honda after.jpg" },
  { label: "Toyota RAV4 full detail — mobile car detailing in Danvers, MA", before: "/rav4 before.jpg",  after: "/rav4 after.jpg"  },
];

const singles: { src: string; label: string; video?: boolean; objectPosition?: string }[] = [
  { src: "/Before After Left.jpeg", label: "Car interior before professional detailing — North Shore MA", objectPosition: "center 20%" },
  { src: "/Before After Right.jpeg", label: "Car interior after professional detailing — M&C Luxury Detailing, Danvers MA", objectPosition: "center 20%" },
  { src: "/camaro soap.jpg", label: "Camaro during exterior hand wash detail in Salem, MA" },
  { src: "/red car shine.jpg", label: "Classic car exterior shine after full detail on the North Shore of Massachusetts" },
  { src: "/washing.mp4", label: "Mobile car detailing hand wash in progress — North Shore MA", video: true },
  { src: "/mirror.mp4", label: "Mirror-finish paint after exterior detail — M&C Luxury Detailing", video: true },
  { src: "/working.jpg", label: "M&C detailer performing exterior car detail in Danvers, MA" },
  { src: "/dodge.jpg", label: "Dodge after professional wash and wax — mobile detailing North Shore Massachusetts" },
];

export default function Gallery() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "M&C Luxury Detailing",
            "url": "https://www.mandcluxurydetailing.com/gallery",
            "telephone": "+17816325193",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US",
            },
            "image": [
              "https://www.mandcluxurydetailing.com/civic%20after.jpg",
              "https://www.mandcluxurydetailing.com/honda%20after.jpg",
              "https://www.mandcluxurydetailing.com/rav4%20after.jpg",
              "https://www.mandcluxurydetailing.com/red%20car%20shine.jpg",
            ],
            "description": "Before and after gallery of professional mobile car detailing results by M&C Luxury Detailing — serving Danvers, Beverly, Salem, and all of North Shore Massachusetts.",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Our Work
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Before &amp; After
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#5a5a5a", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "28rem", margin: "0 auto", textAlign: "center" }}>
            Every vehicle transformed. Results speak louder than words.
          </p>
        </div>
      </section>

      {/* ── Before / After Pairs ── */}
      <section style={{ background: "#060606", padding: "3rem 0 2rem" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {pairs.map((pair) => (
              <div key={pair.label} style={{ background: "#060606" }}>
                <div className="grid grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", background: "#080808" }}>
                    <span style={{ position: "absolute", top: "0.5rem", left: "0.5rem", zIndex: 10, color: "#f2ede4", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(0,0,0,0.6)", padding: "2px 6px" }}>Before</span>
                    <Image src={pair.before} alt={`${pair.label} before`} fill quality={100} style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "relative", aspectRatio: "4/3", background: "#0a0a0a" }}>
                    <span style={{ position: "absolute", top: "0.5rem", right: "0.5rem", zIndex: 10, color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", background: "rgba(0,0,0,0.6)", padding: "2px 6px" }}>After</span>
                    <Image src={pair.after} alt={`${pair.label} after`} fill quality={100} style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #1c1c1c" }}>
                  <span style={{ color: "#a8a8a8", fontSize: "0.78rem" }}>{pair.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Single Photos ── */}
      <section style={{ background: "#060606", padding: "2rem 0 5rem" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {singles.map((photo) => (
              <div key={photo.src} style={{ background: "#060606" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", background: "#080808", overflow: "hidden" }}>
                  {photo.video ? (
                    <video autoPlay loop muted playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
                      <source src={photo.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={photo.src} alt={photo.label} fill quality={100} style={{ objectFit: "cover", objectPosition: photo.objectPosition ?? "center" }} />
                  )}
                </div>
                <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #1c1c1c" }}>
                  <span style={{ color: "#a8a8a8", fontSize: "0.78rem" }}>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            Follow Along
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem", textAlign: "center" }}>
            See More on Instagram
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: "0.85rem", marginBottom: "2rem", textAlign: "center" }}>
            Daily work, before &amp; afters, and behind the scenes.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://instagram.com/mcluxurydetailing" target="_blank" rel="noopener noreferrer" className="hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c", height: "48px", padding: "0 2rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", transition: "all 0.3s" }}>
              @mcluxurydetailing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
