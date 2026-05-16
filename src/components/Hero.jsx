import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Leaf,
  Recycle,
  Sparkles,
  Zap,
} from "lucide-react";

const visualItems = [
  { label: "Hemat Energi", icon: Zap, tone: "bg-emerald-100 text-emerald-700" },
  { label: "Kurangi Plastik", icon: Recycle, tone: "bg-sky-100 text-sky-700" },
  { label: "Bawa Tumbler", icon: Droplets, tone: "bg-cyan-100 text-cyan-700" },
  { label: "Pilah Sampah", icon: Leaf, tone: "bg-lime-100 text-lime-700" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_#d1fae5,_transparent_34%),linear-gradient(135deg,_#ffffff_0%,_#f0fdf4_48%,_#e0f2fe_100%)] pb-20 pt-16 sm:pt-20 lg:pb-28"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
              <Sparkles size={16} />
              Aksi Digital untuk Semua Kalangan
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            Hijaukan Kode, Sebarkan Energi Baik untuk Bumi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Website edukasi dan checklist aksi harian untuk membantu masyarakat
            membangun kebiasaan ramah lingkungan melalui teknologi sederhana.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#checklist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              Mulai Checklist
              <ArrowRight size={18} />
            </a>
            <a
              href="#edukasi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-700"
            >
              Lihat Edukasi
              <Leaf size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-emerald-300/30 blur-2xl" />
          <div className="absolute bottom-8 right-0 h-32 w-32 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="soft-card relative overflow-hidden p-5 sm:p-7">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-sky-400 to-lime-400" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700">
                  Ringkasan Aksi
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">
                  Kebiasaan kecil, dampak nyata.
                </h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
                <CheckCircle2 size={24} />
              </span>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {visualItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <span
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${item.tone}`}
                    >
                      <Icon size={22} />
                    </span>
                    <p className="text-base font-extrabold text-slate-900">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-emerald-200">
                HijaukanKode
              </p>
              <p className="mt-2 text-3xl font-black">Aksi dimulai hari ini.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
