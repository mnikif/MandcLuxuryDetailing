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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
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
                    pathname === href
                      ? "text-[#c9a84c]"
                      : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#2a2a2a] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    pathname === href ? "text-[#c9a84c]" : "text-[#9ca3af]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
