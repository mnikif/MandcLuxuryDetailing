import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: 'Mobile Car Detailing in Danvers, MA',
  description: "Mobile car detailing in Danvers, MA — we come to you. Packages from $89. Serving Beverly, Salem, Peabody & all of North Shore Massachusetts. Free quotes.",
  alternates: {
    canonical: 'https://www.mandcluxurydetailing.com',
  },
};

const packageCategories = [
  {
    num: "01",
    title: "Interior Packages",
    desc: "From a thorough vacuum and wipe-down to a full shampoo and leather treatment. Three tiers of interior care.",
    tiers: "Bronze · Silver · Gold",
    href: "/services#interior",
  },
  {
    num: "02",
    title: "Exterior Packages",
    desc: "Hand wash and tire dressing to clay bar, trim restoration, and wax protection. Choose your level.",
    tiers: "Bronze · Silver · Gold",
    href: "/services#exterior",
  },
  {
    num: "03",
    title: "Full Detail Packages",
    desc: "Our complete inside-and-out transformation — interior and exterior combined at three tiers.",
    tiers: "Bronze · Silver · Gold",
    href: "/services#full",
  },
  {
    num: "04",
    title: "Add-Ons",
    desc: "Targeted enhancements to pair with any interior or full detail package.",
    tiers: "Pet Hair Removal",
    href: "/services#addons",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "M&C Luxury Detailing",
            "image": [
              "https://www.mandcluxurydetailing.com/Matt.PNG",
              "https://www.mandcluxurydetailing.com/Interior%20Example.JPG",
              "https://www.mandcluxurydetailing.com/red%20car%20shine.jpg",
              "https://www.mandcluxurydetailing.com/camaro%20soap.jpg"
            ],
            "@id": "https://www.mandcluxurydetailing.com",
            "url": "https://www.mandcluxurydetailing.com",
            "telephone": "+17816325193",
            "email": "mandcluxurydetailing@gmail.com",
            "priceRange": "$$",
            "description": "Professional mobile car detailing serving Danvers, Beverly, Salem, Peabody, Marblehead, Manchester, and the entire North Shore of Massachusetts. Interior, exterior, and full detail packages starting at $89.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.5751,
              "longitude": -70.9495
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "10:00",
                "closes": "17:00"
              }
            ],
            "areaServed": [
              {"@type": "City", "name": "Beverly"},
              {"@type": "City", "name": "Danvers"},
              {"@type": "City", "name": "Salem"},
              {"@type": "City", "name": "Peabody"},
              {"@type": "City", "name": "Marblehead"},
              {"@type": "City", "name": "Manchester-by-the-Sea"},
              {"@type": "City", "name": "Gloucester"},
              {"@type": "City", "name": "Swampscott"},
              {"@type": "City", "name": "Hamilton"},
              {"@type": "City", "name": "Wenham"},
              {"@type": "City", "name": "Lynn"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile Car Detailing Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "Interior Detail", "description": "Deep vacuum, steam clean, leather conditioning, and odor elimination."},
                  "priceSpecification": {"@type": "PriceSpecification", "price": "129", "priceCurrency": "USD", "minPrice": "129"}
                },
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "Exterior Detail", "description": "Hand wash, clay bar, trim restoration, tire dressing, and wax protection."},
                  "priceSpecification": {"@type": "PriceSpecification", "price": "89", "priceCurrency": "USD", "minPrice": "89"}
                },
                {
                  "@type": "Offer",
                  "itemOffered": {"@type": "Service", "name": "Full Detail", "description": "Complete interior and exterior detailing — inside and out."},
                  "priceSpecification": {"@type": "PriceSpecification", "price": "189", "priceCurrency": "USD", "minPrice": "189"}
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": 7,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Janet Gargan"},
                "reviewBody": "The results went beyond what we hoped for, and we couldn't be happier with the service."
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Deanna LeClerc"},
                "reviewBody": "Matt was great to work with. His price is super reasonable especially for the results I got, my car looks brand new."
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "John Stalker"},
                "reviewBody": "Quick to respond, very personable. The work was great, the price was fair. Won't hesitate to have them come back."
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Vic P."},
                "reviewBody": "Was on time and did an amazing job. My car is spotless. Highly recommend! The best part is he comes right to you!"
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Michael Blankenship"},
                "reviewBody": "Phenomenal job on my Jeep Wrangler. Hard-working and his rates are so reasonable. I highly recommend getting your car cleaned by him."
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Lauren Covello"},
                "reviewBody": "Matthew did such a great job on my car! I have two dogs so there was a lot of dog fur and he got it all — it is spotless now!"
              },
              {
                "@type": "Review",
                "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
                "author": {"@type": "Person", "name": "Stephanie Hueter"},
                "reviewBody": "Not only very professional but an exceptional job done. Incredible attention to detail and every nook and cranny was cleaned."
              }
            ],
            "sameAs": [
              "https://instagram.com/mcluxurydetailing",
              "https://www.facebook.com/profile.php?id=61577181187495"
            ]
          })
        }}
      />

      {/* ── HERO ── */}
      <section className="hero-section">

        {/* ── Left: text column ── */}
        <div className="hero-text-col" style={{ position: "relative" }}>

          {/* Ghost watermark */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", pointerEvents: "none", overflow: "hidden" }}>
            <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(10rem,22vw,30rem)", color: "#c9a84c", opacity: 0.025, lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none" }}>MC</span>
          </div>

          {/* Badge */}
          <div className="anim-up d0" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.3)", padding: "0.375rem 1rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.22em", color: "#c9a84c", textTransform: "uppercase" }}>
            <span style={{ display: "inline-block", width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "#c9a84c", animation: "pulse 2s infinite" }} />
            Northshore Massachusetts &nbsp;·&nbsp; Mobile Service
          </div>

          {/* Headline */}
          <h1 className="anim-up d1 font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,7vw,6rem)", lineHeight: 0.92, color: "#f2ede4", marginBottom: "0.1em" }}>
            Your Car
          </h1>
          <h1 className="anim-up d2 font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,7vw,6rem)", lineHeight: 0.92, color: "#c9a84c", marginBottom: "1.2rem" }}>
            Deserves More.
          </h1>

          {/* Subtext */}
          <p className="anim-up d3" style={{ color: "#c8c2b8", fontSize: "clamp(0.9rem,1.2vw,1rem)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "26rem" }}>
            Premium mobile detailing that comes to you — showroom-quality results right in your driveway.
          </p>

          {/* CTAs */}
          <div className="anim-up d4" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "22rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "2px", padding: "0.4rem 0.875rem", width: "fit-content" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a84c", display: "inline-block", flexShrink: 0, animation: "pulse 2s infinite" }} />
              <span style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Slots Fill Fast — Book Early
              </span>
            </div>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "58px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}>
              Book Now — It&apos;s Free to Quote
            </Link>
            <p style={{ color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", marginTop: "-0.35rem" }}>
              ⚡ Response within 1–2 hours
            </p>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", marginTop: "-0.25rem" }}>
              ★★★★★ <span style={{ color: "#a8a8a8" }}>on Google</span>
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="tel:+17816325193" className="btn-ghost" style={{ flex: 1, height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.35)", color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (781) 632-5193
              </a>
              <Link href="/gallery" className="btn-ghost" style={{ flex: 1, height: "52px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Our Work
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="anim-up d5" style={{ marginTop: "1.75rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { icon: "✓", label: "Satisfaction Guaranteed" },
              { icon: "✓", label: "We'll Come Back & Fix It" },
              { icon: "✓", label: "No Drop-Off Needed" },
            ].map((b) => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>{b.icon}</span>
                <span style={{ color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{b.label}</span>
              </div>
            ))}
          </div>

          {/* Areas */}
          <p className="anim-up d6" style={{ marginTop: "1.5rem", color: "#6a6a6a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Beverly · Danvers · Salem · Peabody · Gloucester &amp; more
          </p>
        </div>

        {/* ── Right: floating video card ── */}
        <div className="hero-video-col">
          {/* Gold glow wrapper */}
          <div style={{ filter: "drop-shadow(0 0 32px rgba(201,168,76,0.14)) drop-shadow(0 4px 24px rgba(0,0,0,0.6))" }}>
            {/* Chamfered card */}
            <div className="hero-video-card" style={{ position: "relative", overflow: "hidden", clipPath: "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/Working Outside.jpg"
                aria-label="Matt detailing a car"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              >
                <source src="/washing.mp4" type="video/mp4" />
              </video>
              {/* Top/bottom vignette */}
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.2) 100%)", pointerEvents: "none" }} />
            </div>
            {/* Thin gold border line — top-left chamfered outline */}
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, clipPath: "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)", outline: "1px solid rgba(201,168,76,0.22)", pointerEvents: "none" }} />
          </div>
        </div>

      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}>
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.27), transparent)" }} />
        <div className="marquee-wrap" style={{ padding: "0.875rem 0" }}>
          <div className="marquee-track" aria-hidden="true">
            {[...areas, ...areas].map((a, i) => (
              <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", padding: "0 2rem", whiteSpace: "nowrap", opacity: 0.7 }}>
                {a}<span style={{ marginLeft: "2rem", opacity: 0.35 }}>✦</span>
              </span>
            ))}
          </div>
        </div>
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.27), transparent)" }} />
      </div>

      {/* ── ETHOS LINE ── */}
      <section style={{ background: "#060606", padding: "3.5rem 0", borderTop: "1px solid #1c1c1c" }}>
        <div style={{ ...wrap, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginBottom: "1.75rem" }} />
          <p className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.6rem,5vw,2.8rem)", color: "#c9a84c", textAlign: "center", lineHeight: 1.2, letterSpacing: "0.01em" }}>
            Every Car Treated As Our Own
          </p>
          <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginTop: "1.75rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#1c1c1c", marginTop: "2.5rem", width: "100%" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/Working Inside.JPG" alt="Matt detailing a car interior in Danvers, MA — steam cleaning and vacuuming" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 28rem" />
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/Working Outside.jpg" alt="Mobile car detailing exterior wash on the North Shore of Massachusetts" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 28rem" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Our Services
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1px", background: "#1c1c1c" }}>
            {packageCategories.map((s) => (
              <div key={s.num} style={{ background: "#060606", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2.5rem 1.5rem" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2.2rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "0.75rem" }}>
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.4rem", color: "#f2ede4", marginBottom: "0.5rem", textAlign: "center" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1.25rem", textAlign: "center" }}>
                  {s.desc}
                </p>
                <div style={{ marginTop: "auto", textAlign: "center" }}>
                  <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1rem" }}>
                    {s.tiers}
                  </div>
                  <Link
                    href={s.href}
                    style={{ color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid #282828" }}
                  >
                    View Packages →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
            <Link href="/contact" className="btn-gold" style={{ height: "52px", padding: "0 2.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
              Book a Service
            </Link>
            <Link href="/services" style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid rgba(201,168,76,0.4)" }}>
              Full Pricing &amp; Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a full car detail typically cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A professional full detail — interior and exterior combined — typically runs anywhere from $189 to $400+ depending on the level of service and vehicle condition. At M&C, we offer three tiers: Bronze starting at $189 for a solid inside-and-out clean, Silver at $269 adding steam clean, leather conditioning, clay bar, and wax protection, and Gold at $359 for our most thorough treatment including carpet shampoo and engine bay wipe-down.",
                },
              },
              {
                "@type": "Question",
                "name": "Is it worth paying for car detailing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Regular detailing protects your paint from oxidation, UV damage, and contaminants that cause permanent wear over time. It also preserves interior materials — leather cracks, fabric stains, and plastics fade without proper care. Beyond protection, a clean car simply feels better to drive, holds its resale value, and makes an impression. The cost of a detail is a fraction of what neglect will cost you at trade-in.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the best homemade solution to wash a car?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There isn't one. Dish soap strips your paint's protective wax and sealant. Household cleaners are too harsh for automotive finishes. Homemade solutions might get the dirt off but they accelerate paint degradation and leave your car worse off in the long run. A proper hand wash uses pH-balanced car shampoo, a two-bucket method, and microfiber — tools and products designed specifically not to damage your finish.",
                },
              },
              {
                "@type": "Question",
                "name": "What does car detailing include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Detailing goes far beyond a car wash. A full detail typically includes a thorough hand wash and dry, clay bar treatment to remove bonded contaminants, wheel and tire cleaning, interior vacuuming, dashboard and console wipe-down, steam cleaning of high-touch surfaces, leather conditioning, window cleaning inside and out, and an air freshener. At M&C we cover all of it — no corners cut.",
                },
              },
            ],
          }),
        }}
      />

      {/* ── Q&A ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1 }}>
              What You&apos;re Wondering
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "1.25rem auto 0" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                q: "How much does a full car detail typically cost?",
                a: "A professional full detail — interior and exterior combined — typically runs anywhere from $189 to $400+ depending on the level of service and vehicle condition. At M&C, we offer three tiers: Bronze starting at $189 for a solid inside-and-out clean, Silver at $269 adding steam clean, leather conditioning, clay bar, and wax protection, and Gold at $359 for our most thorough treatment including carpet shampoo and engine bay wipe-down. You're paying for professional-grade products and trained hands, not just a rinse.",
              },
              {
                q: "Is it worth paying for car detailing?",
                a: "Absolutely. Regular detailing protects your paint from oxidation, UV damage, and contaminants that cause permanent wear over time. It also preserves interior materials — leather cracks, fabric stains, and plastics fade without proper care. Beyond protection, a clean car simply feels better to drive, holds its resale value, and makes an impression. The cost of a detail is a fraction of what neglect will cost you at trade-in.",
              },
              {
                q: "What is the best homemade solution to wash a car?",
                a: "There isn't one. Dish soap strips your paint's protective wax and sealant. Household cleaners are too harsh for automotive finishes. Homemade solutions might get the dirt off but they accelerate paint degradation and leave your car worse off in the long run. A proper hand wash uses pH-balanced car shampoo, a two-bucket method, and microfiber — tools and products designed specifically not to damage your finish.",
              },
              {
                q: "What does car detailing include?",
                a: "Detailing goes far beyond a car wash. A full detail typically includes a thorough hand wash and dry, clay bar treatment to remove bonded contaminants, wheel and tire cleaning, interior vacuuming, dashboard and console wipe-down, steam cleaning of high-touch surfaces, leather conditioning, window cleaning inside and out, and an air freshener. At M&C we cover all of it — no corners cut.",
              },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid #1c1c1c", padding: "2rem 0", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.1rem,3vw,1.4rem)", color: "#c9a84c", lineHeight: 1.3, textAlign: "left" }}>
                  {item.q}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.88rem", lineHeight: 1.8, textAlign: "left" }}>
                  {item.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #1c1c1c" }} />
          </div>
        </div>
      </section>

      {/* ── WHY MC ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
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
              <div key={item.title} className={i > 0 ? "md-border-l" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid #1c1c1c" }}>
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

      {/* ── SERVICE AREA ── */}
      <section style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Service Area
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Mobile Car Detailing Near You
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
            <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto" }}>
              Looking for mobile detailing near you on the North Shore of Massachusetts? We serve Beverly, Salem, Danvers, Peabody, Gloucester, Manchester-by-the-Sea, Marblehead, Swampscott, Hamilton, Wenham, and Lynn — fully equipped, arriving at your driveway.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: "1px", background: "#1c1c1c" }}>
            {[
              { name: "Beverly", slug: "beverly" },
              { name: "Salem", slug: "salem" },
              { name: "Danvers", slug: "danvers" },
              { name: "Peabody", slug: "peabody" },
              { name: "Gloucester", slug: "gloucester" },
              { name: "Manchester", slug: "manchester" },
              { name: "Marblehead", slug: "marblehead" },
              { name: "Swampscott", slug: "swampscott" },
              { name: "Hamilton", slug: "hamilton" },
              { name: "Wenham", slug: "wenham" },
              { name: "Lynn", slug: "lynn" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                style={{ background: "#060606", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem 1rem", color: "#5a5a5a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s, background 0.2s", textAlign: "center" }}
                className="hover:text-[#c9a84c] hover:bg-[#0a0a0a]"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div className="section-grid">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
              The Work
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2.5rem,7vw,4.5rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem" }}>
              Before &amp; After
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1rem", marginBottom: "1rem" }}>
            <BeforeAfterSlider
              before="/civic before.jpg"
              after="/civic after.jpg"
              label="Civic — Full Detail"
            />
            <BeforeAfterSlider
              before="/honda before.jpg"
              after="/honda after.jpg"
              label="Honda — Interior Detail"
            />
            <BeforeAfterSlider
              before="/rav4 before.jpg"
              after="/rav4 after.jpg"
              label="RAV4 — Full Detail"
            />
          </div>

          {/* Static before/after shots */}
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1rem" }}>
            {[
              { src: "/Before After Left.jpeg", label: "Exterior — Before" },
              { src: "/Before After Right.jpeg", label: "Exterior — After" },
              { src: "/before after.jpeg", label: "Before & After" },
            ].map(({ src, label }) => (
              <div key={src} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image src={src} alt={label} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: "center 20%" }} />
                </div>
                <p style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/gallery" className="btn-gold btn-ghost" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 2rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>

          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
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
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "0.75rem" }}>★</span>)}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] italic" style={{ color: "#a8a8a8", fontSize: "1rem", lineHeight: 1.55, marginBottom: "1rem", textAlign: "center" }}>
                  &ldquo;{t.short}&rdquo;
                </p>
                <div style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
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

          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
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
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
              Get a Free Quote
            </Link>
            <a href="tel:+17816325193" className="btn-ghost" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
