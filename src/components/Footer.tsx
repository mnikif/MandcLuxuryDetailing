import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#2a2a2a] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <span className="text-[#c9a84c] font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-widest uppercase block">
              M&amp;C
            </span>
            <span className="text-white text-xs tracking-[0.3em] uppercase font-light">
              Luxury Detailing
            </span>
          </div>
          <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs">
            Premium mobile detailing that comes to you. Serving Beverly, MA and the entire North Shore.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-5 font-medium">Navigation</h4>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact & Book" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-[#9ca3af] text-sm hover:text-[#c9a84c] transition-colors tracking-wide">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-5 font-medium">Contact</h4>
          <ul className="space-y-3 text-[#9ca3af] text-sm">
            <li>Beverly, MA (North Shore)</li>
            <li>
              <a href="tel:+17816325193" className="hover:text-[#c9a84c] transition-colors">
                (781) 632-5193
              </a>
            </li>
            <li>
              <a href="mailto:info@mandcluxurydetailing.com" className="hover:text-[#c9a84c] transition-colors">
                info@mandcluxurydetailing.com
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#c9a84c] transition-colors text-xs tracking-widest uppercase"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#c9a84c] transition-colors text-xs tracking-widest uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#9ca3af] text-xs tracking-wide">
          © {new Date().getFullYear()} M&amp;C Luxury Detailing. All rights reserved.
        </p>
        <p className="text-[#9ca3af] text-xs tracking-wide">Beverly, MA · North Shore · Mobile Service</p>
      </div>
    </footer>
  );
}
