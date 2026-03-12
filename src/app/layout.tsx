import type { Metadata, Viewport } from "next";
import { Cormorant, Barlow, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&C Luxury Detailing | Mobile Car Detailing — Danvers, MA",
  description:
    "Premium mobile car detailing in Danvers, MA and the North Shore. We come to you — showroom-quality results at your door.",
  keywords:
    "car detailing Danvers MA, mobile detailing North Shore, luxury car detailing Massachusetts, auto detailing Salem Danvers Peabody",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060606",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable} ${dmMono.variable}`}>
      <body style={{ backgroundColor: "#060606", color: "#f2ede4" }}>
        <Navbar />
        <main className="pb-[72px] md:pb-0">{children}</main>
        <div className="pb-[72px] md:pb-0">
          <Footer />
        </div>
        <StickyMobileCTA />
      </body>
    </html>
  );
}
