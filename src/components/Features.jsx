import { Star, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Signature Blends",
    desc: "Balanced compositions with long-lasting sillage and depth.",
  },
  {
    icon: Leaf,
    title: "Nature-led Notes",
    desc: "Warm woods, amber, spice, and citrus woven with care.",
  },
  {
    icon: Sparkles,
    title: "Refined Finish",
    desc: "A soft, elegant trail—perfect for day to evening.",
  },
];

function Features() {
  return (
    <section id="collections" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif text-white">Crafted with character</h2>
          <p className="mt-3 text-white/70">
            Each bottle is a story—rooted in earth tones and glowing warmth.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-white/90 text-[#2b1a12] grid place-items-center shadow">
                <Icon />
              </div>
              <h3 className="mt-4 text-white text-xl font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#2b1a12]" />
    </section>
  );
}

export default Features;
