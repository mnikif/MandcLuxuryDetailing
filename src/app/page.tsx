import Link from "next/link";

const services = [
  {
    title: "Exterior Detail",
    desc: "Hand wash, clay bar, polish, and sealant for a mirror finish that lasts.",
    icon: "✦",
  },
  {
    title: "Interior Detail",
    desc: "Deep vacuum, steam clean, leather conditioning, and odor elimination.",
    icon: "✦",
  },
  {
    title: "Full Detail",
    desc: "Our complete inside-and-out transformation — the ultimate treatment.",
    icon: "✦",
  },
  {
    title: "Paint Correction",
    desc: "Multi-stage machine polish to remove swirls, scratches, and oxidation.",
    icon: "✦",
  },
];

const stats = [
  { value: "500+", label: "Vehicles Detailed" },
  { value: "5★", label: "Average Rating" },
  { value: "3+", label: "Years in Business" },
  { value: "100%", label: "Mobile Service" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6 font-medium">
            Beverly, MA · North Shore
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6">
            Your Car Deserves
            <br />
            <span className="text-[#c9a84c]">Perfection</span>
          </h1>
          <p className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Premium mobile detailing that comes to you. Showroom-quality results — at your driveway, office, or anywhere on the North Shore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c9a84c] text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
            >
              Book a Detail
            </Link>
            <Link
              href="/services"
              className="border border-[#2a2a2a] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#111111] border-y border-[#2a2a2a] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#c9a84c] font-bold mb-1">
                {s.value}
              </div>
              <div className="text-[#9ca3af] text-xs tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold">
              Our Services
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#111111] border border-[#2a2a2a] p-8 group hover:border-[#c9a84c]/40 transition-all duration-300"
              >
                <div className="text-[#c9a84c] text-lg mb-4">{s.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-3 font-semibold group-hover:text-[#c9a84c] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-[#c9a84c] text-sm tracking-widest uppercase border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors"
            >
              See All Services & Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mobile Section */}
      <section className="py-24 px-6 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Why M&amp;C</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold mb-6">
            We Come to You
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10" />
          <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mx-auto mb-16">
            No need to drop your car off and wait. We bring professional-grade equipment and expertise directly to your location — your home, office, or anywhere in the North Shore area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Convenient", desc: "Book online, we show up fully equipped. No waiting rooms, no drop-offs." },
              { title: "Professional", desc: "Trained detailers using professional-grade products — not store-shelf stuff." },
              { title: "Guaranteed", desc: "Not satisfied? We'll make it right. Your satisfaction is the standard." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#c9a84c]/30 pl-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold mb-6">
            Ready for a{" "}
            <span className="text-[#c9a84c]">Showroom Finish?</span>
          </h2>
          <p className="text-[#9ca3af] text-lg mb-10 leading-relaxed">
            Serving Beverly, Salem, Danvers, Peabody, Manchester, and the entire North Shore, MA.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] text-black px-10 py-5 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
