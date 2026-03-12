"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",         label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Book Now" },
];

const IG_URL = "https://instagram.com/mcluxurydetailing";
const FB_URL = "https://www.facebook.com/profile.php?id=61577181187495";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background:     scrolled ? "rgba(6,6,6,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        borderBottom:   scrolled ? "1px solid #1c1c1c" : "1px solid transparent",
      }}
    >
      {/* 3-column grid: logo | center links | right actions
          Matches the same maxWidth:"56rem" margin:"0 auto" as all page content */}
      <nav style={{
        width: "100%",
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "0 1.25rem",
        height: "4rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
      }}>

        {/* Col 1 — Logo (left-aligned within its cell) */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none", justifySelf: "start" }}>
          <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#c9a84c", lineHeight: 1 }}>
            M&amp;C
          </span>
          <span style={{ fontSize: "0.48rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: "var(--font-mono)", lineHeight: 1.2, marginTop: "1px" }}>
            Luxury Detailing
          </span>
        </Link>

        {/* Col 2 — Nav links, perfectly centered (desktop only, hidden on mobile) */}
        <ul className="hidden md:flex" style={{ alignItems: "center", gap: "1.75rem", listStyle: "none", margin: 0, padding: 0, justifyContent: "center" }}>
          {links.filter(l => l.label !== "Book Now").map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className="hover:text-[#f2ede4]" style={{ fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", color: active ? "#c9a84c" : "#5a5a5a", transition: "color 0.2s", textDecoration: "none" }}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Col 2 placeholder on mobile so col 3 stays right */}
        <div className="md:hidden" />

        {/* Col 3 — Book Now + icons (right-aligned within its cell) */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", justifySelf: "end" }}>
          <Link href="/contact" className="btn-gold" style={{ height: "36px", padding: "0 1.25rem", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em" }}>
            Book Now
          </Link>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#c9a84c", opacity: 0.7, transition: "opacity 0.2s", display: "flex", alignItems: "center" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
            <InstagramIcon size={18} />
          </a>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#c9a84c", opacity: 0.7, transition: "opacity 0.2s", display: "flex", alignItems: "center" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
            <FacebookIcon size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
