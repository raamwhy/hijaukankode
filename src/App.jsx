import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Checklist from "./components/Checklist.jsx";
import Stats from "./components/Stats.jsx";
import Campaign from "./components/Campaign.jsx";
import Footer from "./components/Footer.jsx";

const STORAGE_KEY = "hijaukankode-checklist";

const dailyActions = [
  "Saya mematikan lampu saat tidak digunakan",
  "Saya mencabut charger setelah digunakan",
  "Saya membawa tumbler atau botol minum sendiri",
  "Saya mengurangi penggunaan plastik sekali pakai",
  "Saya membuang sampah pada tempatnya",
  "Saya memilah sampah sederhana",
  "Saya menggunakan catatan digital",
  "Saya membagikan pesan/kampanye lingkungan",
  "Saya menghemat penggunaan air",
  "Saya mengajak teman melakukan aksi ramah lingkungan",
];

const todayKey = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const emptyChecklist = () => dailyActions.map(() => false);

function getInitialChecklist() {
  if (typeof window === "undefined") {
    return emptyChecklist();
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return emptyChecklist();
    }

    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return dailyActions.map((_, index) => Boolean(parsed[index]));
    }

    if (parsed?.date === todayKey() && Array.isArray(parsed.checked)) {
      return dailyActions.map((_, index) => Boolean(parsed.checked[index]));
    }
  } catch {
    return emptyChecklist();
  }

  return emptyChecklist();
}

export default function App() {
  const [checkedItems, setCheckedItems] = useState(getInitialChecklist);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: todayKey(),
        checked: checkedItems,
      }),
    );
  }, [checkedItems]);

  const completedCount = useMemo(
    () => checkedItems.filter(Boolean).length,
    [checkedItems],
  );

  const totalActions = dailyActions.length;
  const progress = Math.round((completedCount / totalActions) * 100);

  const toggleChecklistItem = (index) => {
    setCheckedItems((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? !item : item)),
    );
  };

  const resetChecklist = () => {
    setCheckedItems(emptyChecklist());
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Checklist
          actions={dailyActions}
          checkedItems={checkedItems}
          completedCount={completedCount}
          progress={progress}
          totalActions={totalActions}
          onToggle={toggleChecklistItem}
          onReset={resetChecklist}
        />
        <Stats
          completedCount={completedCount}
          progress={progress}
          totalActions={totalActions}
        />
        <Campaign />
      </main>
      <Footer />
    </div>
  );
}
