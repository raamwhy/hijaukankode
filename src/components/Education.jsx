import {
  BookOpen,
  Bus,
  FileText,
  Megaphone,
  Recycle,
  Trash2,
  Zap,
} from "lucide-react";

const educationCards = [
  {
    title: "Hemat Energi",
    description:
      "Matikan lampu, kipas, charger, dan perangkat elektronik saat tidak digunakan.",
    icon: Zap,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Kurangi Plastik Sekali Pakai",
    description: "Gunakan tumbler, kotak makan, dan tas pakai ulang.",
    icon: Recycle,
    color: "bg-sky-50 text-sky-700",
  },
  {
    title: "Pilah Sampah",
    description:
      "Pisahkan sampah organik, anorganik, dan sampah yang dapat didaur ulang.",
    icon: Trash2,
    color: "bg-lime-50 text-lime-700",
  },
  {
    title: "Catatan Digital",
    description:
      "Kurangi penggunaan kertas dengan memanfaatkan catatan digital.",
    icon: FileText,
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "Transportasi Lebih Bijak",
    description:
      "Gunakan transportasi umum, berjalan kaki, bersepeda, atau berbagi kendaraan jika memungkinkan.",
    icon: Bus,
    color: "bg-teal-50 text-teal-700",
  },
  {
    title: "Kampanye Digital",
    description:
      "Bagikan pesan edukasi lingkungan melalui media sosial agar aksi kecil menyebar lebih luas.",
    icon: Megaphone,
    color: "bg-slate-100 text-slate-700",
  },
];

export default function Education() {
  return (
    <section id="edukasi" className="bg-slate-50 py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
            <BookOpen size={16} />
            Edukasi Lingkungan
          </span>
          <h2 className="section-title mt-5">
            Pilihan kecil yang bisa dilakukan dalam keseharian.
          </h2>
          <p className="section-lead">
            Mulai dari rumah, tempat kerja, ruang publik, komunitas, sampai
            media sosial. Setiap kebiasaan yang lebih sadar bisa menjadi bagian
            dari perubahan.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {educationCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="soft-card group p-6 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/25"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.color} transition group-hover:scale-105`}
                >
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
