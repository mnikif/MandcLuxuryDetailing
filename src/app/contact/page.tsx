"use client";
import { useState } from "react";

const services = [
  "Interior",
  "Exterior",
  "Full Detail",
];

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0a0a0a",
  border: "1px solid #1c1c1c",
  color: "#f2ede4",
  fontSize: "0.875rem",
  padding: "0.875rem 1rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
  appearance: "none",
  WebkitAppearance: "none",
  textAlign: "left",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#3a3a3a",
  fontSize: "0.58rem",
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  textAlign: "left",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", service: "", vehicle: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please call us directly at (781) 632-5193.");
    }
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === name ? "#c9a84c" : "#1c1c1c",
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "1.25rem", textAlign: "center" }}>
            Book a Detail
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.75rem" }} />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="tel:+17816325193" className="btn-gold btn-ghost" style={{ height: "58px", padding: "0 2rem", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Tap to Call — (781) 632-5193
            </a>
          </div>
          <p style={{ color: "#3a3a3a", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginTop: "1rem", textAlign: "center" }}>
            or fill out the form below and we&apos;ll respond within 1–2 hours
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ background: "#060606", padding: "3.5rem 0 5rem" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "2.5rem", textAlign: "left" }}>

            {/* Form — first in DOM (appears first on mobile), right side on desktop */}
            <div className="lg:col-start-2 lg:col-span-2 lg:row-start-1">
              {submitted ? (
                <div style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#0a0a0a", padding: "3rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="gold-rule" style={{ width: "3rem", margin: "0 auto 1.5rem" }} />
                  <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2rem", color: "#f2ede4", marginBottom: "0.75rem", textAlign: "center" }}>
                    Request Received!
                  </h3>
                  <p style={{ color: "#5a5a5a", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "24rem", textAlign: "center" }}>
                    Thanks for reaching out. We&apos;ll get back to you within 1–2 hours to confirm your booking and details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Name <span style={{ color: "#c9a84c" }}>*</span></label>
                      <input type="text" name="name" required placeholder="John Smith" value={formData.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={fieldStyle("name")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone <span style={{ color: "#c9a84c" }}>*</span></label>
                      <input type="tel" name="phone" required placeholder="(978) 000-0000" value={formData.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={fieldStyle("phone")} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Service</label>
                    <select name="service" value={formData.service} onChange={handleChange} onFocus={() => setFocused("service")} onBlur={() => setFocused(null)} style={{ ...fieldStyle("service"), cursor: "pointer" }}>
                      <option value="" style={{ background: "#0a0a0a" }}>Select a service...</option>
                      {services.map((s) => <option key={s} value={s} style={{ background: "#0a0a0a" }}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Vehicle (Year, Make, Model)</label>
                    <input type="text" name="vehicle" placeholder="2022 BMW M3" value={formData.vehicle} onChange={handleChange} onFocus={() => setFocused("vehicle")} onBlur={() => setFocused(null)} style={fieldStyle("vehicle")} />
                  </div>

                  <div>
                    <label style={labelStyle}>Additional Notes</label>
                    <textarea name="message" rows={5} placeholder="Tell us about your car's condition and we'll help you choose the right package level for your car." value={formData.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...fieldStyle("message"), resize: "none" }} />
                  </div>

                  <button type="submit" disabled={loading} className="btn-gold" style={{ width: "100%", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontFamily: "var(--font-mono)", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                    {loading ? "Sending..." : "Submit Booking Request"}
                  </button>
                  {error && (
                    <p style={{ color: "#e57373", fontSize: "0.72rem", textAlign: "center", fontFamily: "var(--font-mono)" }}>{error}</p>
                  )}
                  <p style={{ color: "#2a2a2a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
                    We respond within 1–2 hours to confirm availability and pricing.
                  </p>
                </form>
              )}
            </div>

            {/* Contact info sidebar — second on mobile, left side on desktop */}
            <div className="lg:col-start-1 lg:row-start-1" style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center" }}>
              <div>
                <h3 style={{ color: "#c9a84c", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem", textAlign: "center" }}>
                  Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.35rem", textAlign: "center" }}>Phone</div>
                    <a href="tel:+17816325193" className="font-[family-name:var(--font-cormorant)] italic font-bold hover:text-[#c9a84c] transition-colors" style={{ fontSize: "1.6rem", color: "#f2ede4", lineHeight: 1, display: "block", textAlign: "center" }}>
                      (781) 632-5193
                    </a>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.35rem", textAlign: "center" }}>Email</div>
                    <a href="mailto:mandcluxurydetailing@gmail.com" className="hover:text-[#c9a84c] transition-colors" style={{ color: "#5a5a5a", fontSize: "0.82rem", display: "block", textAlign: "center" }}>
                      mandcluxurydetailing@gmail.com
                    </a>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.35rem", textAlign: "center" }}>Based In</div>
                    <div style={{ color: "#5a5a5a", fontSize: "0.82rem", textAlign: "center" }}>Danvers, MA</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ color: "#c9a84c", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem", textAlign: "center" }}>
                  Hours
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { day: "Mon – Fri", hours: "10am – 6pm" },
                    { day: "Saturday",  hours: "10am – 5pm" },
                    { day: "Sunday",    hours: "By appointment" },
                  ].map((h) => (
                    <div key={h.day} style={{ display: "flex", justifyContent: "center", gap: "1rem", borderBottom: "1px solid #111", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "#3a3a3a", fontSize: "0.78rem" }}>{h.day}</span>
                      <span style={{ color: "#5a5a5a", fontSize: "0.78rem" }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ color: "#c9a84c", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
                  Area
                </h3>
                <p style={{ color: "#3a3a3a", fontSize: "0.8rem", lineHeight: 1.7, textAlign: "center" }}>
                  Beverly, Danvers, Salem, Peabody, Manchester, Gloucester, Marblehead, and surrounding North Shore communities.
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href="https://instagram.com/mcluxurydetailing" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors" style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #1c1c1c", padding: "0.5rem 0.875rem" }}>
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577181187495" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c] transition-colors" style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #1c1c1c", padding: "0.5rem 0.875rem" }}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
