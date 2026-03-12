const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export const metadata = {
  title: "Gallery | M&C Luxury Detailing",
  description: "Before and after photos from M&C Luxury Detailing — mobile car detailing in Danvers, MA.",
};

const items = [
  { id: 1, label: "Black BMW 3-Series",     category: "Full Detail",      catColor: "#c9a84c" },
  { id: 2, label: "White Mercedes E-Class", category: "Exterior Detail",  catColor: "#7eb8f7" },
  { id: 3, label: "Grey Audi A4",           category: "Interior Detail",  catColor: "#6ee7b7" },
  { id: 4, label: "Navy Porsche 911",       category: "Full Detail",      catColor: "#c9a84c" },
  { id: 5, label: "Red Corvette C7",        category: "Exterior Detail",  catColor: "#7eb8f7" },
  { id: 6, label: "Black RAM 1500",         category: "Interior Detail",  catColor: "#6ee7b7" },
  { id: 7, label: "Silver Tesla Model 3",   category: "Full Detail",      catColor: "#c9a84c" },
  { id: 8, label: "White Mercedes G-Wagon", category: "Exterior Detail",  catColor: "#7eb8f7" },
  { id: 9, label: "Blue BMW M4",            category: "Full Detail",      catColor: "#c9a84c" },
];

export default function Gallery() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
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

      {/* ── Grid ── */}
      <section style={{ background: "#060606", padding: "3rem 0 5rem" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {items.map((item) => (
              <div key={item.id} style={{ background: "#060606" }}>

                {/* Before / After panels */}
                <div className="grid grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", background: "#080808", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ position: "absolute", top: "0.5rem", left: "0.5rem", color: "#3a3a3a", fontSize: "0.48rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Before</span>
                    <span style={{ color: "#1c1c1c", fontSize: "2.5rem" }}>◻</span>
                    <span style={{ color: "#1c1c1c", fontSize: "0.48rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.5rem", textAlign: "center" }}>Coming soon</span>
                  </div>
                  <div style={{ position: "relative", aspectRatio: "4/3", background: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ position: "absolute", top: "0.5rem", right: "0.5rem", color: "#c9a84c", fontSize: "0.48rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>After</span>
                    <span style={{ color: "rgba(201,168,76,0.12)", fontSize: "2.5rem" }}>◼</span>
                    <span style={{ color: "#2a2a2a", fontSize: "0.48rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.5rem", textAlign: "center" }}>Coming soon</span>
                  </div>
                </div>

                {/* Card footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1rem", borderTop: "1px solid #1c1c1c" }}>
                  <span style={{ color: "#a8a8a8", fontSize: "0.78rem", textAlign: "center" }}>{item.label}</span>
                  <span style={{ color: item.catColor, fontSize: "0.48rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", border: `1px solid ${item.catColor}30`, background: `${item.catColor}08`, padding: "0.25rem 0.6rem", whiteSpace: "nowrap" }}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Photo upload note */}
          <div style={{ marginTop: "3rem", textAlign: "center", padding: "2rem", border: "1px solid #1c1c1c", background: "#0a0a0a" }}>
            <div className="gold-rule" style={{ width: "3rem", margin: "0 auto 1.25rem" }} />
            <p style={{ color: "#a8a8a8", fontSize: "0.84rem", marginBottom: "0.5rem", textAlign: "center" }}>Adding Your Photos</p>
            <p style={{ color: "#3a3a3a", fontSize: "0.78rem", lineHeight: 1.7, textAlign: "center" }}>
              Drop before/after images into{" "}
              <code style={{ color: "#c9a84c", fontSize: "0.72rem", background: "#060606", padding: "1px 6px" }}>/public/gallery/</code>{" "}
              and replace the placeholder divs with{" "}
              <code style={{ color: "#c9a84c", fontSize: "0.72rem", background: "#060606", padding: "1px 6px" }}>{"<Image />"}</code>{" "}
              components.
            </p>
          </div>
        </div>
      </section>

      {/* ── Instagram CTA ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            Follow Along
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem", textAlign: "center" }}>
            See More on Instagram
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: "0.85rem", marginBottom: "2rem", textAlign: "center" }}>
            Daily work, before &amp; afters, and behind the scenes.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://instagram.com/mcluxurydetailing" target="_blank" rel="noopener noreferrer" className="hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c", height: "48px", padding: "0 2rem", fontSize: "0.62rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", transition: "all 0.3s" }}>
              @mcluxurydetailing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
