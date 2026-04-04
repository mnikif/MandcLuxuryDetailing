"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  label?: string;
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [pos, setPos] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updatePos(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div
        ref={containerRef}
        style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", cursor: "ew-resize", userSelect: "none" }}
        onMouseDown={(e) => { onMouseDown(); updatePos(e.clientX); }}
        onTouchStart={(e) => { onTouchStart(e); updatePos(e.touches[0].clientX); }}
      >
        {/* Before image — full width underneath */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={before} alt="Before" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>

        {/* After image — clipped to right of handle */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image src={after} alt="After" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>

        {/* Divider line */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: "2px", background: "#c9a84c", transform: "translateX(-50%)", pointerEvents: "none" }} />

        {/* Handle */}
        <div style={{
          position: "absolute", top: "50%", left: `${pos}%`,
          transform: "translate(-50%, -50%)",
          width: "40px", height: "40px",
          background: "#c9a84c",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
          boxShadow: "0 2px 12px rgba(0,0,0,0.6)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#060606">
            <path d="M8 5l-7 7 7 7M16 5l7 7-7 7" stroke="#060606" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>

        {/* Before / After labels */}
        <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", background: "rgba(6,6,6,0.75)", color: "#f2ede4", fontSize: "0.55rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.3rem 0.6rem", opacity: pos > 15 ? 1 : 0, transition: "opacity 0.2s" }}>
          Before
        </div>
        <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", background: "rgba(201,168,76,0.85)", color: "#060606", fontSize: "0.55rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.3rem 0.6rem", opacity: pos < 85 ? 1 : 0, transition: "opacity 0.2s" }}>
          After
        </div>
      </div>

      {label && (
        <p style={{ color: "#3a3a3a", fontSize: "0.58rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center" }}>
          {label}
        </p>
      )}
    </div>
  );
}
