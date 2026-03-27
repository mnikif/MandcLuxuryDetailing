import type { Metadata, Viewport } from "next";
import { Cormorant, Barlow, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Analytics } from "@vercel/analytics/react";
import PostHogProvider from "@/components/PostHogProvider";

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
  metadataBase: new URL('https://www.mandcluxurydetailing.com'),
  title: {
    template: '%s | M&C Luxury Detailing',
    default: 'Mobile Car Detailing in Danvers, MA | M&C Luxury Detailing',
  },
  description: 'Professional mobile car detailing serving Danvers, Beverly, Salem, Marblehead, and the North Shore of Massachusetts. Book online — we come to you.',
  openGraph: {
    title: 'Mobile Car Detailing — North Shore MA | M&C Luxury Detailing',
    description: 'Professional mobile detailing in Beverly, Danvers, Salem & the entire North Shore. Book online.',
    url: 'https://www.mandcluxurydetailing.com',
    siteName: 'M&C Luxury Detailing',
    images: [
      {
        url: 'https://www.mandcluxurydetailing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M&C Luxury Detailing — Mobile Car Detailing North Shore MA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Car Detailing — North Shore MA',
    description: 'Professional mobile detailing. We come to you.',
    images: ['https://www.mandcluxurydetailing.com/og-image.jpg'],
  },
  verification: {
    google: "JpoHpAOWAGNRSYUWadjT0rm-ncb0BrFjYF4BIxErfYE",
  },
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
        <PostHogProvider>
          <Navbar />
          <main className="pb-[72px] md:pb-0">{children}</main>
          <div className="pb-[72px] md:pb-0">
            <Footer />
          </div>
          <StickyMobileCTA />
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
