import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-950 py-10 text-white">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500">
              <Leaf size={23} />
            </span>
            <div>
              <p className="text-xl font-black">HijaukanKode</p>
              <p className="text-sm font-semibold text-emerald-200">
                Aksi Digital Masyarakat untuk Bumi Lestari
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            Website edukasi lingkungan untuk membangun kebiasaan ramah
            lingkungan dari aksi kecil setiap hari.
          </p>
        </div>

        <p className="max-w-md text-sm leading-6 text-slate-400 md:text-right">
          Dikembangkan sebagai media edukasi dan kampanye aksi ramah
          lingkungan.
        </p>
      </div>
    </footer>
  );
}
