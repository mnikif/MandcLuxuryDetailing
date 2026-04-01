import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Mobile Car Detailing in Danvers, MA | M&C Luxury Detailing",
  description:
    "Book a mobile car detail in Danvers, Beverly, Salem or anywhere on the North Shore. Fast response, free quotes. Call (781) 632-5193 or submit our quick form.",
  alternates: {
    canonical: "https://www.mandcluxurydetailing.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "M&C Luxury Detailing",
            "url": "https://www.mandcluxurydetailing.com",
            "telephone": "+17816325193",
            "email": "mandcluxurydetailing@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.5751,
              "longitude": -70.9495,
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+17816325193",
              "contactType": "customer service",
              "areaServed": "North Shore Massachusetts",
              "availableLanguage": "English",
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "10:00",
                "closes": "17:00",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
