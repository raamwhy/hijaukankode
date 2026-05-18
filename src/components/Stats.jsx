import { BarChart3, CheckCircle2, Leaf, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "../utils/animations.js";

function getEnergyLevel(progress) {
  if (progress === 100) return "Pahlawan Bumi Hari Ini";
  if (progress >= 71) return "Penyebar Energi Baik";
  if (progress >= 31) return "Konsisten Menjaga";
  return "Mulai Bergerak";
}

export default function Stats({ completedCount, progress, totalActions }) {
  const level = getEnergyLevel(progress);
  const stats = [
    {
      label: "Total aksi selesai hari ini",
      value: completedCount,
      suffix: "aksi",
      icon: CheckCircle2,
    },
    {
      label: "Persentase progress",
      value: progress,
      suffix: "%",
      icon: BarChart3,
    },
    {
      label: "Total aksi tersedia",
      value: totalActions,
      suffix: "aksi",
      icon: Leaf,
    },
    {
      label: "Level energi baik",
      value: level,
      suffix: "",
      icon: Trophy,
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
              <BarChart3 size={16} />
              Statistik Aksi
            </span>
            <h2 className="section-title mt-5">
              Lihat energi baikmu dalam angka.
            </h2>
            <p className="section-lead">
              Statistik sederhana ini mengikuti checklist harianmu dan membantu
              melihat seberapa jauh aksi ramah lingkungan sudah berjalan.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-emerald-200 bg-white px-5 py-4 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <Trophy size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Level Energi Baik
                </p>
                <p className="text-lg font-black text-slate-950">{level}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]"
          >
            <motion.div
              variants={scaleIn}
              className="soft-card flex min-h-[280px] items-center justify-center p-6"
            >
              <div
                className="flex h-48 w-48 items-center justify-center rounded-full p-4"
                style={{
                  background: `conic-gradient(#10b981 ${progress * 3.6}deg, #e2e8f0 0deg)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                  <span className="text-5xl font-black text-slate-950">
                    {progress}%
                  </span>
                  <span className="mt-2 max-w-28 text-sm font-bold leading-5 text-emerald-700">
                    progress hari ini
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-4"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.article
                    key={stat.label}
                    variants={fadeUp}
                    className="soft-card p-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                        <Icon size={22} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-2xl font-black text-slate-950">
                          {stat.value}{" "}
                          <span className="text-sm font-bold text-slate-500">
                            {stat.suffix}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
