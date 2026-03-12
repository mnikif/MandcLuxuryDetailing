import Link from "next/link";

const services = [
  { num: "01", title: "Interior Detail", desc: "Deep vacuum, steam clean, leather conditioning, and odor elimination.", price: "From $139", duration: "2–3 hrs" },
  { num: "02", title: "Exterior Detail", desc: "Hand wash, clay bar, polish, and sealant for a mirror finish that lasts.", price: "From $69", duration: "1–2 hrs" },
  { num: "03", title: "Full Detail", desc: "Our complete inside-and-out transformation — interior and exterior done right.", price: "From $179", duration: "3–5 hrs" },
  { num: "04", title: "Exterior Wax", desc: "Add-on protective wax coat for enhanced shine and paint protection.", price: "+$50", duration: "30–45 min" },
];

const stats = [
  { value: "50+", label: "Cars Detailed" },
  { value: "5★", label: "Avg Rating" },
  { value: "100%", label: "Mobile" },
  { value: "1+", label: "Yrs in Business" },
];

const testimonials = [
  {
    name: "Janet Gargan",
    short: "The results went beyond what we hoped for.",
    text: "Thank you so much for your hard work, Matt. My son was thrilled with how clean his car looked after your outstanding detailing job. As an umpire, his equipment makes for a dirty car, but you made it spotless inside and out, even with all the gear. The results went beyond what we hoped for, and we couldn't be happier with the service.",
  },
  {
    name: "Deanna LeClerc",
    short: "My car looks brand new.",
    text: "Matt was great to work with — he got back to me almost immediately. His price is super reasonable especially for the results I got, my car looks brand new.",
  },
  {
    name: "John Stalker",
    short: "The work was great, the price was fair.",
    text: "Quick to respond, very personable, appointment booked amazingly fast. The work was great, the price was fair. Won't hesitate to have them come back.",
  },
  {
    name: "Vic P.",
    short: "Probably the cleanest I've ever seen it.",
    text: "Was on time and did an amazing job. My car is spotless and probably the cleanest I have ever seen it. Highly recommend! The best part is he comes right to you!",
  },
];

const areas = ["Beverly", "Danvers", "Salem", "Peabody", "Gloucester", "Manchester", "Marblehead", "Swampscott", "Hamilton", "Wenham", "Lynn"];

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-bg relative overflow-hidden" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        {/* Ghost watermark */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "hidden" }}>
          <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(14rem,45vw,52rem)", color: "#c9a84c", opacity: 0.022, lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none" }}>MC</span>
        </div>

        {/* Gold glow */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.055) 0%, transparent 70%)" }} />

        {/* Content */}
        <div style={{ ...wrap, position: "relative", zIndex: 10, paddingTop: "7rem", paddingBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

          {/* Badge */}
          <div className="anim-up d0" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.3)", padding: "0.375rem 1rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", color: "#c9a84c", textTransform: "uppercase" }}>
            <span style={{ display: "inline-block", width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "#c9a84c", animation: "pulse 2s infinite" }} />
            Northshore Massachusetts &nbsp;·&nbsp; Mobile Service
          </div>

          {/* Headline */}
          <h1 className="anim-up d1 font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3.5rem,14vw,9rem)", lineHeight: 0.92, color: "#f2ede4", marginBottom: "0.1em", textAlign: "center", width: "100%" }}>
            Your Car
          </h1>
          <h1 className="anim-up d2 font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3.5rem,14vw,9rem)", lineHeight: 0.92, color: "#c9a84c", marginBottom: "1.2rem", textAlign: "center", width: "100%" }}>
            Deserves More.
          </h1>

          {/* Subtext */}
          <p className="anim-up d3" style={{ color: "#7a7a7a", fontSize: "clamp(0.95rem,2.2vw,1.1rem)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "32rem", textAlign: "center" }}>
            Premium mobile detailing that comes to you — showroom-quality results right in your driveway.
          </p>

          {/* CTAs */}
          <div className="anim-up d4" style={{ width: "100%", maxWidth: "22rem", display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center", margin: "0 auto" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "58px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}>
              Book Now — It&apos;s Free to Quote
            </Link>
            <div style={{ width: "100%", display: "flex", gap: "0.75rem" }}>
              <a href="tel:+17816325193" style={{ flex: 1, height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.35)", color: "#c9a84c", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
                📞 (781) 632-5193
              </a>
              <Link href="/gallery" style={{ flex: 1, height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Our Work
              </Link>
            </div>
          </div>

          {/* Areas */}
          <p className="anim-up d5" style={{ marginTop: "2rem", color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", textAlign: "center" }}>
            Beverly · Danvers · Salem · Peabody · Gloucester &amp; more
          </p>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}>
          <span style={{ color: "#3a3a3a", fontSize: "0.55rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
          <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}>
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.27), transparent)" }} />
        <div className="marquee-wrap" style={{ padding: "0.875rem 0" }}>
          <div className="marquee-track" aria-hidden="true">
            {[...areas, ...areas].map((a, i) => (
              <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", padding: "0 2rem", whiteSpace: "nowrap", opacity: 0.7 }}>
                {a}<span style={{ marginLeft: "2rem", opacity: 0.35 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.27), transparent)" }} />
      </div>

      {/* ── STATS ── */}
      <section style={{ background: "#060606", padding: "3.5rem 0" }}>
        <div style={wrap}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1.5rem 0", borderRight: i < stats.length - 1 ? "1px solid #1c1c1c" : "none", borderBottom: i < 2 ? "1px solid #1c1c1c" : "none" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2.2rem,7vw,3.5rem)", color: "#c9a84c", lineHeight: 1, marginBottom: "0.4rem" }}>
                  {s.value}
                </div>
                <div style={{ color: "#5a5a5a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Our Services
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
            {services.map((s) => (
              <div key={s.num} style={{ background: "#060606", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2.5rem 1.5rem" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2.2rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "0.75rem" }}>
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.4rem", color: "#f2ede4", marginBottom: "0.5rem", textAlign: "center" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1.5rem", textAlign: "center" }}>
                  {s.desc}
                </p>
                <div style={{ marginTop: "auto", textAlign: "center" }}>
                  <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#c9a84c", lineHeight: 1, marginBottom: "0.25rem" }}>
                    {s.price}
                  </div>
                  <div style={{ color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {s.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
            <Link href="/contact" className="btn-gold" style={{ height: "52px", padding: "0 2.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontFamily: "var(--font-mono)" }}>
              Book a Service
            </Link>
            <Link href="/services" style={{ color: "#c9a84c", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid rgba(201,168,76,0.4)" }}>
              Full Pricing &amp; Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY MC ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}>
              We Come to You
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { n: "I",   title: "Convenient",  desc: "Book online, we show up fully equipped. Save hours — we do the work while you do yours." },
              { n: "II",  title: "Professional", desc: "Matt uses professional-grade products and techniques — not store-shelf stuff." },
              { n: "III", title: "Guaranteed",   desc: "Not satisfied? We'll come back and make it right. Your satisfaction is the standard." },
            ].map((item, i) => (
              <div key={item.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid #1c1c1c", borderLeft: i > 0 ? "1px solid #1c1c1c" : "none" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "3rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "1rem" }}>
                  {item.n}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.4rem", color: "#f2ede4", marginBottom: "0.75rem", textAlign: "center" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.875rem", lineHeight: 1.7, textAlign: "center" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Client Reviews
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}>
              Real Results
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          {/* Featured */}
          <div style={{ position: "relative", background: "#0a0a0a", border: "1px solid #1c1c1c", padding: "3rem 2rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="quote-mark" aria-hidden="true" style={{ position: "absolute", top: "0.75rem", left: "1.5rem" }}>&#8220;</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "1.25rem", position: "relative", zIndex: 10 }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c" }}>★</span>)}
            </div>
            <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "clamp(1.1rem,2.8vw,1.35rem)", color: "#f2ede4", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "38rem", textAlign: "center", position: "relative", zIndex: 10 }}>
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", position: "relative", zIndex: 10 }}>
              <div style={{ width: "1.5rem", height: "1px", background: "#c9a84c" }} />
              <span style={{ color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
                {testimonials[0].name}
              </span>
            </div>
          </div>

          {/* Other reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.slice(1).map((t) => (
              <div key={t.name} style={{ background: "#060606", border: "1px solid #1c1c1c", padding: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.125rem", marginBottom: "0.75rem" }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "0.7rem" }}>★</span>)}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] italic" style={{ color: "#a8a8a8", fontSize: "1rem", lineHeight: 1.55, marginBottom: "1rem", textAlign: "center" }}>
                  &ldquo;{t.short}&rdquo;
                </p>
                <div style={{ color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>

          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Get Started Today
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2.2rem,8vw,5rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "0.15em", textAlign: "center" }}>
            Ready for a
          </h2>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2.2rem,8vw,5rem)", color: "#c9a84c", lineHeight: 0.95, marginBottom: "2rem", textAlign: "center" }}>
            Showroom Finish?
          </h2>

          <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto 2.5rem", textAlign: "center" }}>
            Serving Beverly, Danvers, Salem, Peabody, Manchester, Gloucester, and the entire North Shore, MA.
          </p>

          <a href="tel:+17816325193" className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,7vw,4rem)", color: "#f2ede4", lineHeight: 1, letterSpacing: "-0.02em", display: "block", marginBottom: "2rem", textAlign: "center" }}>
            (781) 632-5193
          </a>

          <div className="flex flex-col sm:flex-row gap-3" style={{ alignItems: "center", justifyContent: "center", maxWidth: "22rem", margin: "0 auto" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontFamily: "var(--font-mono)" }}>
              Get a Free Quote
            </Link>
            <a href="tel:+17816325193" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.68rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
