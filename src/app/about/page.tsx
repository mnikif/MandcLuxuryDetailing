import Link from "next/link";

export const metadata = {
  title: "About | M&C Luxury Detailing",
  description: "Meet Matt and Calvin — the team behind M&C Luxury Detailing in Beverly, MA.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Our Story</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          Meet the Team
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto" />
      </section>

      {/* Founder Story */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">The Founders</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-bold mb-6 leading-tight">
                Matt &amp; Calvin —<br />
                <span className="text-[#c9a84c]">Built for the North Shore</span>
              </h2>
              <p className="text-[#9ca3af] leading-relaxed mb-5">
                M&amp;C Luxury Detailing started the way most good things do — two guys from Beverly who cared too much about clean cars and figured they could do it better than anyone else.
              </p>
              <p className="text-[#9ca3af] leading-relaxed mb-5">
                Matt and Calvin grew up on the North Shore, detailing cars out of driveways on weekends. What started as a side hustle turned into something real when clients kept coming back — and kept sending their friends.
              </p>
              <p className="text-[#9ca3af] leading-relaxed mb-5">
                We went mobile because it made sense: why make someone drive to us when we can bring everything they need right to their door? We invested in professional-grade equipment, spent time learning the craft properly, and built a business around one standard — do the job so well that every client brags about it.
              </p>
              <p className="text-[#9ca3af] leading-relaxed">
                Today we detail hundreds of vehicles a year across Beverly, Salem, Danvers, Peabody, and the rest of the North Shore. Every car still gets treated like our own.
              </p>
            </div>

            <div className="space-y-5">
              {/* Matt card */}
              <div className="bg-[#111111] border border-[#2a2a2a] p-7 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a84c] font-[family-name:var(--font-playfair)] font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Matt</h3>
                    <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Co-Founder</p>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  Handles paint correction and ceramic coatings. A perfectionist about paint — if there&apos;s a swirl Mark, he&apos;ll find it and fix it.
                </p>
              </div>

              {/* Calvin card */}
              <div className="bg-[#111111] border border-[#2a2a2a] p-7 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a84c] font-[family-name:var(--font-playfair)] font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Calvin</h3>
                    <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Co-Founder</p>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  The interior specialist. Steam cleaning, leather conditioning, odor elimination — Calvin leaves interiors smelling and looking factory-fresh.
                </p>
              </div>

              <div className="bg-[#111111] border border-[#2a2a2a] p-7">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c9a84c] text-sm">★</span>
                  ))}
                </div>
                <p className="text-white text-sm italic leading-relaxed mb-3">
                  &ldquo;Matt and Calvin do great work! My car looks better than when I bought it.&rdquo;
                </p>
                <p className="text-[#9ca3af] text-xs">— James R., Beverly, MA</p>
              </div>
            </div>
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
              { icon: "◈", title: "North Shore Local", desc: "Beverly-born, locally owned. We care about our community and our reputation in it." },
              { icon: "◈", title: "Detail-Obsessed", desc: "We check our work twice. Then again. Perfectionists about every panel, seam, and surface." },
            ].map((v) => (
              <div
                key={v.title}
                className="text-center p-8 border border-[#2a2a2a] hover:border-[#c9a84c]/30 transition-colors group"
              >
                <div className="text-[#c9a84c] text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white font-semibold mb-3">
                  {v.title}
                </h3>
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
            Don&apos;t see your city?{" "}
            <Link href="/contact" className="text-[#c9a84c] underline underline-offset-4">
              Contact us
            </Link>{" "}
            — we likely cover it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#111111] border-t border-[#2a2a2a] text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-bold mb-6">
          Ready to Experience the Difference?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#c9a84c] text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#f5e6c8] transition-all duration-300"
          >
            Book a Detail
          </Link>
          <a
            href="tel:+17816325193"
            className="inline-block border border-[#2a2a2a] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Call (781) 632-5193
          </a>
        </div>
      </section>
    </>
  );
}
