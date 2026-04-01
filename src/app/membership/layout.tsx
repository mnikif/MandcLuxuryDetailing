import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recurring Car Detailing Plans — Danvers, MA",
  description: "Bi-weekly, monthly & bi-monthly mobile detailing plans in Danvers, MA. Always-clean car, zero effort. Save vs. one-time pricing across North Shore Massachusetts.",
  alternates: {
    canonical: "https://www.mandcluxurydetailing.com/membership",
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Car Detailing Membership Plans",
            "provider": {
              "@type": "LocalBusiness",
              "name": "M&C Luxury Detailing",
              "url": "https://www.mandcluxurydetailing.com",
              "telephone": "+17816325193",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Danvers",
                "addressRegion": "MA",
                "postalCode": "01923",
                "addressCountry": "US",
              },
            },
            "areaServed": {
              "@type": "State",
              "name": "North Shore Massachusetts",
            },
            "description": "Recurring mobile car detailing plans — bi-weekly, monthly, or bi-monthly — for North Shore Massachusetts vehicle owners.",
            "offers": [
              {
                "@type": "Offer",
                "name": "Bi-Weekly Detailing Plan",
                "price": "59",
                "priceCurrency": "USD",
                "description": "Mobile detailing every two weeks. ~26 visits per year.",
              },
              {
                "@type": "Offer",
                "name": "Monthly Detailing Plan",
                "price": "99",
                "priceCurrency": "USD",
                "description": "Mobile detailing once a month. 12 visits per year.",
              },
              {
                "@type": "Offer",
                "name": "Bi-Monthly Detailing Plan",
                "price": "129",
                "priceCurrency": "USD",
                "description": "Mobile detailing every two months. 6 visits per year.",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
