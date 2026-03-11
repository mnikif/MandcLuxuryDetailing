import Link from "next/link";

const services = [
  {
    title: "Interior Detail",
    desc: "Deep vacuum, steam clean, leather conditioning, and odor elimination.",
    price: "From $140",
    icon: "◈",
  },
  {
    title: "Exterior Detail",
    desc: "Hand wash, clay bar, polish, and sealant for a mirror finish that lasts.",
    price: "From $70",
    icon: "◈",
  },
  {
    title: "Full Detail",
    desc: "Our complete inside-and-out transformation — interior and exterior done right.",
    price: "From $180",
    icon: "◈",
  },
  {
    title: "Exterior Wax",
    desc: "Add-on protective wax coat for enhanced shine and paint protection.",
    price: "+$50 add-on",
    icon: "◈",
  },
];

const stats = [
  { value: "50+", label: "Vehicles Detailed" },
  { value: "5★", label: "Average Rating" },
  { value: "1+", label: "Years in Business" },
  { value: "100%", label: "Mobile Service" },
];

const testimonials = [
  {
    name: "Janet Gargan",
    location: "",
    text: "Thank you so much for your hard work, Matt. My son was thrilled with how clean his car looked after your outstanding detailing job. As an umpire, his equipment makes for a dirty car, but you made it spotless inside and out, even with all the gear. The results went beyond what we hoped for, and we couldn't be happier with the service. We will definitely return for our future detailing needs. I highly recommend M & C Luxury Detailing to anyone looking for exceptional service and results.",
  },
  {
    name: "Deanna LeClerc",
    location: "",
    text: "Matt was great to work with he got back to me almost immediately after I showed interest in a detailing. We scheduled for the next week so I didnt have to wait long. His price is super reasonable especially for the results I got, my car looks brand new. Aside from damage I've put on lol. He kept in constant contact whenever I texted him, he answered me promptly and still is after the service is completed! Im a happy customer i will be referring him to anyone looking for a detailing and he comes to you for the chronic procrastinators like myself.",
  },
  {
    name: "John Stalker",
    location: "",
    text: "Impressive...from the start! When I first reached out to them they were quick to respond and very personable from the start. I had an appointment booked and confirmed amazingly fast. They showed up early but waited to make sure they could set-up. Walked me through the process. Confirmed the pricing. Then discussed possible options and benefits but didn't push. Then they got to work...and work they did. They were thorough. When they were done they had me walk through everything and if we saw anything they missed, they jumped in and addressed it...even if it was just a speck. The work was great, the price was fair. Won't hesitate to have them come back. Nice work guys!!!!",
  },
  {
    name: "Vic P.",
    location: "",
    text: "Came and cleaned my Q5 which was extremely dirty due to my kids. Was on time and did an amazing job. My car is spotless and probably the cleanest I have ever seen it. I believe its just as clean as when I purchased it. Highly recommend! The best part is he comes right to you!",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c9a84c]/6 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/4 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 flex flex-col items-center text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.5em] uppercase mb-6 font-medium">
            Northshore Massachusetts
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 text-center">
            Your Car Deserves
            <br />
            <span className="text-[#c9a84c]">Perfection</span>
          </h1>
          <p className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light text-center">
            Premium mobile detailing that comes to you — showroom-quality results right in your driveway.
          </p>
          <div className="flex flex-col items-center gap-5 mb-5">
            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#c9a84c] text-black px-16 py-6 text-lg md:px-24 md:py-8 md:text-2xl tracking-widest uppercase font-bold hover:bg-[#f5e6c8] transition-all duration-300 text-center"
              >
                Book Now
              </Link>
              <Link
                href="/gallery"
                className="w-full sm:w-auto border-2 border-[#c9a84c] text-[#c9a84c] px-16 py-6 text-lg md:px-24 md:py-8 md:text-2xl tracking-widest uppercase font-bold hover:bg-[#c9a84c] hover:text-black transition-all duration-300 text-center"
              >
                Our Work
              </Link>
            </div>
            <a
              href="tel:+17816325193"
              className="w-full sm:w-auto border-2 border-white/30 text-white px-16 py-6 text-lg md:px-24 md:py-8 md:text-2xl tracking-widest uppercase font-bold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 text-center"
            >
              (781) 632-5193
            </a>
          </div>
          <p className="text-[#9ca3af] text-xs tracking-widest uppercase text-center">
            Serving Beverly · Salem · Danvers · Peabody · Gloucester & more
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#111111", borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", padding: "2.5rem 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem 3rem", maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", minWidth: "120px" }}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", color: "#c9a84c", fontWeight: 700, lineHeight: 1, marginBottom: "0.35rem" }}>
                {s.value}
              </div>
              <div style={{ color: "#9ca3af", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        {/* Services row — same max-width/centering as stats */}
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "2.5rem 1.5rem 2.5rem", borderTop: "1px solid #2a2a2a" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Offer</p>
            <p style={{ fontFamily: "var(--font-playfair)", color: "#fff", fontSize: "1.75rem", fontWeight: 700 }}>Our Services</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "#0f0f0f", border: "1px solid #2a2a2a", padding: "1.75rem", display: "flex", flexDirection: "column", textAlign: "center", width: "220px", minWidth: "220px", flexShrink: 0 }}>
                <div style={{ color: "#c9a84c", fontSize: "1.25rem", marginBottom: "1rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "var(--font-playfair)", color: "#fff", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{s.title}</div>
                <div style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>{s.desc}</div>
                <div style={{ color: "#c9a84c", fontWeight: 600, fontSize: "0.85rem" }}>{s.price}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/services" className="text-[#c9a84c] text-sm tracking-widest uppercase border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors">
              See Full Pricing & Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Mobile Section */}
      <section className="py-24 bg-[#111111] border-y border-[#2a2a2a]">
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Why M&amp;C</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold mb-6">
            We Come to You
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10" />
          <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mx-auto mb-16">
            No drop-offs, no waiting rooms. We bring professional-grade equipment and expertise directly to your location — your home, your office, or anywhere on the North Shore.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Convenient", desc: "Book online, we show up fully equipped. Save hours — we do the work while you do yours." },
              { title: "Professional", desc: "Matt and Calvin use professional-grade products and techniques — not store-shelf stuff." },
              { title: "Guaranteed", desc: "Not satisfied? We'll come back and make it right. Your satisfaction is the standard." },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#c9a84c]/40 pt-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">What Clients Say</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold">
              Real Reviews
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#111111] border border-[#2a2a2a] p-8 hover:border-[#c9a84c]/30 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c9a84c] text-sm">★</span>
                  ))}
                </div>
                <p className="text-white text-base leading-relaxed mb-6 font-light italic text-center">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center">
                    <span className="text-[#c9a84c] text-xs font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-[#9ca3af] text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] border-t border-[#2a2a2a]">
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold mb-6">
            Ready for a{" "}
            <span className="text-[#c9a84c]">Showroom Finish?</span>
          </h2>
          <p className="text-[#9ca3af] text-lg mb-10 leading-relaxed">
            Serving Beverly, Salem, Danvers, Peabody, Manchester, Gloucester, and the entire North Shore, MA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c9a84c] text-black px-10 py-5 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17816325193"
              className="border border-[#2a2a2a] text-white px-10 py-5 text-sm tracking-widest uppercase font-medium hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
