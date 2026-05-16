import { Check, CheckCircle2, ClipboardCheck, RotateCcw } from "lucide-react";

export default function Checklist({
  actions,
  checkedItems,
  completedCount,
  progress,
  totalActions,
  onToggle,
  onReset,
}) {
  const isComplete = completedCount === totalActions;

  return (
    <section id="checklist" className="bg-white py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <ClipboardCheck size={16} />
              Checklist Aksi Harian
            </span>
            <h2 className="section-title mt-5">
              Catat aksi kecil yang sudah kamu lakukan hari ini.
            </h2>
            <p className="section-lead">
              Checklist ini tersimpan di browser, jadi progresmu tetap ada saat
              halaman dibuka kembali.
            </p>

            <div className="mt-8 soft-card overflow-hidden p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
                    Progress Hari Ini
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-950">
                    {progress}%
                  </p>
                </div>
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <CheckCircle2 size={27} />
                </span>
              </div>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-4 text-base font-semibold text-slate-700">
                Kamu sudah menyelesaikan {completedCount} dari {totalActions}{" "}
                aksi hari ini
              </p>

              {isComplete && (
                <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800">
                  Luar biasa! Energi baikmu hari ini sudah lengkap untuk bumi.
                </p>
              )}
            </div>
          </div>

          <div className="soft-card p-4 sm:p-6">
            <div className="grid gap-3">
              {actions.map((action, index) => {
                const checked = checkedItems[index];
                return (
                  <label
                    key={action}
                    className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition ${
                      checked
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(index)}
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${
                        checked
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-slate-300 bg-white text-transparent"
                      }`}
                    >
                      <Check size={16} strokeWidth={3} />
                    </span>
                    <span
                      className={`text-sm font-semibold leading-6 sm:text-base ${
                        checked ? "text-emerald-900" : "text-slate-700"
                      }`}
                    >
                      {action}
                    </span>
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onReset}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 sm:w-auto"
            >
              <RotateCcw size={17} />
              Reset Checklist Hari Ini
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
