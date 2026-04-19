"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROMO_END = new Date("2026-04-25T23:59:59");

function useCountdown(end: Date) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });
  useEffect(() => {
    function calc() {
      const diff = end.getTime() - Date.now();
      if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0, expired: true }); return; }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        expired: false,
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [end]);
  return t;
}

const Pad = (n: number) => String(n).padStart(2, "0");

export default function StickyMobileCTA() {
  const { d, h, m, s, expired } = useCountdown(PROMO_END);
  if (expired) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{ background: "#060606", borderTop: "1px solid rgba(201,168,76,0.35)" }}
    >
      {/* Promo strip */}
      <div
        style={{
          background: "rgba(201,168,76,0.07)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#dc2626",
              flexShrink: 0,
              animation: "pulse 1.5s infinite",
            }}
          />
          <span
            style={{
              color: "#c9a84c",
              fontSize: "0.65rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            15% Off Any Detail
          </span>
        </div>

        {/* Countdown */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}>
          {[
            { v: d, l: "d" },
            { v: h, l: "h" },
            { v: m, l: "m" },
            { v: s, l: "s" },
          ].map(({ v, l }, i) => (
            <div key={l} style={{ display: "flex", alignItems: "baseline" }}>
              {i > 0 && (
                <span style={{ color: "#565656", fontSize: "0.65rem", fontFamily: "var(--font-mono)", margin: "0 1px" }}>:</span>
              )}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "22px" }}>
                <span
                  style={{
                    color: "#f2ede4",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {Pad(v)}
                </span>
                <span
                  style={{
                    color: "#565656",
                    fontSize: "0.45rem",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    lineHeight: 1.3,
                  }}
                >
                  {l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action row */}
      <div className="flex" style={{ height: "56px" }}>
        <a
          href="tel:+17816325193"
          className="flex-1 flex items-center justify-center active:opacity-70"
          style={{
            color: "#7a7a7a",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderRight: "1px solid #1c1c1c",
          }}
        >
          Call
        </a>
        <Link
          href="/contact"
          className="flex-[2] flex items-center justify-center btn-gold"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Claim 15% Off — Ends Soon
        </Link>
      </div>
    </div>
  );
}
