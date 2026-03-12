"use client";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div
      className="sticky-cta-bar md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{ background: "#060606", borderTop: "1px solid #1c1c1c" }}
    >
      <div className="flex h-[60px]">
        <a
          href="tel:+17816325193"
          className="flex-1 flex items-center justify-center gap-2 transition-opacity active:opacity-70"
          style={{ color: "#c9a84c", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", borderRight: "1px solid #1c1c1c" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="btn-gold flex-1 flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.2em" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.083 3.218-4.417 3.218-7.327a6.75 6.75 0 00-13.5 0c0 2.91 1.274 5.244 3.218 7.327a19.579 19.579 0 002.682 2.282 16.975 16.975 0 001.144.742z" clipRule="evenodd" />
          </svg>
          Book Now
        </Link>
      </div>
    </div>
  );
}
