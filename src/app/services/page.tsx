import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: 'Mobile Car Detailing Prices & Packages — North Shore MA | M&C' },
  description: 'Interior, exterior & full detail packages in Danvers, MA. Bronze, Silver & Gold tiers starting at $89. Transparent pricing — no hidden fees. Serving North Shore Massachusetts.',
  alternates: {
    canonical: 'https://www.mandcluxurydetailing.com/services',
  },
};

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

type PackageTier = {
  tier: "Bronze" | "Silver" | "Gold";
  price: string;
  salePrice?: string;
  duration: string;
  popular: boolean;
  features: string[];
};

const tierAccentBar: Record<string, string> = {
  Bronze: "rgba(201,168,76,0.25)",
  Silver: "rgba(201,168,76,0.55)",
  Gold: "#c9a84c",
};

const tierLabelColor: Record<string, string> = {
  Bronze: "rgba(201,168,76,0.4)",
  Silver: "rgba(201,168,76,0.7)",
  Gold: "#c9a84c",
};

const tierBulletColor: Record<string, string> = {
  Bronze: "rgba(201,168,76,0.4)",
  Silver: "rgba(201,168,76,0.65)",
  Gold: "#c9a84c",
};

const interiorTiers: PackageTier[] = [
  {
    tier: "Bronze",
    price: "$129",
    duration: "1–2 hrs",
    popular: false,
    features: [
      "Full vacuum — seats, floors, trunk",
      "Dashboard & console wipe-down",
      "Door panel wipe",
      "Interior window cleaning",
      "Air freshener",
    ],
  },
  {
    tier: "Silver",
    price: "$169",
    salePrice: "$144",
    duration: "2–3 hrs",
    popular: true,
    features: [
      "Everything in Bronze",
      "Steam clean — high-touch surfaces",
      "Leather & vinyl conditioning",
      "Center console deep clean",
      "Cup holder & vent cleaning",
    ],
  },
  {
    tier: "Gold",
    price: "$219",
    duration: "5–6 hrs",
    popular: false,
    features: [
      "Everything in Silver",
      "Carpet & floor mat shampoo",
      "Seat shampoo or deep leather clean",
      "Headliner wipe-down",
      "Trunk detail & deodorize",
    ],
  },
];

const exteriorTiers: PackageTier[] = [
  {
    tier: "Bronze",
    price: "$89",
    duration: "1 hr",
    popular: false,
    features: [
      "Hand wash & dry",
      "Wheel & tire scrub",
      "Tire dressing",
      "Exterior window cleaning",
    ],
  },
  {
    tier: "Silver",
    price: "$129",
    salePrice: "$110",
    duration: "1.5–2 hrs",
    popular: true,
    features: [
      "Everything in Bronze",
      "Clay bar treatment",
      "Trim dressing & restoration",
      "Door jamb wipe",
      "Exterior wax protectant",
    ],
  },
  {
    tier: "Gold",
    price: "$169",
    duration: "2–2.5 hrs",
    popular: false,
    features: [
      "Everything in Silver",
      "Engine bay wipe-down",
      "Wheel well cleaning",
      "Exterior wax protectant",
    ],
  },
];

const fullTiers: PackageTier[] = [
  {
    tier: "Bronze",
    price: "$189",
    duration: "2.5–3.5 hrs",
    popular: false,
    features: [
      "Interior Bronze package included",
      "Exterior Bronze package included",
      "Full vacuum, wipe-down & windows",
      "Hand wash, wheels & tire dressing",
    ],
  },
  {
    tier: "Silver",
    price: "$269",
    salePrice: "$229",
    duration: "3.5–5 hrs",
    popular: true,
    features: [
      "Interior Silver package included",
      "Exterior Silver package included",
      "Steam clean & leather conditioning",
      "Clay bar & trim restoration",
      "Exterior wax protectant",
    ],
  },
  {
    tier: "Gold",
    price: "$359",
    duration: "5–7 hrs",
    popular: false,
    features: [
      "Interior Gold package included",
      "Exterior Gold package included",
      "Carpet & seat shampoo",
      "Engine bay wipe-down",
      "Exterior wax protectant",
    ],
  },
];

function SectionHeader({ eyebrow, heading, desc }: { eyebrow: string; heading: string; desc?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
        {heading}
      </h2>
      <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
      {desc && (
        <p style={{ color: "#7a7a7a", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "32rem", margin: "1.25rem auto 0" }}>
          {desc}
        </p>
      )}
    </div>
  );
}

function TierGrid({ tiers }: { tiers: PackageTier[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
      {tiers.map((pkg) => (
        <div
          key={pkg.tier}
          style={{
            position: "relative",
            background: pkg.tier === "Gold" ? "#090909" : "#060606",
            display: "flex",
            flexDirection: "column",
            ...(pkg.tier === "Gold" ? { boxShadow: "inset 0 0 80px rgba(201,168,76,0.03)" } : {}),
          }}
        >
          {/* Top accent bar */}
          <div style={{ height: "3px", background: tierAccentBar[pkg.tier], flexShrink: 0 }} />

          {/* Popular badge */}
          {pkg.popular && (
            <div style={{
              position: "absolute",
              top: "3px",
              right: 0,
              background: "#c9a84c",
              color: "#000",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.25rem 0.7rem",
              fontWeight: 700,
            }}>
              Most Popular
            </div>
          )}

          {/* Content */}
          <div style={{ padding: "2rem 1.75rem 2rem", display: "flex", flexDirection: "column", flex: 1, alignItems: "center", textAlign: "center" }}>

            {/* Tier label */}
            <p style={{
              color: tierLabelColor[pkg.tier],
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>
              {pkg.tier}
            </p>

            {/* Price */}
            {pkg.salePrice ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "-5px", marginBottom: "0.15rem", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.95rem", color: "#565656", fontFamily: "var(--font-mono)", textDecoration: "line-through" }}>{pkg.price}</span>
                  <span style={{ background: "#c9a84c", color: "#000", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", fontWeight: 700, padding: "0.15rem 0.4rem", textTransform: "uppercase" }}>15% OFF</span>
                </div>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2.2rem", color: "#c9a84c", lineHeight: 1, marginBottom: "0.3rem" }}>
                  {pkg.salePrice}
                </div>
              </>
            ) : (
              <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2.2rem", color: "#f2ede4", lineHeight: 1, marginBottom: "0.3rem", marginTop: "-5px" }}>
                {pkg.price}
              </div>
            )}
            <div style={{ color: "#565656", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              {pkg.duration}
            </div>

            <div style={{ height: "1px", background: "#1c1c1c", width: "100%", marginBottom: "1.5rem" }} />

            {/* Features */}
            <ul style={{ flex: 1, width: "100%", marginBottom: "1.75rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {pkg.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "0.625rem", color: "#7a7a7a", fontSize: "0.8rem", lineHeight: 1.5, textAlign: "center" }}>
                  <span style={{ color: tierBulletColor[pkg.tier], flexShrink: 0, marginTop: "2px", fontSize: "0.75rem" }}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Book button */}
            <Link
              href="/contact"
              className={pkg.tier === "Gold" ? "btn-gold" : "btn-ghost"}
              style={{
                width: "100%",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                ...(pkg.tier !== "Gold" ? { border: "1px solid #282828", color: "#a8a8a8" } : {}),
              }}
            >
              Book Now
            </Link>

            {pkg.popular && (
              <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textAlign: "center", marginTop: "0.625rem" }}>
                ★★★★★ <span style={{ color: "#565656" }}>on Google</span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "M&C Luxury Detailing",
            "url": "https://www.mandcluxurydetailing.com/services",
            "telephone": "+17816325193",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US",
            },
            "areaServed": ["Beverly", "Danvers", "Salem", "Peabody", "Gloucester", "Marblehead", "Manchester-by-the-Sea", "Swampscott", "Hamilton", "Wenham", "Lynn"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile Car Detailing Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Interior Detail — Bronze", "description": "Full vacuum, dashboard wipe-down, door panels, interior windows, air freshener." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "129", "priceCurrency": "USD", "minPrice": "129" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Interior Detail — Silver", "description": "Bronze package plus steam clean, leather conditioning, center console and vent deep clean." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "169", "priceCurrency": "USD", "minPrice": "169" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Interior Detail — Gold", "description": "Silver package plus carpet shampoo, seat shampoo, headliner wipe-down, trunk detail." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "219", "priceCurrency": "USD", "minPrice": "219" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Exterior Detail — Bronze", "description": "Hand wash, wheel and tire scrub, tire dressing, exterior window cleaning." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "89", "priceCurrency": "USD", "minPrice": "89" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Exterior Detail — Silver", "description": "Bronze package plus clay bar, trim dressing, door jamb wipe, exterior wax protectant." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "129", "priceCurrency": "USD", "minPrice": "129" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Exterior Detail — Gold", "description": "Silver package plus engine bay wipe-down, wheel well cleaning, exterior wax protectant." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "169", "priceCurrency": "USD", "minPrice": "169" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Full Detail — Bronze", "description": "Interior Bronze and Exterior Bronze combined — full vacuum, wipe-down, hand wash, wheels." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "189", "priceCurrency": "USD", "minPrice": "189" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Full Detail — Silver", "description": "Interior Silver and Exterior Silver combined with steam clean, conditioning, clay bar, and wax." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "269", "priceCurrency": "USD", "minPrice": "269" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Full Detail — Gold", "description": "Interior Gold and Exterior Gold combined with carpet shampoo, engine bay, and wax protectant." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "359", "priceCurrency": "USD", "minPrice": "359" },
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Pet Hair Removal", "description": "Thorough pet hair extraction from seats, carpets, and trunk using specialized tools." },
                  "priceSpecification": { "@type": "PriceSpecification", "price": "50", "priceCurrency": "USD", "minPrice": "50" },
                },
              ],
            },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            What We Offer
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Services &amp; Packages
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#7a7a7a", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 2rem", textAlign: "center" }}>
            Every detail, three tiers. Choose the level of care that fits your vehicle and budget — Bronze, Silver, or Gold.
          </p>

          {/* Quick nav */}
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { label: "Interior", href: "#interior" },
              { label: "Exterior", href: "#exterior" },
              { label: "Full Detail", href: "#full" },
              { label: "Add-Ons", href: "#addons" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#c9a84c",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  paddingBottom: "2px",
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interior ── */}
      <section
        id="interior"
        className="section-grid"
        style={{ background: "#060606", padding: "5rem 0", borderBottom: "1px solid #1c1c1c", scrollMarginTop: "5rem" }}
      >
        <div style={wrap}>
          <SectionHeader
            eyebrow="Interior Detail"
            heading="Interior Packages"
            desc="Deep, thorough interior care at every level — from a solid clean to a full-on transformation."
          />
          <TierGrid tiers={interiorTiers} />
        </div>
      </section>

      {/* ── Exterior ── */}
      <section
        id="exterior"
        style={{ background: "#0a0a0a", padding: "5rem 0", borderBottom: "1px solid #1c1c1c", scrollMarginTop: "5rem" }}
      >
        <div style={wrap}>
          <SectionHeader
            eyebrow="Exterior Detail"
            heading="Exterior Packages"
            desc="From a hand wash and shine to full clay bar, trim restoration, and wax protection."
          />
          <TierGrid tiers={exteriorTiers} />
        </div>
      </section>

      {/* ── Full Detail ── */}
      <section
        id="full"
        className="section-grid"
        style={{ background: "#060606", padding: "5rem 0", borderBottom: "1px solid #1c1c1c", scrollMarginTop: "5rem" }}
      >
        <div style={wrap}>
          <SectionHeader
            eyebrow="Full Detail"
            heading="Full Detail Packages"
            desc="The complete inside-and-out treatment. Three tiers, one appointment."
          />
          <TierGrid tiers={fullTiers} />
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section
        id="addons"
        style={{ background: "#0a0a0a", padding: "5rem 0", borderBottom: "1px solid #1c1c1c", scrollMarginTop: "5rem" }}
      >
        <div style={wrap}>
          <SectionHeader
            eyebrow="Enhancements"
            heading="Add-Ons"
            desc="Targeted treatments to pair with any interior or full detail package."
          />

          <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
            <div style={{ background: "#060606", border: "1px solid #1c1c1c", display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Gold top bar */}
              <div style={{ height: "3px", width: "100%", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

              <div style={{ padding: "2.5rem 2.25rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
                  Add-On Service
                </p>

                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.9rem", color: "#f2ede4", lineHeight: 1, marginBottom: "0.75rem" }}>
                  Pet Hair Removal
                </h3>

                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#c9a84c" }}>+$50</span>
                  <span style={{ color: "#565656", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>30–60 min</span>
                </div>

                <div style={{ height: "1px", background: "#1c1c1c", width: "100%", marginBottom: "1.5rem" }} />

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem", width: "100%" }}>
                  {[
                    "Thorough pet hair extraction",
                    "Specialized tools for embedded fur",
                    "Seats, carpets & trunk area",
                    "Pairs with any interior or full package",
                  ].map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", color: "#7a7a7a", fontSize: "0.82rem", lineHeight: 1.5 }}>
                      <span style={{ color: "#c9a84c", fontSize: "0.75rem", flexShrink: 0 }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="btn-gold"
                  style={{ width: "100%", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "2.5rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#7a7a7a", fontSize: "0.84rem", lineHeight: 1.7, textAlign: "center" }}>
            <span style={{ color: "#c9a84c" }}>Pricing note:</span> All prices are starting rates for standard sedans. Final pricing depends on vehicle size and condition. SUVs, trucks, and heavily soiled vehicles may incur additional charges.{" "}
            <Link href="/contact" style={{ color: "#c9a84c", textDecoration: "underline", textUnderlineOffset: "3px" }}>Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0 6rem" }}>
        <div style={wrap}>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem", textAlign: "center" }}>
            Not Sure Which Package?
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem", textAlign: "center" }}>
            Reach out and we&apos;ll recommend the right service for your vehicle and budget.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/contact" className="btn-gold" style={{ height: "52px", padding: "0 2.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Floating Silver Deal Banner ── */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#0a0a0a",
        borderTop: "1px solid #c9a84c",
        padding: "0.75rem 1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ background: "#c9a84c", color: "#000", fontSize: "0.65rem", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.15em", padding: "0.2rem 0.5rem", textTransform: "uppercase", flexShrink: 0 }}>
            15% OFF
          </span>
          <span style={{ color: "#f2ede4", fontSize: "0.8rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
            All Silver details — expires <strong style={{ color: "#c9a84c" }}>Sunday, Apr 27</strong>
          </span>
        </div>
        <Link
          href="/contact"
          style={{
            background: "#c9a84c",
            color: "#000",
            fontSize: "0.7rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "0.45rem 1.1rem",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          Claim Deal →
        </Link>
      </div>
    </>
  );
}
