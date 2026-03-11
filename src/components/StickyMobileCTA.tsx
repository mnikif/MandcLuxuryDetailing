"use client";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#2a2a2a]"
         style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a
        href="tel:+17816325193"
        className="flex-1 flex items-center justify-center gap-2 bg-[#0f0f0f] text-[#c9a84c] py-4 text-xs tracking-widest uppercase font-semibold active:bg-[#1a1a1a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
        Call Now
      </a>
      <div className="w-px bg-[#2a2a2a]" />
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-[#c9a84c] text-black py-4 text-xs tracking-widest uppercase font-bold active:bg-[#f5e6c8] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
          <path d="M6.75 3a2.25 2.25 0 00-2.25 2.25v.75H3a.75.75 0 000 1.5h1.5v1.5H3a.75.75 0 000 1.5h1.5v1.5H3a.75.75 0 000 1.5h1.5v.75a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 15.75V5.25A2.25 2.25 0 0017.25 3H6.75zm-.75 9.75V7.5h9v5.25a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75z" />
        </svg>
        Book Now
      </Link>
    </div>
  );
}
