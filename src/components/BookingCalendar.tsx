"use client";
import { useState, useEffect, useRef } from "react";

type AvailStatus = "available" | "limited" | "full" | "closed";
type AvailMap = Record<string, AvailStatus>;

interface BookingCalendarProps {
  value: string;
  onChange: (date: string) => void;
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function BookingCalendar({ value, onChange }: BookingCalendarProps) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [availability, setAvailability] = useState<AvailMap>({});
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Fetch availability whenever view month changes
  useEffect(() => {
    const ym = `${viewMonth.getFullYear()}-${String(viewMonth.getMonth() + 1).padStart(2, "0")}`;
    setLoading(true);
    fetch(`/api/availability?month=${ym}`)
      .then((r) => r.json())
      .then((data) => setAvailability(data))
      .catch(() => setAvailability({}))
      .finally(() => setLoading(false));
  }, [viewMonth]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOffset = new Date(year, month, 1).getDay();

  const monthLabel = viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const prevMonth = () => setViewMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setViewMonth(new Date(year, month + 1, 1));

  const formatDisplay = (d: string) => {
    if (!d) return "";
    const [y, m, day] = d.split("-").map(Number);
    return new Date(y, m - 1, day).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDayClick = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const d = new Date(year, month, day);
    if (d < today) return;
    const avail = availability[dateStr];
    if (avail === "full" || avail === "closed") return;
    onChange(dateStr);
    setOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "#0a0a0a",
          border: `1px solid ${open ? "#c9a84c" : "#1c1c1c"}`,
          color: value ? "#f2ede4" : "#3a3a3a",
          fontSize: "0.875rem",
          padding: "0.875rem 1rem",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "inherit",
          transition: "border-color 0.2s",
        }}
      >
        <span>{value ? formatDisplay(value) : "Select a date..."}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {/* Calendar dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            background: "#0a0a0a",
            border: "1px solid #1c1c1c",
            zIndex: 200,
            padding: "1.25rem",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
          }}
        >
          {/* Month navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <button
              type="button"
              onClick={prevMonth}
              style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: "0.25rem 0.625rem", fontSize: "1rem", lineHeight: 1 }}
            >
              ←
            </button>
            <span
              className="font-[family-name:var(--font-cormorant)]"
              style={{ fontStyle: "italic", fontSize: "1.15rem", color: "#f2ede4", letterSpacing: "0.02em" }}
            >
              {monthLabel}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              style={{ background: "none", border: "none", color: "#c9a84c", cursor: "pointer", padding: "0.25rem 0.625rem", fontSize: "1rem", lineHeight: 1 }}
            >
              →
            </button>
          </div>

          {/* Weekday headers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: "0.375rem" }}>
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                style={{
                  textAlign: "center",
                  fontSize: "0.52rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.12em",
                  color: "#3a3a3a",
                  padding: "0.375rem 0",
                  textTransform: "uppercase",
                }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`e${i}`} />
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const dayDate = new Date(year, month, day);
              const isPast = dayDate < today;
              const isToday = dayDate.getTime() === today.getTime();
              const avail = availability[dateStr] as AvailStatus | undefined;
              const isUnavailable = isPast || avail === "full" || avail === "closed";
              const isSelected = value === dateStr;

              let color = "#f2ede4";
              let bg = "transparent";
              let cursor = "pointer";
              let border = "1px solid transparent";

              if (isSelected) {
                bg = "#c9a84c";
                color = "#060606";
              } else if (isUnavailable) {
                color = "#252525";
                cursor = "default";
              } else if (isToday) {
                border = "1px solid rgba(201,168,76,0.35)";
              }

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => !isUnavailable && handleDayClick(day)}
                  disabled={isUnavailable}
                  title={
                    avail === "closed" ? "Closed"
                    : avail === "full" ? "Fully booked"
                    : avail === "limited" ? "1 spot left"
                    : isPast ? ""
                    : "Available"
                  }
                  style={{
                    background: bg,
                    color,
                    border,
                    cursor,
                    padding: "0.5rem 0",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                    transition: "background 0.15s, color 0.15s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isUnavailable && !isSelected) {
                      e.currentTarget.style.background = "rgba(201,168,76,0.12)";
                      e.currentTarget.style.color = "#c9a84c";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isUnavailable && !isSelected) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#f2ede4";
                    }
                  }}
                >
                  {day}
                  {/* availability dot */}
                  {!isUnavailable && !isPast && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "3px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: isSelected ? "#060606" : avail === "limited" ? "#e0a840" : "#c9a84c",
                        opacity: isSelected ? 0.7 : 0.5,
                        display: "block",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: "1rem",
              paddingTop: "0.875rem",
              borderTop: "1px solid #111",
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { dot: "#c9a84c", label: "Available" },
              { dot: "#e0a840", label: "Limited" },
              { dot: "#252525", label: "Unavailable" },
            ].map(({ dot, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: dot,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "#3a3a3a",
                    fontSize: "0.52rem",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Loading overlay */}
          {loading && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(6,6,6,0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#c9a84c", fontSize: "0.62rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}>
                Loading...
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
