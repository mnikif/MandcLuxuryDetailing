import Link from "next/link";

const packages = [
  {
    num: "01",
    name: "Interior Detail",
    price: "Starting at $169",
    duration: "2–3 hrs",
    popular: false,
    features: [
      "Deep vacuum — seats, floors, trunk",
      "Dashboard & console wipe-down",
      "Door panel cleaning",
      "Window clean (interior)",
      "Steam clean (high-touch areas)",
      "Leather conditioning",
      "Air freshener",
    ],
  },
  {
    num: "02",
    name: "Exterior Detail",
    price: "Starting at $99",
    duration: "1–2 hrs",
    popular: false,
    features: [
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Window clean (exterior)",
      "Tire dressing",
      "Clay bar treatment",
    ],
  },
  {
    num: "03",
    name: "Full Detail",
    price: "Starting at $229",
    duration: "3–5 hrs",
    popular: true,
    features: [
      "Everything in Interior Detail",
      "Everything in Exterior Detail",
      "Leather conditioning",
      "Engine bay wipe-down",
    ],
  },
  {
    num: "04",
    name: "Exterior Wax",
    price: "+$50 add-on",
    duration: "30–45 min",
    popular: false,
    features: [
      "Applied after Exterior or Full Detail",
      "Protective wax coat",
      "Enhanced gloss & shine",
      "Paint protection layer",
    ],
  },
];

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export default function Services() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            What We Offer
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Services &amp; Pricing
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#5a5a5a", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto", textAlign: "center" }}>
            Transparent pricing, no surprises. All services are mobile — we come to your location across the North Shore.
          </p>
        </div>
      </section>

      {/* ── Packages ── */}
      <section style={{ background: "#060606", padding: "4rem 0" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
            {packages.map((pkg) => (
              <div key={pkg.num} style={{ position: "relative", background: "#060606", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

                {pkg.popular && (
                  <div style={{ position: "absolute", top: 0, right: 0, background: "#c9a84c", color: "#000", fontSize: "0.5rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.3rem 0.8rem", fontWeight: 700 }}>
                    Most Popular
                  </div>
                )}

                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "3rem", color: "#c9a84c", opacity: pkg.popular ? 0.35 : 0.15, lineHeight: 1, marginBottom: "0.5rem", textAlign: "center" }}>
                  {pkg.num}
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#f2ede4", lineHeight: 1, marginBottom: "0.4rem", textAlign: "center" }}>
                  {pkg.name}
                </h3>

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.2rem", color: "#c9a84c" }}>
                    {pkg.price}
                  </span>
                  <span style={{ color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
                    {pkg.duration}
                  </span>
                </div>

                <div style={{ height: "1px", background: "#1c1c1c", width: "100%", marginBottom: "1.25rem" }} />

                <ul style={{ flex: 1, width: "100%", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "0.75rem", color: "#5a5a5a", fontSize: "0.82rem", lineHeight: 1.5, textAlign: "center" }}>
                      <span style={{ color: "#c9a84c", flexShrink: 0, marginTop: "1px", fontSize: "0.6rem" }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={pkg.popular ? "btn-gold" : ""}
                  style={{ width: "100%", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.62rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", ...(pkg.popular ? {} : { border: "1px solid #282828", color: "#a8a8a8" }) }}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "2.5rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#5a5a5a", fontSize: "0.84rem", lineHeight: 1.7, textAlign: "center" }}>
            <span style={{ color: "#c9a84c" }}>Pricing note:</span> All prices are starting rates. Final pricing depends on vehicle size and condition. Trucks, SUVs, and heavily soiled vehicles may incur additional charges.{" "}
            <Link href="/contact" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem", textAlign: "center" }}>
            Not Sure Which Package?
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem", textAlign: "center" }}>
            Reach out and we&apos;ll recommend the right service for your vehicle and budget.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/contact" className="btn-gold" style={{ height: "52px", padding: "0 2.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "var(--font-mono)" }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
