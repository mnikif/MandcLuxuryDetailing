import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&C Luxury Detailing | Mobile Car Detailing - Beverly, MA",
  description:
    "Premium mobile car detailing in Beverly, MA and the North Shore. We come to you — showroom-quality results at your door.",
  keywords:
    "car detailing Beverly MA, mobile detailing North Shore, luxury car detailing Massachusetts, auto detailing Salem Danvers Peabody",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white font-[family-name:var(--font-inter)] antialiased">
        <Navbar />
        {/* pb-[calc(56px+env(safe-area-inset-bottom))] reserves space for sticky mobile CTA */}
        <main className="pb-[56px] md:pb-0">{children}</main>
        <div className="pb-[56px] md:pb-0">
          <Footer />
        </div>
        <StickyMobileCTA />
      </body>
    </html>
  );
}
