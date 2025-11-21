import Spline from '@splinetool/react-spline';

function Hero() {
  const whatsappHref = "https://wa.me/?text=I'm%20interested%20in%20Solis%20Scents%20perfumes";

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm bg-[#2b1a12]/40 rounded-3xl p-8 border border-white/10">
          <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-4">Solis Scents</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Timeless fragrances for warm, luminous souls
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg">
            Discover handcrafted perfumes inspired by golden hours and earthen warmth. Subtle, elegant, and made to linger beautifully.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#2b1a12] font-semibold px-6 py-3 shadow hover:shadow-md active:scale-[0.98] transition"
            >
              Shop via WhatsApp
            </a>
            <a href="#collections" className="text-white/80 hover:text-white underline underline-offset-4">
              Explore Collections
            </a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2b1a12]/40 via-transparent to-[#2b1a12]" />
    </section>
  );
}

export default Hero;
