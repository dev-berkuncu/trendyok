import React from "react";

const standardRows = [
  { label: "Veri Yenileme", value: "24-48 Saat" },
  { label: "COGS Entegrasyonu", value: "Manuel" },
  { label: "İlişkilendirme", value: "Son Tıklama" },
  { label: "Kâr Tahmini", value: "Doğrusal" },
];
const eliteRows = [
  { label: "Veri Yenileme", value: "Gerçek Zamanlı" },
  { label: "COGS Entegrasyonu", value: "Dinamik API" },
  { label: "İlişkilendirme", value: "Çoklu Temas ML" },
  { label: "Kâr Tahmini", value: "Yapay Zeka" },
];

export default function ComparisonSection() {
  return (
    <section id="calismalar" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#0A1020]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-emerald-accent mb-4 block uppercase">Neden Trendyok?</span>
            <h2 className="animate-on-scroll stagger-1 font-display text-5xl font-semibold leading-[56px] text-white max-[768px]:text-4xl max-[768px]:leading-[44px]">Farkı Hissedin</h2>
          </div>
          <p className="animate-on-scroll stagger-2 font-body text-lg text-gray-400 max-w-sm">Standart araçlarla Trendyok&apos;un yapay zeka altyapısını karşılaştırın.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll from-left bg-[#162040]/50 p-10 rounded-2xl border border-white/5 opacity-70">
            <h3 className="font-body text-xs font-bold tracking-wide text-gray-500 mb-8 uppercase">Standart Analitik</h3>
            <ul className="space-y-8">
              {standardRows.map((row, i) => (
                <li key={row.label} className={`flex justify-between items-center gap-4 ${i < standardRows.length - 1 ? "border-b border-white/5 pb-6" : "pb-2"}`}>
                  <span className="font-body text-base text-gray-300">{row.label}</span>
                  <span className="font-body text-sm font-medium text-gray-500">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll from-right bg-[#162040] p-1 rounded-2xl shadow-2xl shadow-blue-500/10 relative overflow-hidden border-2 border-emerald-accent/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <div className="bg-[#162040] p-10 rounded-xl h-full relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-body text-xs font-bold tracking-wide text-emerald-accent uppercase">Trendyok Pro</h3>
                <span className="bg-emerald-accent text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide">Önerilen</span>
              </div>
              <ul className="space-y-8">
                {eliteRows.map((row, i) => (
                  <li key={row.label} className={`flex justify-between items-center gap-4 ${i < eliteRows.length - 1 ? "border-b border-blue-500/10 pb-6" : "pb-2"}`}>
                    <span className="font-body text-base text-white font-medium">{row.label}</span>
                    <span className="font-body text-sm font-bold text-emerald-accent">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
