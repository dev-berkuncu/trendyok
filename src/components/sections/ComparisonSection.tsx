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
    <section id="calismalar" className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F5E6D3]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-[#8FA87A] mb-4 block uppercase">Neden Trendyok?</span>
            <h2 className="animate-on-scroll stagger-1 font-display text-5xl font-semibold leading-[56px] text-[#2D2A26] max-[768px]:text-4xl max-[768px]:leading-[44px]">Farkı Hissedin</h2>
          </div>
          <p className="animate-on-scroll stagger-2 font-body text-lg text-[#6B6560] max-w-sm">Standart araçlarla Trendyok&apos;un yapay zeka altyapısını karşılaştırın.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll from-left bg-[#2D2A26]/[0.03]0 p-10 rounded-2xl border border-[#D4C4B0]/30 opacity-70">
            <h3 className="font-body text-xs font-bold tracking-wide text-[#8C857E] mb-8 uppercase">Standart Analitik</h3>
            <ul className="space-y-8">
              {standardRows.map((row, i) => (
                <li key={row.label} className={`flex justify-between items-center gap-4 ${i < standardRows.length - 1 ? "border-b border-[#D4C4B0]/30 pb-6" : "pb-2"}`}>
                  <span className="font-body text-base text-[#4A4540]">{row.label}</span>
                  <span className="font-body text-sm font-medium text-[#8C857E]">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll from-right shimmer-border bg-white p-1 rounded-2xl shadow-2xl shadow-[#B8C7A3]/15 relative overflow-hidden border-2 border-[#B8C7A3]/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            <div className="bg-white p-10 rounded-xl h-full relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-body text-xs font-bold tracking-wide text-[#8FA87A] uppercase">Trendyok Pro</h3>
                <span className="bg-[#8FA87A] text-[#2D2A26] text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wide">Önerilen</span>
              </div>
              <ul className="space-y-8">
                {eliteRows.map((row, i) => (
                  <li key={row.label} className={`flex justify-between items-center gap-4 ${i < eliteRows.length - 1 ? "border-b border-[#B8C7A3]/20 pb-6" : "pb-2"}`}>
                    <span className="font-body text-base text-[#2D2A26] font-medium">{row.label}</span>
                    <span className="font-body text-sm font-bold text-[#8FA87A]">{row.value}</span>
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
