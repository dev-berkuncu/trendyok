import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedPage from "@/components/ui/AnimatedPage";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Sparkline from "@/components/ui/Sparkline";

export const metadata: Metadata = {
  title: "Çalışmalar | Trendyok",
  description:
    "Sektör liderlerinin Trendyok platformu ile karmaşık verileri nasıl eyleme dönüştürülebilir içgörülere çevirdiğini keşfedin.",
};

const trustMetrics = [
  { end: 2.4, prefix: "$", suffix: "B+", decimals: 1, label: "Yönetilen Varlık Hacmi", color: "text-[#8FA87A]" },
  { end: 300, prefix: "%", suffix: "", decimals: 0, label: "Ortalama ROI (İlk Yıl)", color: "text-[#E8A5B0]" },
  { end: 500, prefix: "", suffix: "+", decimals: 0, label: "Kurumsal Dağıtım", color: "text-[#6B6560]" },
];

export default function CalismalarPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <main className="flex-grow pt-20">
          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-[#8FA87A] uppercase block">
                Başarı Hikayeleri
              </span>
              <h1 className="animate-on-scroll stagger-1 font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-[#2D2A26] max-[768px]:text-[32px] max-[768px]:leading-[40px]">
                Müşterilerimizin Sonuçları
              </h1>
              <p className="animate-on-scroll stagger-2 font-body text-lg leading-[28px] text-[#6B6560]">
                Sektör liderlerinin Trendyok platformu ile karmaşık verileri
                nasıl eyleme dönüştürülebilir içgörülere çevirdiğini keşfedin.
              </p>
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Main case study */}
              <div className="animate-on-scroll md:col-span-8 bg-white border border-[#D4C4B0]/30 rounded-2xl overflow-hidden group hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="h-64 bg-[#F5E6D3] relative overflow-hidden">
                  <Image
                    alt="Dashboard"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4zdOMHwTh25DWiNKtiIlajhX56djVKNHyqsiS5hVOf6-8F4bgOkatWgtBjO1scX1lSjTnOrv34E_uiIKwEUiSSSYeItGMcyHTkvlFK6DvefXdrTXDlt8CWi3FVSsN7W_c8JplkFbNh4aTMAhfXZTguEA9bd_kmtLzDbMxb4C99huTGQKY2Q4ecbrs1rttb4olG0WN9lw-9vaIJ1CH-f9piaEkF3FLynzXKVyQ0hHw5ULSUtiIwkyJ-iabZ_TgejMYO_0WzGHjofE"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162040] to-transparent" />
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-body text-xs font-bold tracking-wide text-[#E8A5B0]">
                      Küresel Perakende
                    </span>
                    <span className="font-body text-xs font-bold tracking-wide text-[#8C857E] border border-[#D4C4B0]/40 px-2 py-1 rounded-full">
                      Tedarik Zinciri
                    </span>
                  </div>
                  <h2 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26]">
                    Maliyetlerde %24 Düşüş ve Operasyonel Çeviklik
                  </h2>
                  <p className="font-body text-base text-[#6B6560]">
                    Trendyok&apos;un prediktif analitik motoru sayesinde
                    lojistik maliyetlerinde benzeri görülmemiş azalma sağlandı.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D4C4B0]/30">
                    <div>
                      <div className="font-display text-4xl text-[#2D2A26]">
                        %<AnimatedCounter end={24} />
                      </div>
                      <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                        Maliyet Azalması
                      </div>
                      <div className="mt-2">
                        <Sparkline color="#60A5FA" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-4xl text-[#8FA87A]">
                        +$<AnimatedCounter end={12} />M
                      </div>
                      <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                        Yıllık Tasarruf
                      </div>
                      <div className="mt-2">
                        <Sparkline color="#10B981" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FinTech card */}
              <div className="animate-on-scroll stagger-1 md:col-span-4 bg-white border border-[#D4C4B0]/30 rounded-2xl p-8 flex flex-col justify-between hover:border-[#B8C7A3]/50 transition-colors duration-300">
                <div className="space-y-4">
                  <span className="font-body text-xs font-bold tracking-wide text-[#8FA87A]">
                    FinTech
                  </span>
                  <h3 className="font-display text-[32px] font-semibold leading-[40px] text-[#2D2A26]">
                    Risk Yönetiminde Paradigma Değişimi
                  </h3>
                  <p className="font-body text-base text-[#6B6560]">
                    Gerçek zamanlı dolandırıcılık tespiti ile sahte işlem
                    oranlarında rekor düşüş.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#D4C4B0]/30">
                  <div className="font-display text-3xl text-[#2D2A26]">
                    %<AnimatedCounter end={99.8} decimals={1} />
                  </div>
                  <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                    Doğruluk Oranı
                  </div>
                  <div className="mt-2">
                    <Sparkline color="#2563EB" />
                  </div>
                </div>
              </div>

              {/* HealthTech card */}
              <div className="animate-on-scroll stagger-2 md:col-span-4 bg-white border border-[#D4C4B0]/30 rounded-2xl p-8 flex flex-col justify-between hover:border-[#B8C7A3]/50 transition-colors duration-300">
                <div className="space-y-4">
                  <span className="font-body text-xs font-bold tracking-wide text-[#E8A5B0]">
                    Sağlık Teknolojileri
                  </span>
                  <h3 className="font-display text-[32px] font-semibold leading-[40px] text-[#2D2A26]">
                    Hasta Veri Akışında Kusursuz Uyum
                  </h3>
                  <p className="font-body text-base text-[#6B6560]">
                    Milyonlarca sağlık kaydının güvenli analizi ile tedavi
                    protokollerinde %15 iyileşme.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#D4C4B0]/30 flex items-center justify-between">
                  <div>
                    <div className="font-display text-3xl text-[#2D2A26]">
                      <AnimatedCounter end={10} />M+
                    </div>
                    <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                      Veri Noktası
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-[#8FA87A] text-3xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    health_and_safety
                  </span>
                </div>
              </div>

              {/* Industrial card */}
              <div className="animate-on-scroll stagger-3 md:col-span-8 bg-[#F5E6D3] border border-[#D4C4B0]/30 rounded-2xl p-8 relative overflow-hidden group hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-[200px]">
                    factory
                  </span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                  <div className="flex-1 space-y-4">
                    <span className="font-body text-xs font-bold tracking-wide text-[#8C857E] border border-[#D4C4B0]/40 px-2 py-1 rounded-full inline-block">
                      Endüstriyel Üretim
                    </span>
                    <h2 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26]">
                      Üretim Hatlarında Kestirimci Bakım Devrimi
                    </h2>
                    <p className="font-body text-base text-[#6B6560]">
                      IoT sensör verilerinin derinlemesine analizi ile
                      planlanmamış duruş sürelerinin sıfırlanması.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 bg-white rounded-xl p-6 border border-[#D4C4B0]/30">
                    <div className="text-center space-y-2">
                      <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                        Duruş Süresi Azalması
                      </div>
                      <div className="font-display text-5xl text-[#8FA87A]">
                        %<AnimatedCounter end={42} />
                      </div>
                      <div className="mt-2">
                        <Sparkline color="#10B981" />
                      </div>
                      <div className="w-full bg-[#2D2A26]/[0.03] h-2 rounded-full mt-4 overflow-hidden">
                        <div className="bg-[#8FA87A] h-full w-[42%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust metrics with animated counters */}
          <section className="py-section-padding bg-[#FFF8F0] border-t border-[#D4C4B0]/30">
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-16">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="animate-on-scroll font-display text-5xl font-semibold leading-[56px] text-[#2D2A26] max-[768px]:text-[32px]">
                  Rakamlar Kendini Konuşuyor
                </h2>
                <p className="animate-on-scroll stagger-1 font-body text-lg leading-[28px] text-[#6B6560]">
                  Platformumuzun müşterilerimize kattığı ölçülebilir değer.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trustMetrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`animate-on-scroll stagger-${i + 1} space-y-2`}
                  >
                    <div className="font-display text-[64px] font-bold leading-[72px] tracking-[-0.02em] text-[#2D2A26] max-[768px]:text-5xl">
                      <AnimatedCounter
                        end={m.end}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        decimals={m.decimals}
                        duration={2500}
                      />
                    </div>
                    <div className={`font-body text-base ${m.color}`}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </AnimatedPage>
      <Footer />
    </>
  );
}
