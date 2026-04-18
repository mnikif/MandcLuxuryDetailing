import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const cities = [
  {
    slug: "beverly",
    name: "Beverly",
    blurb: "From Beverly Farms to the Montserrat neighborhood, we cover all of Beverly with professional mobile detailing that arrives at your driveway fully equipped. No drop-offs, no commute — just a showroom finish where you are.",
    zip: "01915",
    lat: 42.5584,
    lng: -70.8800,
    nearby: ["salem", "danvers", "manchester", "hamilton"],
    testimonial: {
      quote: "Honestly the best money I've spent on my truck. They came right to my driveway in Beverly Farms and the interior looked brand new.",
      author: "Kyle R., Beverly",
    },
  },
  {
    slug: "salem",
    name: "Salem",
    blurb: "Salem's mix of historic neighborhoods, year-round residents, and coastal streets means cars take a beating. Whether you're on Bridge Street or in Witchcraft Heights, M&C comes to you with professional-grade products and zero wait.",
    zip: "01970",
    lat: 42.5195,
    lng: -70.8967,
    nearby: ["beverly", "danvers", "marblehead", "swampscott"],
    testimonial: {
      quote: "I've tried a few detailers on the North Shore and M&C is on another level. My car hasn't looked this good since I bought it.",
      author: "Jess M., Salem",
    },
  },
  {
    slug: "danvers",
    name: "Danvers",
    blurb: "Danvers is home base for M&C Luxury Detailing. We know these streets, neighborhoods, and the standard locals expect. From Endicott Street to Putnam Circle, we're your neighbors — and we treat your car like it's our own.",
    zip: "01923",
    lat: 42.5751,
    lng: -70.9495,
    nearby: ["beverly", "peabody", "hamilton", "wenham"],
    testimonial: {
      quote: "These guys are local and it shows — on time, professional, and my Audi looked perfect. Booking again next month.",
      author: "Dan S., Danvers",
    },
  },
  {
    slug: "peabody",
    name: "Peabody",
    blurb: "Peabody is one of the most densely populated cities on the North Shore. M&C makes it easy — book online and we show up at your home, apartment complex, or office with everything needed to deliver a showroom finish.",
    zip: "01960",
    lat: 42.5279,
    lng: -70.9287,
    nearby: ["danvers", "salem", "lynn", "swampscott"],
    testimonial: {
      quote: "Super convenient — they came right to my apartment parking lot. Zero hassle, incredible result. Couldn't ask for more.",
      author: "Maria T., Peabody",
    },
  },
  {
    slug: "gloucester",
    name: "Gloucester",
    blurb: "Gloucester's coastal air and salt spray are hard on your paint and interior. A regular detail protects your vehicle from the elements. We serve all of Gloucester — from downtown to Annisquam — fully mobile, fully equipped.",
    zip: "01930",
    lat: 42.6159,
    lng: -70.6609,
    nearby: ["manchester", "beverly", "hamilton", "wenham"],
    testimonial: {
      quote: "Living near the water, salt build-up is a real problem. M&C took care of everything and actually explained how to protect my paint going forward.",
      author: "Tom H., Gloucester",
    },
  },
  {
    slug: "manchester",
    name: "Manchester-by-the-Sea",
    blurb: "Manchester-by-the-Sea's seaside setting calls for meticulous care. Whether your car lives in a beachside garage or a commuter driveway, we bring the precision of a full detail shop directly to your location.",
    zip: "01944",
    lat: 42.5773,
    lng: -70.7684,
    nearby: ["beverly", "gloucester", "hamilton", "wenham"],
    testimonial: {
      quote: "Exactly what you'd want for a proper luxury detail — they matched the standard we expect out here. Will absolutely be a regular customer.",
      author: "Caroline B., Manchester-by-the-Sea",
    },
  },
  {
    slug: "marblehead",
    name: "Marblehead",
    blurb: "Marblehead's waterfront community and coastal roads demand a vehicle that looks the part. M&C Luxury Detailing serves all of Marblehead — from Old Town to Clifton — with mobile detailing that matches the town's standards.",
    zip: "01945",
    lat: 42.4998,
    lng: -70.8578,
    nearby: ["salem", "swampscott", "lynn", "peabody"],
    testimonial: {
      quote: "Came out to my place in Old Town and did an impeccable job. Great communication, showed up on time, and the results were exactly what I was looking for.",
      author: "Ryan L., Marblehead",
    },
  },
  {
    slug: "swampscott",
    name: "Swampscott",
    blurb: "Swampscott's oceanfront lifestyle and compact neighborhoods make mobile detailing the obvious choice. No driving across town, no drop-off window — we come to you, anywhere in Swampscott, ready to work.",
    zip: "01907",
    lat: 42.4737,
    lng: -70.9148,
    nearby: ["lynn", "salem", "marblehead", "peabody"],
    testimonial: {
      quote: "Booked online in two minutes, they showed up the next afternoon. My car has never looked better. Straightforward and worth every penny.",
      author: "Liz A., Swampscott",
    },
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    blurb: "Hamilton's quiet residential roads and horse country setting are the backdrop for M&C's mobile service. We serve all of Hamilton with full detail capability, professional products, and results that speak for themselves.",
    zip: "01936",
    lat: 42.6212,
    lng: -70.8645,
    nearby: ["danvers", "wenham", "beverly", "manchester"],
    testimonial: {
      quote: "Great service — they came all the way out to Hamilton without any issue. Professional, thorough, and the truck looked showroom-ready when they were done.",
      author: "Steve K., Hamilton",
    },
  },
  {
    slug: "wenham",
    name: "Wenham",
    blurb: "Wenham is a small town that values quality craftsmanship. M&C Luxury Detailing brings that same precision to every vehicle — fully mobile, fully equipped, arriving at your location in Wenham ready to deliver.",
    zip: "01984",
    lat: 42.5987,
    lng: -70.8787,
    nearby: ["hamilton", "danvers", "beverly", "manchester"],
    testimonial: {
      quote: "Small town but they absolutely showed up. Professional, thorough, and the results were excellent. Exactly the kind of service I was hoping for.",
      author: "Pat D., Wenham",
    },
  },
  {
    slug: "lynn",
    name: "Lynn",
    blurb: "Lynn is one of the largest cities on the North Shore, and M&C covers it entirely. From downtown to Diamond District, we make professional mobile detailing accessible — no shop drop-offs, no wait, just results.",
    zip: "01901",
    lat: 42.4668,
    lng: -70.9495,
    nearby: ["swampscott", "salem", "peabody", "marblehead"],
    testimonial: {
      quote: "Affordable, professional, and they came right to me. No drop-off, no waiting around — just showed up and did a great job. Already booked again.",
      author: "Marcus B., Lynn",
    },
  },
];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata(props: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await props.params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Mobile Car Detailing in ${city.name}, MA`,
    description: `Professional mobile car detailing in ${city.name}, MA. We come to your driveway — interior, exterior & full detail packages from $89. Book online, free quote.`,
    alternates: {
      canonical: `https://www.mandcluxurydetailing.com/locations/${city.slug}`,
    },
  };
}

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

const services = [
  {
    num: "01",
    title: "Interior Detail",
    desc: "Full vacuum, steam clean, leather conditioning, and odor elimination.",
    tiers: [
      { label: "Bronze", price: "$129" },
      { label: "Silver", price: "$169" },
      { label: "Gold",   price: "$219" },
    ],
  },
  {
    num: "02",
    title: "Exterior Detail",
    desc: "Hand wash, clay bar, trim restoration, tire dressing, and wax protection.",
    tiers: [
      { label: "Bronze", price: "$89"  },
      { label: "Silver", price: "$129" },
      { label: "Gold",   price: "$169" },
    ],
  },
  {
    num: "03",
    title: "Full Detail",
    desc: "Our complete inside-and-out transformation — interior and exterior combined.",
    tiers: [
      { label: "Bronze", price: "$189" },
      { label: "Silver", price: "$269" },
      { label: "Gold",   price: "$359" },
    ],
  },
];

export default async function CityPage(props: { params: Promise<{ city: string }> }) {
  const { city: slug } = await props.params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearbyData = city.nearby
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean) as typeof cities;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "M&C Luxury Detailing",
            "url": `https://www.mandcluxurydetailing.com/locations/${city.slug}`,
            "telephone": "+17816325193",
            "email": "mandcluxurydetailing@gmail.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US",
            },
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "addressRegion": "MA",
              "addressCountry": "US",
            },
            "description": `Professional mobile car detailing in ${city.name}, MA. We come to your driveway — no drop-off required.`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": 7,
              "bestRating": "5",
              "worstRating": "1",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4.5rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Mobile Detailing · North Shore MA
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.92, marginBottom: "0.2em" }}>
            {city.name}
          </h1>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "#c9a84c", lineHeight: 1, marginBottom: "1.5rem" }}>
            Mobile Car Detailing
          </h2>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#5a5a5a", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto 2.5rem" }}>
            {city.blurb}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "22rem", margin: "0 auto" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em" }}>
              Book Now — Free Quote
            </Link>
            <a href="tel:+17816325193" className="btn-ghost" style={{ width: "100%", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
              (781) 632-5193
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Packages in {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c", marginBottom: "2rem" }}>
            {services.map((s) => (
              <div key={s.num} style={{ background: "#060606", padding: "2.5rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "0.75rem" }}>
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.35rem", color: "#f2ede4", marginBottom: "0.5rem" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.8rem", lineHeight: 1.65, marginBottom: "1.5rem", flex: 1 }}>
                  {s.desc}
                </p>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.tiers.map((t, i) => (
                    <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.4rem 0.75rem", background: i === 2 ? "rgba(201,168,76,0.06)" : "transparent", border: "1px solid #1c1c1c" }}>
                      <span style={{ color: i === 2 ? "#c9a84c" : i === 1 ? "rgba(201,168,76,0.65)" : "rgba(201,168,76,0.4)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{t.label}</span>
                      <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.1rem", color: "#f2ede4" }}>{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/services" style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid rgba(201,168,76,0.35)" }}>
            View Full Pricing &amp; Packages →
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              We Come to {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { n: "I", title: "Fully Mobile", desc: `No drop-offs, no driving across town. We arrive in ${city.name} with water, power, and professional-grade equipment — ready to work wherever your car is parked.` },
              { n: "II", title: "Professional Grade", desc: "We use industry-leading products — not store-shelf shortcuts. Every detail is done with the same care we'd give our own vehicle." },
              { n: "III", title: "Satisfaction Guaranteed", desc: "Not happy with the result? We come back and make it right. Your satisfaction isn't a courtesy — it's the standard." },
            ].map((item, i) => (
              <div key={item.title} className={i > 0 ? "md-border-l" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid #1c1c1c" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "3rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "1rem" }}>
                  {item.n}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.35rem", color: "#f2ede4", marginBottom: "0.75rem" }}>
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

      {/* Testimonial */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={{ ...wrap, maxWidth: "40rem" }}>
          <div className="gold-rule" style={{ width: "3rem", margin: "0 auto 2rem" }} />
          <blockquote style={{ margin: 0 }}>
            <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "clamp(1.2rem,3vw,1.6rem)", color: "#f2ede4", lineHeight: 1.5, marginBottom: "1.25rem" }}>
              &ldquo;{city.testimonial.quote}&rdquo;
            </p>
            <cite style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", fontStyle: "normal" }}>
              — {city.testimonial.author}
            </cite>
          </blockquote>
          <div className="gold-rule" style={{ width: "3rem", margin: "2rem auto 0" }} />
        </div>
      </section>

      {/* Nearby */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "3rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Also Serving
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {nearbyData.map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} className="hover:text-[#c9a84c]" style={{ color: "#5a5a5a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid #1c1c1c", transition: "color 0.2s, border-color 0.2s" }}>
                {c.name}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-[#c9a84c]" style={{ color: "#5a5a5a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid #1c1c1c" }}>
              + More Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Get Started Today
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,7vw,4.5rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "0.15em" }}>
            Ready for a
          </h2>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,7vw,4.5rem)", color: "#c9a84c", lineHeight: 0.95, marginBottom: "2rem" }}>
            Showroom Finish?
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "28rem", margin: "0 auto 2.5rem" }}>
            Serving {city.name} and all of North Shore Massachusetts. Book online — free quote, fast response.
          </p>
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
