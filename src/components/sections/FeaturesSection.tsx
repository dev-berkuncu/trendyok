import React from "react";

const features = [
  { icon: "hub", title: "Tüm Kanallarınızı Bağlayın", description: "Trendyol, Hepsiburada, Amazon ve kendi web sitenizi tek panelden yönetin. COGS, kargo ve reklam verilerinizi otomatik senkronize edin.", accentColor: "blue" },
  { icon: "analytics", title: "Derinlemesine Analiz Edin", description: "Ürün bazlı kârlılık, kategori performansı ve reklam verimliliğinizi yapay zeka destekli raporlarla keşfedin.", accentColor: "purple" },
  { icon: "monitoring", title: "Büyümenizi Ölçeklendirin", description: "Envanter optimizasyonu ve tahminleyici analitik ile doğru ürüne, doğru zamanda, doğru bütçeyi ayırın.", accentColor: "blue" },
];

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="py-section-padding bg-[#0A1020] px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-emerald-accent mb-4 block uppercase">Nasıl Çalışır?</span>
          <h2 className="animate-on-scroll stagger-1 font-display text-5xl font-semibold leading-[56px] text-white mb-6 max-[768px]:text-4xl max-[768px]:leading-[44px]">3 Adımda Kârlılığınızı Artırın</h2>
          <p className="animate-on-scroll stagger-2 font-body text-lg leading-[28px] text-gray-400 max-w-2xl mx-auto">Karmaşık e-ticaret verilerinizi anlamlı içgörülere dönüştüren entegre bir platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const isPurple = feature.accentColor === "purple";
            const iconColor = isPurple ? "text-indigo-accent" : "text-emerald-accent";
            const iconBg = isPurple ? "bg-cyan-500/10" : "bg-blue-500/10";
            const lineColor = isPurple ? "bg-indigo-accent/30" : "bg-emerald-accent/30";
            return (
              <div key={feature.title} className={`animate-on-scroll stagger-${idx + 1} group bg-[#162040] rounded-2xl p-8 border border-white/5 hover:border-white/15 hover:bg-[#162040]/80 transition-all duration-500`}>
                <div className="font-body text-xs font-bold text-gray-600 mb-4">ADIM {idx + 1}</div>
                <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${iconColor} text-3xl`}>{feature.icon}</span>
                </div>
                <h3 className="font-display text-[28px] font-semibold leading-[36px] text-white mb-4">{feature.title}</h3>
                <p className="font-body text-base text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                <div className={`h-0.5 w-12 ${lineColor} group-hover:w-full transition-all duration-500 ease-out rounded-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
