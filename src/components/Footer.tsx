import Link from "next/link";

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/services",   label: "Services" },
  { href: "/locations",  label: "Locations" },
  { href: "/gallery",    label: "Gallery" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Book Now" },
];

const cityLinks = [
  { slug: "beverly",    name: "Beverly" },
  { slug: "salem",      name: "Salem" },
  { slug: "danvers",    name: "Danvers" },
  { slug: "peabody",    name: "Peabody" },
  { slug: "gloucester", name: "Gloucester" },
  { slug: "manchester", name: "Manchester" },
  { slug: "marblehead", name: "Marblehead" },
  { slug: "swampscott", name: "Swampscott" },
  { slug: "hamilton",   name: "Hamilton" },
  { slug: "wenham",     name: "Wenham" },
  { slug: "lynn",       name: "Lynn" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#030303", borderTop: "1px solid #1c1c1c" }}>

      {/* Main footer grid */}
      <div style={{ width: "100%", maxWidth: "56rem", margin: "0 auto", padding: "3.5rem 1.25rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-4" style={{ gap: "2.5rem" }}>

          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ marginBottom: "1.25rem", textAlign: "center" }}>
              <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2rem", color: "#c9a84c", lineHeight: 1, letterSpacing: "0.05em" }}>
                M&amp;C
              </div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#2a2a2a", marginTop: "2px", textAlign: "center" }}>
                Luxury Detailing
              </div>
            </div>
            <p style={{ color: "#3a3a3a", fontSize: "0.8rem", lineHeight: 1.7, textAlign: "center" }}>
              Premium mobile detailing. We come to you — Danvers, MA and the entire North Shore.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              <a href="https://instagram.com/mcluxurydetailing" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c]" style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", transition: "color 0.2s" }}>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577181187495" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c]" style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", transition: "color 0.2s" }}>
                Facebook
              </a>
              <a href="https://www.google.com/maps/place/M%26C+Luxury+Detailing/@42.4614735,-70.8795505,15z" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a84c]" style={{ color: "#3a3a3a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", transition: "color 0.2s" }}>
                Google
              </a>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h4 style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem", textAlign: "center" }}>
              Navigate
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#c9a84c] transition-colors" style={{ color: "#3a3a3a", fontSize: "0.82rem", display: "block", textAlign: "center" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h4 style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem", textAlign: "center" }}>
              Service Areas
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "center" }}>
              {cityLinks.map(({ slug, name }) => (
                <li key={slug}>
                  <Link href={`/locations/${slug}`} className="hover:text-[#c9a84c] transition-colors" style={{ color: "#3a3a3a", fontSize: "0.78rem", display: "block", textAlign: "center" }}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h4 style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem", textAlign: "center" }}>
              Contact
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
              <li>
                <a href="tel:+17816325193" className="font-[family-name:var(--font-cormorant)] italic font-bold hover:text-[#c9a84c] transition-colors" style={{ color: "#f2ede4", fontSize: "1.4rem", lineHeight: 1, display: "block", textAlign: "center" }}>
                  (781) 632-5193
                </a>
              </li>
              <li>
                <a href="mailto:mandcluxurydetailing@gmail.com" className="hover:text-[#c9a84c] transition-colors break-all" style={{ color: "#3a3a3a", fontSize: "0.78rem", textAlign: "center" }}>
                  mandcluxurydetailing@gmail.com
                </a>
              </li>
              <li style={{ color: "#3a3a3a", fontSize: "0.78rem", textAlign: "center" }}>Danvers, MA — North Shore</li>
            </ul>
            <Link href="/contact" className="btn-gold" style={{ height: "40px", padding: "0 1.5rem", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
              Book a Detail
            </Link>
          </div>
        </div>
      </div>

      {/* SMS consent */}
      <div style={{ width: "100%", maxWidth: "56rem", margin: "0 auto", padding: "0.75rem 1.25rem", borderTop: "1px solid #0d0d0d", textAlign: "center" }}>
        <p style={{ color: "#1e1e1e", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", lineHeight: 1.8 }}>
          By providing your phone number, you agree to receive a one-time text message from M&amp;C Luxury Detailing requesting a review following your service appointment. Message and data rates may apply.
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{ width: "100%", maxWidth: "56rem", margin: "0 auto", padding: "1.25rem 1.25rem", borderTop: "1px solid #111", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", textAlign: "center" }} className="sm:flex-row sm:justify-between">
        <p style={{ color: "#222", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
          © {new Date().getFullYear()} M&amp;C Luxury Detailing. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#222", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textAlign: "center" }}>
            Danvers, MA · North Shore · Mobile Service
          </p>
          <Link href="/privacy-policy" className="hover:text-[#c9a84c] transition-colors" style={{ color: "#222", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
