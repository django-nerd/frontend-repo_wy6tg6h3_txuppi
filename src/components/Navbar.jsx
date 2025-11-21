import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappHref =
    "https://wa.me/?text=I'm%20interested%20in%20Solis%20Scents%20perfumes";

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/90 text-[#2b1a12] font-black grid place-items-center shadow">
                SS
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide text-base">
                  Solis Scents
                </p>
                <p className="text-white/60 text-xs">Perfumes & Essence</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#collections" className="text-white/80 hover:text-white transition">Collections</a>
              <a href="#story" className="text-white/80 hover:text-white transition">Our Story</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white text-[#2b1a12] font-semibold px-4 py-2 shadow hover:shadow-md active:scale-[0.98] transition"
              >
                Chat on WhatsApp
              </a>
              <button
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/15 text-white/90"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4 space-y-2">
              <a href="#collections" className="block text-white/80 hover:text-white">Collections</a>
              <a href="#story" className="block text-white/80 hover:text-white">Our Story</a>
              <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-white text-[#2b1a12] font-semibold px-4 py-2 shadow"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
