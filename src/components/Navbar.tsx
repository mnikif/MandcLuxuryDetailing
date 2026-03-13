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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background:     scrolled || menuOpen ? "rgba(6,6,6,0.98)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(1.2)" : "none",
          borderBottom:   scrolled || menuOpen ? "1px solid #1c1c1c" : "1px solid transparent",
        }}
      >
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

          {/* Logo */}
          <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none", justifySelf: "start" }}>
            <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.5rem", color: "#c9a84c", lineHeight: 1 }}>
              M&amp;C
            </span>
            <span style={{ fontSize: "0.48rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#3a3a3a", fontFamily: "var(--font-mono)", lineHeight: 1.2, marginTop: "1px" }}>
              Luxury Detailing
            </span>
          </Link>

          {/* Desktop nav links */}
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

          {/* Mobile center placeholder */}
          <div className="md:hidden" />

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", justifySelf: "end" }}>
            {/* Desktop only */}
            <Link href="/contact" className="btn-gold hidden md:inline-flex" style={{ height: "36px", padding: "0 1.25rem", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em" }}>
              Book Now
            </Link>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden md:flex" style={{ color: "#c9a84c", opacity: 0.7, transition: "opacity 0.2s", alignItems: "center" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
              <InstagramIcon size={18} />
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hidden md:flex" style={{ color: "#c9a84c", opacity: 0.7, transition: "opacity 0.2s", alignItems: "center" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
              <FacebookIcon size={18} />
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(m => !m)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "44px", height: "44px", background: "none", border: "none", cursor: "pointer", padding: 0, gap: "5px" }}
            >
              <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", transition: "transform 0.25s, opacity 0.25s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", transition: "opacity 0.25s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", transition: "transform 0.25s, opacity 0.25s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: "#060606",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          paddingTop: "4rem",
        }}
      >
        {/* Nav links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem" }}>
          {links.map(({ href, label }) => {
            const active = pathname === href;
            const isBook = label === "Book Now";
            return (
              <Link
                key={href}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid #111",
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 8vw, 2.4rem)",
                  color: isBook ? "#c9a84c" : (active ? "#c9a84c" : "#f2ede4"),
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                {label}
                <span style={{ fontSize: "1rem", color: "#3a3a3a", fontFamily: "var(--font-mono)", fontStyle: "normal" }}>→</span>
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div style={{ padding: "1.5rem 2rem", borderTop: "1px solid #1c1c1c", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="tel:+17816325193" style={{ color: "#3a3a3a", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
            (781) 632-5193
          </a>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#c9a84c", opacity: 0.7 }}>
              <InstagramIcon size={20} />
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "#c9a84c", opacity: 0.7 }}>
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
