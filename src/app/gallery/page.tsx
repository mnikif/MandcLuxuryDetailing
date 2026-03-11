export const metadata = {
  title: "Gallery | M&C Luxury Detailing",
  description: "Before and after photos from M&C Luxury Detailing — mobile car detailing in Beverly, MA.",
};

const beforeAfterItems = [
  { id: 1, label: "Black BMW 3-Series", category: "Full Detail" },
  { id: 2, label: "White Mercedes E-Class", category: "Exterior Detail" },
  { id: 3, label: "Grey Audi A4", category: "Paint Correction" },
  { id: 4, label: "Navy Porsche 911", category: "Full Detail" },
  { id: 5, label: "Red Corvette C7", category: "Ceramic Coating" },
  { id: 6, label: "Black RAM 1500", category: "Interior Detail" },
  { id: 7, label: "Silver Tesla Model 3", category: "Full Detail" },
  { id: 8, label: "White Mercedes G-Wagon", category: "Exterior Detail" },
  { id: 9, label: "Blue BMW M4", category: "Paint Correction" },
];

const categoryColors: Record<string, string> = {
  "Full Detail": "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/20",
  "Exterior Detail": "bg-blue-900/20 text-blue-300 border-blue-800/30",
  "Paint Correction": "bg-purple-900/20 text-purple-300 border-purple-800/30",
  "Interior Detail": "bg-emerald-900/20 text-emerald-300 border-emerald-800/30",
  "Ceramic Coating": "bg-amber-900/20 text-amber-300 border-amber-800/30",
};

export default function Gallery() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a] text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-3">Our Work</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold mb-6">
          Before &amp; After
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-6" />
        <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
          Every vehicle transformed. Results speak louder than words.
        </p>
      </section>

      {/* Before/After Grid */}
      <section className="py-10 px-6 pb-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {beforeAfterItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#111111] border border-[#2a2a2a] overflow-hidden group hover:border-[#c9a84c]/40 transition-all duration-300"
              >
                {/* Before / After panels */}
                <div className="grid grid-cols-2 gap-px bg-[#2a2a2a]">
                  {/* Before */}
                  <div className="relative aspect-[4/3] bg-[#0d0d0d] flex flex-col items-center justify-center p-4">
                    <span className="absolute top-2 left-2 text-[10px] tracking-widest uppercase text-[#9ca3af] bg-black/60 px-2 py-0.5">
                      Before
                    </span>
                    {/* Placeholder — swap with <Image src="..." alt="Before" fill className="object-cover" /> */}
                    <div className="text-[#333] text-4xl mb-2">⬛</div>
                    <p className="text-[#444] text-[10px] tracking-widest uppercase text-center">
                      Photo coming soon
                    </p>
                  </div>
                  {/* After */}
                  <div className="relative aspect-[4/3] bg-[#141414] flex flex-col items-center justify-center p-4">
                    <span className="absolute top-2 right-2 text-[10px] tracking-widest uppercase text-[#c9a84c] bg-black/60 px-2 py-0.5">
                      After
                    </span>
                    {/* Placeholder — swap with <Image src="..." alt="After" fill className="object-cover" /> */}
                    <div className="text-[#c9a84c]/20 text-4xl mb-2">✦</div>
                    <p className="text-[#555] text-[10px] tracking-widest uppercase text-center">
                      Photo coming soon
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                  <span
                    className={`text-[10px] tracking-widest uppercase px-2.5 py-1 border ${
                      categoryColors[item.category] ?? "bg-[#1a1a1a] text-[#9ca3af] border-[#2a2a2a]"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* How to swap photos note */}
          <div className="mt-14 p-7 border border-[#2a2a2a] bg-[#111111] max-w-2xl mx-auto text-center">
            <div className="text-[#c9a84c] text-xl mb-3">✦</div>
            <p className="text-white text-sm font-medium mb-2">Adding Your Photos</p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Drop your before/after images into{" "}
              <code className="text-[#c9a84c] text-xs bg-[#0a0a0a] px-1.5 py-0.5">/public/gallery/</code>{" "}
              and replace the placeholder divs above with{" "}
              <code className="text-[#c9a84c] text-xs bg-[#0a0a0a] px-1.5 py-0.5">{"<Image />"}</code>{" "}
              components. Each card has clearly labeled Before and After slots.
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
        <p className="text-[#9ca3af] mb-8">Daily work, before &amp; afters, and behind the scenes.</p>
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
