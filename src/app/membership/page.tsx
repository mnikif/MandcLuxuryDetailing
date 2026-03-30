"use client";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    id: "biweekly",
    freq: "Bi-Weekly",
    label: "Every 2 Weeks",
    price: "$59",
    per: "per visit",
    popular: false,
    badge: null,
    tagline: "Always immaculate.",
    desc: "Perfect for daily drivers, high-traffic vehicles, or anyone who simply refuses to let standards slip.",
    visits: "~26 visits / year",
    annualValue: "$1,534 saved vs. one-time pricing",
  },
  {
    id: "monthly",
    freq: "Monthly",
    label: "Once a Month",
    price: "$99",
    per: "per visit",
    popular: true,
    badge: "Most Popular",
    tagline: "The sweet spot.",
    desc: "One visit a month keeps your car looking freshly detailed without thinking about it. Set it and forget it.",
    visits: "12 visits / year",
    annualValue: "$768 saved vs. one-time pricing",
  },
  {
    id: "bimonthly",
    freq: "Every 2 Months",
    label: "Every 2 Months",
    price: "$149",
    per: "per visit",
    popular: false,
    badge: null,
    tagline: "Seasonal fresh.",
    desc: "A consistent baseline of clean every two months — great for weekend vehicles, low-mileage cars, or second vehicles.",
    visits: "6 visits / year",
    annualValue: "$480 saved vs. one-time pricing",
  },
];

const included = [
  { title: "Hand Wash & Dry",        desc: "Full exterior rinse, hand wash, and streak-free dry." },
  { title: "Vacuum & Wipe-Down",     desc: "Interior vacuum of seats, floors, and trunk. Console and dash wiped clean." },
  { title: "Window Clean",           desc: "Interior and exterior glass cleaned and polished." },
  { title: "Tire Dressing",          desc: "Tires cleaned and dressed for that finished, showroom look." },
  { title: "Air Freshener",          desc: "Light interior freshening on every visit." },
  { title: "Priority Scheduling",    desc: "Members always get first pick of available slots — ahead of one-time customers.", gold: true },
  { title: "Referral Credit",        desc: "Refer a friend who joins a plan and get your next visit free.", gold: true },
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

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", vehicle: "", location: "", plan: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const fieldStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === name ? "#c9a84c" : "#1c1c1c",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const planLabel = plans.find(p => p.id === formData.plan)?.freq ?? formData.plan;
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        vehicle: formData.vehicle,
        location: formData.location,
        service: `Maintenance Plan Sign-Up — ${planLabel}`,
        message: formData.notes || `Interested in the ${planLabel} maintenance plan.`,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please call us at (781) 632-5193.");
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-bg relative overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "5rem", borderBottom: "1px solid #1c1c1c" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.045) 0%, transparent 70%)" }} />
        <div style={{ ...wrap, position: "relative", zIndex: 10 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(201,168,76,0.3)", padding: "0.375rem 1rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", color: "#c9a84c", textTransform: "uppercase" }}>
            <span style={{ display: "inline-block", width: "0.25rem", height: "0.25rem", borderRadius: "9999px", background: "#c9a84c", animation: "pulse 2s infinite" }} />
            Exclusive Member Program
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,12vw,7.5rem)", lineHeight: 0.92, color: "#f2ede4", marginBottom: "0.1em", textAlign: "center" }}>
            Always
          </h1>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,12vw,7.5rem)", lineHeight: 0.92, color: "#c9a84c", marginBottom: "1.5rem", textAlign: "center" }}>
            Show-Ready.
          </h1>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.75rem" }} />
          <p style={{ color: "#5a5a5a", fontSize: "clamp(0.9rem,2vw,1.05rem)", lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto 2rem", textAlign: "center" }}>
            Your first detail is at the standard rate — every visit after is billed at your discounted member price. Plus <span style={{ color: "#c9a84c" }}>priority scheduling</span> and a <span style={{ color: "#c9a84c" }}>free visit</span> every time you refer a friend that books a detail with us.
          </p>
          <a href="#plans" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#c9a84c", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}>
            See Plans ↓
          </a>
        </div>
      </section>

      {/* ── What's included ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4.5rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            Every Visit Includes
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "0.5rem", textAlign: "center" }}>
            Your Maintenance Detail
          </h2>
          <p style={{ color: "#3a3a3a", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "28rem", margin: "0 auto 3rem", textAlign: "center" }}>
            A thorough in-and-out refresh. Not a quick rinse — a proper clean that keeps the build-up from ever starting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {included.map((item) => (
              <div key={item.title} style={{ background: item.gold ? "#0c0b07" : "#060606", padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}>
                {item.gold && (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
                )}
                <span style={{ color: "#c9a84c", fontSize: "0.65rem", marginBottom: "0.75rem" }}>✦</span>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.1rem", color: item.gold ? "#c9a84c" : "#f2ede4", marginBottom: "0.5rem", textAlign: "center" }}>
                  {item.title}
                </h3>
                <p style={{ color: item.gold ? "#7a6a30" : "#3a3a3a", fontSize: "0.78rem", lineHeight: 1.6, textAlign: "center" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section id="plans" className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "4.5rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            Choose Your Cadence
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "0.5rem", textAlign: "center" }}>
            Membership Plans
          </h2>
          <p style={{ color: "#3a3a3a", fontSize: "0.82rem", lineHeight: 1.65, maxWidth: "28rem", margin: "0 auto 3rem", textAlign: "center" }}>
            All plans include every maintenance visit item above. Cancel anytime — no contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {plans.map((plan) => (
              <div key={plan.id} style={{ position: "relative", background: plan.popular ? "#0a0905" : "#060606", padding: "2.5rem 1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                {plan.popular && (
                  <>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
                    <div style={{ position: "absolute", top: 0, right: 0, background: "#c9a84c", color: "#000", fontSize: "0.5rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.3rem 0.8rem", fontWeight: 700 }}>
                      {plan.badge}
                    </div>
                  </>
                )}

                <p style={{ color: "#c9a84c", fontSize: "0.55rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {plan.label}
                </p>

                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,8vw,4.5rem)", color: plan.popular ? "#c9a84c" : "#f2ede4", lineHeight: 1, marginTop: "-0.5rem" }}>
                  {plan.price}
                </div>
                <p style={{ color: "#3a3a3a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                  {plan.per}
                </p>

                <div style={{ height: "1px", background: "#1c1c1c", width: "100%", marginBottom: "1.5rem" }} />

                <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "1.05rem", color: "#f2ede4", marginBottom: "0.5rem", textAlign: "center" }}>
                  {plan.tagline}
                </p>
                <p style={{ color: "#3a3a3a", fontSize: "0.78rem", lineHeight: 1.65, marginBottom: "1.75rem", flexGrow: 1, textAlign: "center" }}>
                  {plan.desc}
                </p>

                <div style={{ width: "100%", background: "#060606", border: "1px solid #1c1c1c", padding: "0.875rem 1rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <span style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{plan.visits}</span>
                  <span style={{ color: "#5a5a5a", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>Priority scheduling + referral credit</span>
                </div>

                <a
                  href="#signup"
                  className={plan.popular ? "btn-gold" : ""}
                  style={{
                    width: "100%", height: "50px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.62rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase",
                    ...(plan.popular ? {} : { border: "1px solid #282828", color: "#a8a8a8" }),
                  }}
                  onClick={() => setFormData(f => ({ ...f, plan: plan.id }))}
                >
                  Join — {plan.freq}
                </a>
              </div>
            ))}
          </div>

          {/* Perks callout */}
          <div style={{ marginTop: "1px", background: "#08070a", border: "1px solid #1c1c1c", borderTop: "none", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)", width: "100%", marginBottom: "1rem" }} />
            <p className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", color: "#c9a84c", textAlign: "center" }}>
              Members-only: Priority Scheduling &amp; Referral Credit
            </p>
            <p style={{ color: "#3a3a3a", fontSize: "0.78rem", lineHeight: 1.65, maxWidth: "34rem", textAlign: "center" }}>
              Jump the queue — members always get first access to open slots. And when you refer a friend who signs up, your next visit is on us.
            </p>
          </div>

          {/* Pricing note */}
          <p style={{ marginTop: "1.5rem", color: "#3a3a3a", fontSize: "0.72rem", fontFamily: "var(--font-mono)", lineHeight: 1.7, textAlign: "center" }}>
            <span style={{ color: "#5a5a5a" }}>Pricing note:</span> Your first detail is charged at the standard one-time rate. Every visit after that is billed at your plan&apos;s discounted member price.
          </p>
        </div>
      </section>

      {/* ── Why it makes sense ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4.5rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Why It Works
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "3rem" }}>
            The Logic of Consistent Clean
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                n: "I",
                title: "Prevents Buildup",
                desc: "Dirt, grime, and contaminants compound over time and permanently damage paint and fabric. Regular maintenance stops the cycle before it starts.",
              },
              {
                n: "II",
                title: "Protects Your Investment",
                desc: "A well-maintained car holds its value. Buyers notice. Dealers notice. Regular cleaning is the cheapest form of paint protection you can buy.",
              },
              {
                n: "III",
                title: "Zero Effort for You",
                desc: "We come to you on a set schedule. No booking reminders, no letting it go too long. Your car is always ready — you just drive it.",
              },
            ].map((item, i) => (
              <div key={item.title} className={i > 0 ? "md-border-l" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid #1c1c1c" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "3rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "1rem" }}>
                  {item.n}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.3rem", color: "#f2ede4", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sign-up form ── */}
      <section id="signup" className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "4.5rem 0" }}>
        <div style={{ ...wrap, maxWidth: "40rem" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "0.5rem" }}>
            Sign Up for a Plan
          </h2>
          <p style={{ color: "#3a3a3a", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "2.5rem" }}>
            Fill this out and Matt will reach out within 1–2 hours to confirm your schedule, price your vehicle, and get your first visit on the calendar.
          </p>

          {submitted ? (
            <div style={{ border: "1px solid rgba(201,168,76,0.3)", background: "#0a0a0a", padding: "3.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="gold-rule" style={{ width: "3rem", margin: "0 auto 1.5rem" }} />
              <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2rem", color: "#f2ede4", marginBottom: "0.75rem" }}>
                You&apos;re on the list.
              </h3>
              <p style={{ color: "#5a5a5a", fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "22rem" }}>
                Matt will be in touch within 1–2 hours to confirm your plan details and schedule your first visit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: "left" }}>
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
                <label style={labelStyle}>Email <span style={{ color: "#c9a84c" }}>*</span></label>
                <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={fieldStyle("email")} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Vehicle <span style={{ color: "#c9a84c" }}>*</span></label>
                  <input type="text" name="vehicle" required placeholder="2022 BMW M3" value={formData.vehicle} onChange={handleChange} onFocus={() => setFocused("vehicle")} onBlur={() => setFocused(null)} style={fieldStyle("vehicle")} />
                </div>
                <div>
                  <label style={labelStyle}>Location / City <span style={{ color: "#c9a84c" }}>*</span></label>
                  <input type="text" name="location" required placeholder="Danvers, MA" value={formData.location} onChange={handleChange} onFocus={() => setFocused("location")} onBlur={() => setFocused(null)} style={fieldStyle("location")} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Plan <span style={{ color: "#c9a84c" }}>*</span></label>
                <select name="plan" required value={formData.plan} onChange={handleChange} onFocus={() => setFocused("plan")} onBlur={() => setFocused(null)} style={{ ...fieldStyle("plan"), cursor: "pointer" }}>
                  <option value="" style={{ background: "#0a0a0a" }}>Select a plan...</option>
                  <option value="biweekly" style={{ background: "#0a0a0a" }}>Bi-Weekly — $59 / visit</option>
                  <option value="monthly" style={{ background: "#0a0a0a" }}>Monthly — $99 / visit</option>
                  <option value="bimonthly" style={{ background: "#0a0a0a" }}>Every 2 Months — $149 / visit</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Anything else we should know?</label>
                <textarea name="notes" rows={4} placeholder="Vehicle condition, preferred days/times, questions..." value={formData.notes} onChange={handleChange} onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)} style={{ ...fieldStyle("notes"), resize: "none" }} />
              </div>

              <button type="submit" disabled={loading} className="btn-gold" style={{ width: "100%", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontFamily: "var(--font-mono)", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? "Sending..." : "Sign Me Up"}
              </button>

              {error && (
                <p style={{ color: "#e57373", fontSize: "0.72rem", textAlign: "center", fontFamily: "var(--font-mono)" }}>{error}</p>
              )}

              <p style={{ color: "#2a2a2a", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
                No contracts. Cancel anytime. We&apos;ll confirm your schedule before your first visit.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#5a5a5a", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Questions before signing up? Reach out directly.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+17816325193" className="btn-gold" style={{ height: "50px", padding: "0 2rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontFamily: "var(--font-mono)" }}>
              Call (781) 632-5193
            </a>
            <Link href="/contact" style={{ height: "50px", padding: "0 2rem", display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              General Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
