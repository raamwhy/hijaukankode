import { Check, Copy, Megaphone, Send } from "lucide-react";
import { useEffect, useState } from "react";

const campaignMessages = [
  "Satu aksi kecil hari ini, satu energi baik untuk bumi.",
  "Matikan lampu bukan hanya hemat listrik, tapi juga bentuk peduli.",
  "Bawa tumbler, kurangi plastik, mulai dari diri sendiri.",
  "Kode bisa membangun sistem, aksi kecil bisa menjaga bumi.",
  "Masyarakat bergerak, bumi ikut bernapas.",
];

export default function Campaign() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return undefined;
    const timer = window.setTimeout(() => {
      setShowToast(false);
      setCopiedIndex(null);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [showToast]);

  const copyMessage = async (message, index) => {
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = message;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopiedIndex(index);
    setShowToast(true);
  };

  return (
    <section id="kampanye" className="relative bg-white py-20">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <Megaphone size={16} />
              Kampanye Digital
            </span>
            <h2 className="section-title mt-5">
              Pesan singkat untuk menyebarkan energi baik.
            </h2>
            <p className="section-lead">
              Salin pesan kampanye dan bagikan lewat media sosial, grup
              keluarga, komunitas, atau lingkungan sekitar.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-bold text-sky-800">
            <Send size={17} />
            Siap dibagikan
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {campaignMessages.map((message, index) => {
            const isCopied = copiedIndex === index;
            return (
              <article
                key={message}
                className="soft-card flex min-h-[220px] flex-col justify-between p-5 hover:-translate-y-1 hover:border-emerald-200"
              >
                <p className="text-lg font-extrabold leading-7 text-slate-950">
                  "{message}"
                </p>
                <button
                  type="button"
                  onClick={() => copyMessage(message, index)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  {isCopied ? "Tersalin" : "Salin Pesan"}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-lg border border-emerald-200 bg-white px-5 py-4 text-center text-sm font-bold text-emerald-800 shadow-soft">
          Pesan kampanye berhasil disalin.
        </div>
      )}
    </section>
  );
}
