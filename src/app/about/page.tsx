import Link from "next/link";

export const metadata = {
  title: "About | M&C Luxury Detailing",
  description: "Meet Matt — the founder of M&C Luxury Detailing in Danvers, MA.",
};

const values = [
  { title: "Fully Mobile", desc: "We bring everything — water, power, professional products — right to your driveway." },
  { title: "Premium Products", desc: "Industry-leading brands only. No shortcuts on the products touching your paint." },
  { title: "North Shore Local", desc: "Danvers-born, locally owned. We care deeply about our community and reputation." },
  { title: "Detail-Obsessed", desc: "We check our work twice. Then again. Perfectionists about every panel and surface." },
];

const cities = [
  "Beverly", "Danvers", "Salem", "Peabody", "Manchester-by-the-Sea",
  "Gloucester", "Marblehead", "Swampscott", "Lynn", "Hamilton", "Wenham",
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
      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Meet Matt
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
        </div>
      </section>

      {/* ── Founder Story ── */}
      <section style={{ background: "#060606", padding: "4rem 0" }}>
        <div style={wrap}>

          {/* Story text */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
              The Founder
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "#f2ede4", lineHeight: 1.1, marginBottom: "1.75rem", textAlign: "center" }}>
              Matt —<br />
              <span style={{ color: "#c9a84c" }}>Built for the North Shore</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}>
              <p>
                M&amp;C Luxury Detailing started the way most good things do — a guy from Danvers who cared too much about clean cars and figured he could do it better than anyone else.
              </p>
              <p>
                Matt grew up on the North Shore, detailing cars out of driveways on weekends. What started as a side hustle turned into something real when clients kept coming back — and kept sending their friends.
              </p>
              <p>
                He went mobile because it made sense: why make someone drive to him when he can bring everything they need right to their door? Professional-grade equipment, proper technique, and one standard — do the job so well that every client brags about it.
              </p>
              <p>
                Today he details vehicles across Beverly, Danvers, Salem, Peabody, and the rest of the North Shore. Every car still gets treated like his own.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem", maxWidth: "36rem", margin: "0 auto" }}>

            {/* Matt card */}
            <div style={{ background: "#0a0a0a", border: "1px solid #1c1c1c", padding: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#c9a84c" }}>M</span>
              </div>
              <div style={{ color: "#f2ede4", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.25rem" }}>Matt</div>
              <div style={{ color: "#c9a84c", fontSize: "0.55rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Founder</div>
              <p style={{ color: "#5a5a5a", fontSize: "0.82rem", lineHeight: 1.65, textAlign: "center" }}>
                Handles interior and exterior detailing with an obsessive eye for detail. A perfectionist about every panel — if there&apos;s a swirl mark, he&apos;ll find it and fix it.
              </p>
            </div>

            {/* Featured review */}
            <div style={{ background: "#0a0a0a", border: "1px solid #1c1c1c", padding: "1.75rem", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: "#c9a84c", opacity: 0.15, lineHeight: 0.8, position: "absolute", top: "0.75rem", left: "1.25rem" }}>&ldquo;</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginBottom: "0.75rem", position: "relative", zIndex: 10 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "0.7rem" }}>★</span>)}
              </div>
              <p className="font-[family-name:var(--font-cormorant)] italic" style={{ color: "#a8a8a8", fontSize: "1rem", lineHeight: 1.55, marginBottom: "1rem", position: "relative", zIndex: 10, textAlign: "center" }}>
                &ldquo;The results went beyond what we hoped for. We couldn&apos;t be happier with the service.&rdquo;
              </p>
              <div style={{ color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
                — Janet G., Danvers, MA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem", textAlign: "center" }}>
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
                <p style={{ color: "#5a5a5a", fontSize: "0.84rem", lineHeight: 1.7, textAlign: "center" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem", textAlign: "center" }}>
            Coverage
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "2.5rem", textAlign: "center" }}>
            The Entire North Shore
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.625rem" }}>
            {cities.map((city) => (
              <span key={city} className="hover:border-[#c9a84c]/40 hover:text-[#c9a84c]" style={{ border: "1px solid #1c1c1c", color: "#5a5a5a", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.5rem 0.875rem", transition: "all 0.2s", textAlign: "center" }}>
                {city}
              </span>
            ))}
          </div>
          <p style={{ color: "#3a3a3a", fontSize: "0.8rem", marginTop: "1.75rem", textAlign: "center" }}>
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
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "var(--font-mono)" }}>
              Book a Detail
            </Link>
            <a href="tel:+17816325193" style={{ width: "100%", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Call (781) 632-5193
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
