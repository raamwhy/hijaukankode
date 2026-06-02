import { useState } from "react";
import { ArrowRight, Leaf, Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "Checklist", href: "#checklist" },
  { label: "Kampanye", href: "#kampanye" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#beranda"
          className="flex items-center gap-2 text-lg font-extrabold tracking-normal text-slate-950"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Leaf size={21} />
          </span>
          HijaukanKode
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#checklist"
          className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-700 lg:inline-flex"
        >
          Mulai Aksi
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50 lg:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#checklist"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
              onClick={closeMenu}
            >
              Mulai Aksi
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
