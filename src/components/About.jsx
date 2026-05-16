import { Code2, HeartHandshake, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Kepedulian",
    description:
      "Setiap orang bisa ikut mengambil peran melalui kebiasaan sederhana yang lebih sadar lingkungan.",
    icon: HeartHandshake,
  },
  {
    title: "Inovasi",
    description:
      "Teknologi digunakan sebagai media edukasi, pengingat, dan kampanye yang mudah diakses.",
    icon: Lightbulb,
  },
  {
    title: "Kolaborasi",
    description:
      "Energi baik menjadi lebih kuat saat aksi kecil dilakukan bersama teman dan komunitas.",
    icon: Users,
  },
];

export default function About() {
  return (
    <section id="tentang" className="bg-white py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <Code2 size={16} />
              Tentang HijaukanKode
            </span>
            <h2 className="section-title mt-5">Kode yang dekat dengan bumi.</h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              HijaukanKode berasal dari kata "Hijaukan" dan "Kode".
              "Hijaukan" bermakna ajakan untuk membuat kebiasaan menjadi lebih
              ramah lingkungan, sedangkan "Kode" menggambarkan bidang
              dunia pemrograman dan teknologi digital. Melalui HijaukanKode,
              teknologi digunakan sebagai media edukasi, pengingat, dan
              kampanye untuk menyebarkan energi baik bagi bumi.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="soft-card p-5 hover:-translate-y-1 hover:border-emerald-200"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
