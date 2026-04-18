import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monthly Car Detailing Membership — North Shore MA | M&C",
  description:
    "Keep your car looking its best year-round. M&C monthly maintenance plans starting at $90/month — we come to you every month, fully equipped. North Shore MA.",
  alternates: {
    canonical: "https://www.mandcluxurydetailing.com/maintenance",
  },
};

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

const plans = [
  {
    name: "Essential",
    price: "$90",
    period: "/month",
    duration: "1–1.5 hrs",
    tagline: "Clean car, every month — no effort required.",
    features: [
      "Hand wash & dry",
      "Wheel & tire scrub + tire dressing",
      "Exterior window cleaning",
      "Full vacuum — seats, floors, trunk",
      "Dashboard & console wipe-down",
      "Door panel wipe",
      "Interior window cleaning",
      "Air freshener",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$120",
    period: "/month",
    duration: "1.5–2 hrs",
    tagline: "The full treatment, on a schedule.",
    features: [
      "Everything in Essential",
      "Steam clean — high-touch surfaces",
      "Leather & vinyl conditioning",
      "Cup holder & vent detail",
      "Exterior wax protectant",
      "Tire dressing & trim wipe",
    ],
    popular: true,
  },
];

export default function Maintenance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Monthly Car Detailing Membership",
            "provider": {
              "@type": "AutomotiveBusiness",
              "name": "M&C Luxury Detailing",
              "url": "https://www.mandcluxurydetailing.com",
              "telephone": "+17816325193",
            },
            "description":
              "Monthly mobile car detailing membership. We come to your driveway every month — full inside-and-out quick detail. Two tiers starting at $90/month.",
            "areaServed": "North Shore, Massachusetts",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Monthly Detailing Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Essential Monthly Plan",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "90",
                    "priceCurrency": "USD",
                    "unitText": "month",
                  },
                },
                {
                  "@type": "Offer",
                  "name": "Premium Monthly Plan",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "120",
                    "priceCurrency": "USD",
                    "unitText": "month",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section
        className="hero-bg"
        style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}
      >
        <div style={wrap}>
          <p
            style={{
              color: "#c9a84c",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Monthly Membership
          </p>
          <h1
            className="font-[family-name:var(--font-cormorant)] italic font-bold"
            style={{
              fontSize: "clamp(3rem,10vw,6rem)",
              color: "#f2ede4",
              lineHeight: 0.95,
              marginBottom: "0.2em",
              textAlign: "center",
            }}
          >
            Always Clean.
          </h1>
          <h2
            className="font-[family-name:var(--font-cormorant)] italic font-bold"
            style={{
              fontSize: "clamp(1.6rem,5vw,2.8rem)",
              color: "#c9a84c",
              lineHeight: 1,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Never Think About It.
          </h2>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p
            style={{
              color: "#5a5a5a",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: "34rem",
              margin: "0 auto 2rem",
              textAlign: "center",
            }}
          >
            We show up to your driveway every month — fully equipped, ready to work. Pick a plan,
            lock in your slot, and let your car stay showroom-ready year-round.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn-gold"
              style={{
                height: "52px",
                padding: "0 2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.18em",
              }}
            >
              Start My Membership
            </Link>
            <a
              href="tel:+17816325193"
              className="btn-ghost"
              style={{
                height: "52px",
                padding: "0 2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#c9a84c",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.15em",
              }}
            >
              (781) 632-5193
            </a>
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section
        style={{ background: "#060606", padding: "5rem 0", borderBottom: "1px solid #1c1c1c" }}
      >
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Choose Your Plan
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] italic font-bold"
              style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}
            >
              Monthly Plans
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: "1px", background: "#1c1c1c", maxWidth: "40rem", margin: "0 auto" }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  position: "relative",
                  background: plan.popular ? "#090909" : "#060606",
                  display: "flex",
                  flexDirection: "column",
                  ...(plan.popular
                    ? { boxShadow: "inset 0 0 80px rgba(201,168,76,0.03)" }
                    : {}),
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    height: "3px",
                    background: plan.popular ? "#c9a84c" : "rgba(201,168,76,0.25)",
                    flexShrink: 0,
                  }}
                />

                {/* Popular badge */}
                {plan.popular && (
                  <div
                    style={{
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
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  style={{
                    padding: "2rem 1.75rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Plan name */}
                  <p
                    style={{
                      color: plan.popular ? "#c9a84c" : "rgba(201,168,76,0.4)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "0.2rem" }}>
                    <span
                      className="font-[family-name:var(--font-cormorant)] italic font-bold"
                      style={{ fontSize: "2.8rem", color: "#f2ede4", lineHeight: 1 }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        color: "#3a3a3a",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <div
                    style={{
                      color: "#3a3a3a",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {plan.duration}
                  </div>

                  <p
                    style={{
                      color: "#5a5a5a",
                      fontSize: "0.8rem",
                      lineHeight: 1.55,
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    {plan.tagline}
                  </p>

                  <div
                    style={{
                      height: "1px",
                      background: "#1c1c1c",
                      width: "100%",
                      marginBottom: "1.5rem",
                    }}
                  />

                  {/* Features */}
                  <ul
                    style={{
                      flex: 1,
                      width: "100%",
                      marginBottom: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: "0.6rem",
                          color: "#5a5a5a",
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            color: plan.popular ? "#c9a84c" : "rgba(201,168,76,0.4)",
                            flexShrink: 0,
                            marginTop: "2px",
                            fontSize: "0.75rem",
                          }}
                        >
                          ✦
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={plan.popular ? "btn-gold" : "btn-ghost"}
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
                      ...(!plan.popular ? { border: "1px solid #282828", color: "#a8a8a8" } : {}),
                    }}
                  >
                    Get Started
                  </Link>

                  {plan.popular && (
                    <p
                      style={{
                        color: "#c9a84c",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.15em",
                        textAlign: "center",
                        marginTop: "0.625rem",
                      }}
                    >
                      ★★★★★ <span style={{ color: "#3a3a3a" }}>on Google</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              color: "#3a3a3a",
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.1em",
              textAlign: "center",
              marginTop: "1.75rem",
            }}
          >
            Cancel anytime · No contracts · Slots are limited
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Simple Process
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] italic font-bold"
              style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}
            >
              How It Works
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                n: "I",
                title: "Pick Your Plan",
                desc: "Choose Essential at $90 or Premium at $120. Reach out and we'll lock in a recurring monthly slot that works for you.",
              },
              {
                n: "II",
                title: "We Show Up",
                desc: "Every month, on your scheduled day, we arrive at your driveway fully equipped — water, power, professional products.",
              },
              {
                n: "III",
                title: "Drive It Clean",
                desc: "Walk out to a spotless car, every single month. No drop-offs, no scheduling headaches, no effort on your end.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={i > 0 ? "md-border-l" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2rem 1.5rem",
                  borderTop: "1px solid #1c1c1c",
                }}
              >
                <div
                  className="font-[family-name:var(--font-cormorant)] italic font-bold"
                  style={{
                    fontSize: "3rem",
                    color: "#c9a84c",
                    opacity: 0.2,
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {item.n}
                </div>
                <h3
                  className="font-[family-name:var(--font-cormorant)] italic font-bold"
                  style={{ fontSize: "1.4rem", color: "#f2ede4", marginBottom: "0.75rem" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Membership ── */}
      <section
        style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}
      >
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              Why Subscribe
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] italic font-bold"
              style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}
            >
              Built for People Who Value Their Time
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "38rem",
              margin: "0 auto",
            }}
          >
            {[
              {
                q: "Why monthly instead of whenever I remember?",
                a: "Because 'whenever I remember' becomes never. A scheduled monthly visit means your car never gets to the point where it needs a full deep clean — you maintain the standard instead of chasing it.",
              },
              {
                q: "Is this cheaper than booking one-off details?",
                a: "Yes. A one-off full detail starts at $189. A monthly membership at $90–$120 keeps your car at that level consistently, for less per visit — and we prioritize members when scheduling.",
              },
              {
                q: "What if I need to skip a month?",
                a: "Just let us know ahead of time. We're flexible. No fees for occasional skips — we treat members like real people, not contracts.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #1c1c1c",
                  padding: "2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  textAlign: "left",
                }}
              >
                <h3
                  className="font-[family-name:var(--font-cormorant)] italic font-bold"
                  style={{
                    fontSize: "clamp(1.05rem,2.8vw,1.3rem)",
                    color: "#c9a84c",
                    lineHeight: 1.3,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.88rem", lineHeight: 1.8 }}>
                  {item.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #1c1c1c" }} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <p
            style={{
              color: "#c9a84c",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Get Started
          </p>
          <h2
            className="font-[family-name:var(--font-cormorant)] italic font-bold"
            style={{
              fontSize: "clamp(2.2rem,8vw,5rem)",
              color: "#f2ede4",
              lineHeight: 0.95,
              marginBottom: "0.15em",
            }}
          >
            Lock In Your Slot
          </h2>
          <h2
            className="font-[family-name:var(--font-cormorant)] italic font-bold"
            style={{
              fontSize: "clamp(2.2rem,8vw,5rem)",
              color: "#c9a84c",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            Before It&apos;s Gone.
          </h2>
          <p
            style={{
              color: "#5a5a5a",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: "28rem",
              margin: "0 auto 2.5rem",
            }}
          >
            Monthly slots are limited. Serving Beverly, Danvers, Salem, Peabody, and all of North
            Shore MA.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{ alignItems: "center", justifyContent: "center", maxWidth: "22rem", margin: "0 auto" }}
          >
            <Link
              href="/contact"
              className="btn-gold"
              style={{
                width: "100%",
                height: "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              Start My Membership
            </Link>
            <a
              href="tel:+17816325193"
              className="btn-ghost"
              style={{
                width: "100%",
                height: "54px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #282828",
                color: "#a8a8a8",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
