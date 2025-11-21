function CTA() {
  const whatsappHref = "https://wa.me/?text=I'm%20interested%20in%20Solis%20Scents%20perfumes";

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <div className="bg-white text-[#2b1a12] p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif leading-tight">
                Ready to find your signature scent?
              </h3>
              <p className="mt-3 text-[#2b1a12]/80">
                Chat with us on WhatsApp for recommendations and orders. We’ll help you discover what feels like you.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#2b1a12] text-white font-semibold px-6 py-3 shadow hover:opacity-90 active:scale-[0.98] transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
