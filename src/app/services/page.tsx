import Link from "next/link";

const packages = [
  {
    name: "Exterior Refresh",
    price: "Starting at $75",
    duration: "1–2 hrs",
    features: [
      "Hand wash & dry",
      "Wheel & tire cleaning",
      "Window clean (exterior)",
      "Tire dressing",
      "Spot clay bar treatment",
    ],
    popular: false,
  },
  {
    name: "Full Interior",
    price: "Starting at $100",
    duration: "2–3 hrs",
    features: [
      "Deep vacuum (seats, floors, trunk)",
      "Dashboard & console wipe-down",
      "Door panel cleaning",
      "Window clean (interior)",
      "Steam clean (high-touch areas)",
      "Air freshener",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "Starting at $175",
    duration: "3–5 hrs",
    features: [
      "Everything in Exterior Refresh",
      "Everything in Full Interior",
      "Clay bar treatment",
      "Paint sealant / wax",
      "Leather conditioning",
      "Engine bay wipe-down",
    ],
    popular: true,
  },
  {
    name: "Paint Correction",
    price: "Starting at $300",
    duration: "5–8 hrs",
    features: [
      "Single or multi-stage machine polish",
      "Swirl & scratch removal",
      "Oxidation correction",
      "Paint sealant application",
      "Before & after photos",
      "Custom quote by vehicle",
    ],
    popular: false,
  },
  {
    name: "Ceramic Coating",
    price: "Starting at $500",
    duration: "Full day",
    features: [
      "Surface decontamination",
      "Paint correction prep",
      "Professional ceramic coating application",
      "2–5 year protection",
      "Hydrophobic finish",
      "Certificate of application",
    ],
    popular: false,
  },
  {
    name: "Add-Ons",
    price: "Varies",
    duration: "Varies",
    features: [
      "Odor elimination — $50",
      "Pet hair removal — $40+",
      "Headlight restoration — $60",
      "Engine bay detail — $75",
      "Trunk detail — $40",
      "Convertible top treatment — $60",
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          Services & Pricing
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-6" />
        <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto leading-relaxed">
          Transparent pricing, no surprises. All services are mobile — we come to your location across the North Shore.
        </p>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-[#111111] border p-8 flex flex-col transition-all duration-300 hover:border-[#c9a84c]/40 ${
                pkg.popular ? "border-[#c9a84c]" : "border-[#2a2a2a]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-black text-[10px] tracking-widest uppercase px-4 py-1 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white font-bold mb-1">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-[#c9a84c] text-xl font-semibold">{pkg.price}</span>
                  <span className="text-[#9ca3af] text-xs tracking-wide">{pkg.duration}</span>
                </div>
              </div>
              <div className="w-full h-px bg-[#2a2a2a] mb-6" />
              <ul className="space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#9ca3af] text-sm">
                    <span className="text-[#c9a84c] mt-0.5 text-xs">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 text-center py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#c9a84c] text-black hover:bg-[#f5e6c8]"
                    : "border border-[#2a2a2a] text-white hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9ca3af] text-sm leading-relaxed">
            <span className="text-[#c9a84c] font-medium">Pricing note:</span> All prices are starting rates. Final pricing depends on vehicle size, condition, and location. Trucks, SUVs, and heavily soiled vehicles may incur additional charges. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a] text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-bold mb-6">
          Not Sure Which Package?
        </h2>
        <p className="text-[#9ca3af] mb-8 max-w-xl mx-auto">
          Reach out and we&apos;ll recommend the right service for your vehicle and budget.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#c9a84c] text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
        >
          Get a Free Quote
        </Link>
      </section>
    </>
  );
}
