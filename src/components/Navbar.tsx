"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book Now" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[#c9a84c] font-[family-name:var(--font-playfair)] text-xl font-bold tracking-widest uppercase">
            M&amp;C
          </span>
          <span className="text-white text-[10px] tracking-[0.3em] uppercase font-light">
            Luxury Detailing
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) =>
            label === "Book Now" ? (
              <li key={href}>
                <Link
                  href={href}
                  className="border border-[#c9a84c] text-[#c9a84c] px-5 py-2 text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300 font-medium"
                >
                  {label}
                </Link>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                    pathname === href ? "text-[#c9a84c]" : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile: hamburger only (CTA handled by sticky bottom bar) */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-full h-0.5 bg-[#c9a84c] origin-center transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-[#c9a84c] transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-[#c9a84c] origin-center transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — CSS-driven slide, no flicker */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0d0d] border-t border-[#2a2a2a] px-5 py-6">
          <ul className="flex flex-col gap-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center py-3.5 text-sm tracking-widest uppercase border-b border-[#1a1a1a] last:border-0 transition-colors ${
                    pathname === href
                      ? "text-[#c9a84c]"
                      : "text-[#9ca3af] active:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
