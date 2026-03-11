export const metadata = {
  title: "Gallery | M&C Luxury Detailing",
  description: "Before and after photos from M&C Luxury Detailing — mobile car detailing in Beverly, MA.",
};

// Placeholder gallery items — replace src values with real photos
const galleryItems = [
  { id: 1, label: "Black BMW — Full Detail", category: "Full Detail" },
  { id: 2, label: "White Mercedes — Exterior", category: "Exterior" },
  { id: 3, label: "Grey Audi — Paint Correction", category: "Paint Correction" },
  { id: 4, label: "Navy Porsche — Full Detail", category: "Full Detail" },
  { id: 5, label: "Red Corvette — Ceramic Coating", category: "Ceramic Coating" },
  { id: 6, label: "Black RAM — Interior Detail", category: "Interior" },
  { id: 7, label: "Silver Tesla — Full Detail", category: "Full Detail" },
  { id: 8, label: "White G-Wagon — Exterior", category: "Exterior" },
  { id: 9, label: "Blue BMW — Paint Correction", category: "Paint Correction" },
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Our Work</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          Gallery
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-6" />
        <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
          Results speak for themselves. Every vehicle gets treated like our own.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 px-6 pb-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#111111] border border-[#2a2a2a] overflow-hidden aspect-[4/3] hover:border-[#c9a84c]/40 transition-all duration-300"
              >
                {/* Placeholder — replace with real <Image> components */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111111]">
                  <div className="text-center p-6">
                    <div className="text-[#c9a84c] text-2xl mb-3">✦</div>
                    <p className="text-[#9ca3af] text-xs tracking-widest uppercase">{item.category}</p>
                    <p className="text-white text-sm mt-2 font-medium">{item.label}</p>
                    <p className="text-[#9ca3af] text-xs mt-2">Photo coming soon</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <p className="text-[#c9a84c] text-xs tracking-widest uppercase mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder notice */}
          <div className="text-center mt-16 p-8 border border-[#2a2a2a] bg-[#111111] max-w-2xl mx-auto">
            <div className="text-[#c9a84c] text-xl mb-3">✦</div>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              <span className="text-white font-medium">Photos coming soon.</span> Replace the placeholder cards above with real before/after images using Next.js{" "}
              <code className="text-[#c9a84c] text-xs bg-[#0a0a0a] px-2 py-0.5 rounded">{"<Image />"}</code> components. Follow us on Instagram for the latest work.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 bg-[#111111] border-y border-[#2a2a2a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Follow Along</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-bold mb-4">
          See More on Instagram
        </h2>
        <p className="text-[#9ca3af] mb-8">Daily work, before & afters, and behind the scenes.</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#c9a84c] text-[#c9a84c] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
        >
          @mandcluxurydetailing
        </a>
      </section>
    </>
  );
}
