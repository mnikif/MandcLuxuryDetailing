import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '5-Star Reviews — Mobile Car Detailing Danvers, MA',
  description: 'See what North Shore Massachusetts car owners say about M&C Luxury Detailing. 5-star mobile detailing in Beverly, Danvers, Salem, and beyond.',
  alternates: {
    canonical: 'https://www.mandcluxurydetailing.com/reviews',
  },
};

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
  {
    name: "Michael Blankenship",
    short: "Remarkable job — highly recommend.",
    text: "For a young kid to come out on one of the hottest days of the week being 80+ degrees and to vacuum and clean my Jeep Wrangler inside with all of my service dogs, pet hair everywhere and do the phenomenal job that he did at the age that he is is remarkable in a day where young kids don't know the value of a good skill I highly recommend getting your car cleaned by him, especially because his rates are so reasonable. He is a hard-working kid and deserves the chance. Semper fi young man.",
  },
  {
    name: "Lauren Covello",
    short: "It is spotless now!",
    text: "Matthew did such a great job on my car! I have two dogs so there was a lot of dog fur in my car and he got it all — it is spotless now! Great detail for a great price, I'd highly recommend using M&C Luxury Detailing!!",
  },
  {
    name: "Stephanie Hueter",
    short: "Incredible attention to detail.",
    text: "Not only very professional but an exceptional job done. Incredible attention to detail and every nook and cranny was cleaned. Will be a repeat customer.",
  },
];

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

export default function Reviews() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "M&C Luxury Detailing",
            "url": "https://www.mandcluxurydetailing.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "reviewCount": 7
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Janet Gargan" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Thank you so much for your hard work, Matt. My son was thrilled with how clean his car looked after your outstanding detailing job. As an umpire, his equipment makes for a dirty car, but you made it spotless inside and out, even with all the gear. The results went beyond what we hoped for, and we couldn't be happier with the service."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Deanna LeClerc" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Matt was great to work with — he got back to me almost immediately. His price is super reasonable especially for the results I got, my car looks brand new."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "John Stalker" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Quick to respond, very personable, appointment booked amazingly fast. The work was great, the price was fair. Won't hesitate to have them come back."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Vic P." },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Was on time and did an amazing job. My car is spotless and probably the cleanest I have ever seen it. Highly recommend! The best part is he comes right to you!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Michael Blankenship" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "For a young kid to come out on one of the hottest days of the week being 80+ degrees and to vacuum and clean my Jeep Wrangler inside with all of my service dogs, pet hair everywhere and do the phenomenal job that he did is remarkable. I highly recommend getting your car cleaned by him, especially because his rates are so reasonable."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Lauren Covello" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Matthew did such a great job on my car! I have two dogs so there was a lot of dog fur in my car and he got it all — it is spotless now! Great detail for a great price, I'd highly recommend using M&C Luxury Detailing!!"
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Stephanie Hueter" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Not only very professional but an exceptional job done. Incredible attention to detail and every nook and cranny was cleaned. Will be a repeat customer."
              }
            ]
          })
        }}
      />
      {/* ── Hero ── */}

      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Google Reviews
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            What Clients Say
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#5a5a5a", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto", textAlign: "center" }}>
            Real reviews from real customers on the North Shore. See why people keep coming back.
          </p>

          {/* Star rating summary */}
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.375rem" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#c9a84c", fontSize: "1.5rem" }}>★</span>
              ))}
            </div>
            <span style={{ color: "#5a5a5a", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              5.0 · Google Reviews
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured review ── */}
      <section style={{ background: "#060606", padding: "4rem 0", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <div style={{ position: "relative", background: "#0a0a0a", border: "1px solid #1c1c1c", padding: "3.5rem 2.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="quote-mark" aria-hidden="true" style={{ position: "absolute", top: "0.75rem", left: "1.5rem" }}>&#8220;</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "1.5rem", position: "relative", zIndex: 10 }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "1.1rem" }}>★</span>)}
            </div>
            <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "clamp(1.15rem,2.8vw,1.45rem)", color: "#f2ede4", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "40rem", textAlign: "center", position: "relative", zIndex: 10 }}>
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", position: "relative", zIndex: 10 }}>
              <div style={{ width: "2rem", height: "1px", background: "#c9a84c" }} />
              <span style={{ color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}>
                {testimonials[0].name}
              </span>
              <div style={{ width: "2rem", height: "1px", background: "#c9a84c" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── All reviews ── */}
      <section className="section-grid" style={{ padding: "4rem 0" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {testimonials.slice(1).map((t) => (
              <div key={t.name} style={{ background: "#060606", padding: "2.5rem 1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.2rem", marginBottom: "1.25rem" }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#c9a84c", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "1.05rem", color: "#f2ede4", lineHeight: 1.6, marginBottom: "1.25rem", textAlign: "center", flex: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "1.25rem", height: "1px", background: "rgba(201,168,76,0.4)" }} />
                  <span style={{ color: "#5a5a5a", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a review CTA ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Happy with your detail?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
            Leave Us a Review
          </h2>
          <p style={{ color: "#5a5a5a", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "28rem", margin: "0 auto 2rem" }}>
            Your feedback helps us grow and helps other customers find us. We appreciate every review.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <a href="https://g.page/r/CeR9EOzzrWfLEAE/review" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ height: "52px", padding: "0 2.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "var(--font-mono)" }}>
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
