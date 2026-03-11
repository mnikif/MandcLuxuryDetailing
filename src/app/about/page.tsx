import Link from "next/link";

export const metadata = {
  title: "About | M&C Luxury Detailing",
  description: "Learn about M&C Luxury Detailing — Beverly, MA's premier mobile car detailing service.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Our Story</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          About M&amp;C
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto" />
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-bold mb-6 leading-tight">
              Built on a Passion for{" "}
              <span className="text-[#c9a84c]">Clean Cars</span>
            </h2>
            <p className="text-[#9ca3af] leading-relaxed mb-5">
              M&amp;C Luxury Detailing was founded right here in Beverly, MA with one mission — bring truly professional-level detailing directly to our neighbors across the North Shore.
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-5">
              We&apos;re not a car wash. We&apos;re passionate detailers who treat every vehicle with the same care and attention we&apos;d give our own. From weekend drivers to daily commuters to cherished classics, every car deserves to look its best.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              Being mobile means we&apos;re flexible, convenient, and ready to serve you wherever you are — whether that&apos;s your driveway in Beverly, your office in Salem, or anywhere else on the North Shore.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Our Standard", desc: "We use professional-grade products, not consumer store brands. The difference shows." },
              { title: "Our Approach", desc: "Every detail is inspected by hand before we consider a job complete." },
              { title: "Our Promise", desc: "If you're not satisfied, we'll come back and make it right — no questions asked." },
            ].map((item) => (
              <div key={item.title} className="bg-[#111111] border border-[#2a2a2a] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#c9a84c] text-xs">✦</span>
                  <h3 className="text-white font-semibold tracking-wide text-sm uppercase">{item.title}</h3>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed pl-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Why Choose Us</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-white font-bold">
              The M&amp;C Difference
            </h2>
            <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "◈", title: "Fully Mobile", desc: "We bring everything needed for a full detail — water, power, products — right to your location." },
              { icon: "◈", title: "Premium Products", desc: "We use industry-leading brands for every step — no shortcuts on the products touching your paint." },
              { icon: "◈", title: "North Shore Local", desc: "Beverly-based, locally owned. We care about our community and our reputation in it." },
              { icon: "◈", title: "Detail-Obsessed", desc: "We check our work twice. Then again. Perfectionists about every panel, seam, and surface." },
            ].map((v) => (
              <div key={v.title} className="text-center p-8 border border-[#2a2a2a] hover:border-[#c9a84c]/30 transition-colors group">
                <div className="text-[#c9a84c] text-3xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white font-semibold mb-3">{v.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Coverage</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-white font-bold mb-6">
            We Serve the Entire North Shore
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Beverly", "Salem", "Danvers", "Peabody", "Manchester-by-the-Sea",
              "Gloucester", "Marblehead", "Swampscott", "Lynn", "Hamilton", "Wenham",
            ].map((city) => (
              <span
                key={city}
                className="border border-[#2a2a2a] text-[#9ca3af] text-sm px-4 py-2 hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-[#9ca3af] text-sm mt-8">
            Don&apos;t see your city? <Link href="/contact" className="text-[#c9a84c] underline underline-offset-4">Contact us</Link> — we likely cover it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#111111] border-t border-[#2a2a2a] text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-bold mb-6">
          Ready to Experience the Difference?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-[#c9a84c] text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
        >
          Book a Detail
        </Link>
      </section>
    </>
  );
}
