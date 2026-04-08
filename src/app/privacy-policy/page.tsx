import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — M&C Luxury Detailing" },
  description: "Privacy policy for M&C Luxury Detailing. Learn how we collect and use your information.",
  alternates: {
    canonical: "https://www.mandcluxurydetailing.com/privacy-policy",
  },
};

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "48rem",
  margin: "0 auto",
  padding: "0 1.25rem",
};

const heading: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), serif",
  fontStyle: "italic",
  fontWeight: 700,
  color: "#f2ede4",
  marginBottom: "0.75rem",
};

const body: React.CSSProperties = {
  color: "#5a5a5a",
  fontSize: "0.9rem",
  lineHeight: 1.9,
  marginBottom: "1.5rem",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you submit a booking inquiry or contact form, we collect your name, phone number, email address, vehicle information, and service address. This information is provided voluntarily by you.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information solely to schedule and confirm your detailing appointment, communicate about your service, and send a one-time SMS review request following your completed appointment. We do not use your data for marketing campaigns or unrelated communications.",
  },
  {
    title: "SMS Messaging",
    content:
      "By providing your phone number, you consent to receive a single text message from M&C Luxury Detailing requesting a review after your service is completed. Message and data rates may apply. You will not be enrolled in any recurring messaging program. Reply STOP at any time to opt out.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We do not share your data with advertisers or marketing platforms.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your contact information only as long as necessary to fulfill your service and follow up on your appointment. You may request deletion of your data at any time by contacting us directly.",
  },
  {
    title: "Cookies & Analytics",
    content:
      "Our website may use cookies and third-party analytics tools (such as PostHog) to understand how visitors use our site. This data is aggregated and anonymous — it is not linked to your personal information.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, contact us at mandcluxurydetailing@gmail.com or (781) 632-5193.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. Any changes will be posted on this page. Continued use of our website after changes constitutes acceptance of the updated policy.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero-bg"
        style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}
      >
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
            Legal
          </p>
          <h1
            className="font-[family-name:var(--font-cormorant)] italic font-bold"
            style={{ fontSize: "clamp(2.5rem,8vw,5rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem" }}
          >
            Privacy Policy
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          <p style={{ color: "#3a3a3a", fontSize: "0.78rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginTop: "1.5rem" }}>
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#060606", padding: "5rem 0" }}>
        <div style={wrap}>
          <p style={{ ...body, marginBottom: "3rem" }}>
            M&amp;C Luxury Detailing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
            <span style={{ color: "#c9a84c" }}>mandcluxurydetailing.com</span>. This policy explains what information
            we collect, how we use it, and your rights regarding your data. We keep it straightforward — no jargon.
          </p>

          {sections.map((s, i) => (
            <div key={s.title} style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: i < sections.length - 1 ? "1px solid #111" : "none" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.75rem" }}>
                <span
                  className="font-[family-name:var(--font-cormorant)] italic font-bold"
                  style={{ fontSize: "1.5rem", color: "#c9a84c", opacity: 0.25, lineHeight: 1, flexShrink: 0 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="font-[family-name:var(--font-cormorant)] italic font-bold"
                  style={{ ...heading, fontSize: "1.4rem", marginBottom: 0 }}
                >
                  {s.title}
                </h2>
              </div>
              <p style={body}>{s.content}</p>
            </div>
          ))}

          {/* Contact */}
          <div style={{ borderTop: "1px solid #1c1c1c", paddingTop: "2.5rem", textAlign: "center" }}>
            <p
              style={{
                color: "#c9a84c",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Questions?
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] italic font-bold"
              style={{ ...heading, fontSize: "clamp(1.4rem,3vw,2rem)", textAlign: "center" }}
            >
              Contact Us Directly
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", alignItems: "center" }}>
              <a
                href="mailto:mandcluxurydetailing@gmail.com"
                className="hover:text-[#c9a84c] transition-colors"
                style={{ color: "#5a5a5a", fontSize: "0.85rem" }}
              >
                mandcluxurydetailing@gmail.com
              </a>
              <a
                href="tel:+17816325193"
                className="hover:text-[#c9a84c] transition-colors"
                style={{ color: "#5a5a5a", fontSize: "0.85rem" }}
              >
                (781) 632-5193
              </a>
            </div>
            <Link
              href="/contact"
              className="btn-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 2rem",
                marginTop: "2rem",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.15em",
              }}
            >
              Book a Detail
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
