import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import AnimatedPage from "@/components/ui/AnimatedPage";

export const metadata: Metadata = {
  title: "Özellikler | Trendyok",
  description: "Operasyonel verilerinizin ötesine geçin. Yapay zeka destekli yönetim panelleri ile kontrolü ele alın.",
};

const infraItems = [
  { icon: "lock", title: "Veri Güvenliği", desc: "Uçtan uca şifreleme ve SOC2 uyumlu veri merkezleri ile bilgi güvenliği." },
  { icon: "speed", title: "Yüksek Performans", desc: "Saniyede milyonlarca satır veriyi işleyebilen dağıtık bulut mimarisi." },
  { icon: "sync", title: "99.9% Uptime", desc: "Yedekli sunucu altyapısı ile kesintisiz operasyon garantisi." },
  { icon: "code", title: "Açık API", desc: "Kendi iç sistemlerinize kolay entegrasyon için kapsamlı dokümantasyon." },
];

export default function OzelliklerPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <main className="pt-20">
          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="col-span-1 md:col-span-8">
                <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-[#8FA87A] uppercase mb-4 block">Tüm Özellikler</span>
                <h1 className="animate-on-scroll stagger-1 font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-[#2D2A26] mb-6 max-[768px]:text-[32px] max-[768px]:leading-[40px]">Kârlılığı Yöneten İleri Düzey Analitik</h1>
                <p className="animate-on-scroll stagger-2 font-body text-lg leading-[28px] text-[#6B6560] mb-10 max-w-2xl">Operasyonel verilerinizin ötesine geçin. Marjları koruyan, trendleri tahmin eden ve veri silolarını yıkan yapay zeka destekli yönetim panelleri ile kontrolü ele alın.</p>
                <div className="animate-on-scroll stagger-3"><Button variant="primary" size="lg">Ücretsiz Deneyin</Button></div>
              </div>
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="animate-on-scroll col-span-1 md:col-span-8 bg-white border border-[#D4C4B0]/30 rounded-2xl p-10 relative overflow-hidden group hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8C7A3]/15 blur-[100px] rounded-full pointer-events-none" />
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-12 h-12 bg-[#B8C7A3]/15 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#8FA87A] text-2xl">monitoring</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26] mb-2">Dinamik Marj Kontrolü</h3>
                    <p className="font-body text-base text-[#6B6560]">Tedarik zinciri maliyetlerinden pazarlama harcamalarına kadar tüm kalemleri gerçek zamanlı izleyerek ürün bazlı kârlılığı anında optimize edin.</p>
                  </div>
                </div>
                <div className="h-64 bg-[#F5E6D3] rounded-xl border border-[#D4C4B0]/30 relative overflow-hidden flex items-end">
                  <Image alt="Analytics Graph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDChNNi7Qj-qv_jUbAoKGEJ9Ni_NFs1OYMNK3jBP1ZA_a3Yy3YIaYUUzZFim4v13zfj0bic_8FSHYO7TmtTyLz2Fq5aFaUv3RPZGXuVyZGC01YIJDf_IeBo5qV1Ak_u8TXGxsk0fDrrY_16kS0j0tuiq-ap8c-oIQPhlGI-RLvDrftwUTBpDOjyJqp58N6M1uY679kptACWXuS-zXzZNz5fCBYL6ZGR6VrEQyKvmY9q8qc2BC5T8DkV0TkeG-cgN9BG2KE5gCQI87k" fill className="object-cover opacity-30 mix-blend-luminosity" unoptimized />
                  <div className="w-full h-1/2 bg-gradient-to-t from-[#0A1020] to-transparent z-10 absolute bottom-0" />
                  <div className="relative z-20 p-6 w-full flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="font-body text-xs font-bold tracking-wide text-[#8C857E]">Q3 MARJ DEĞİŞİMİ</div>
                      <div className="font-display text-5xl font-semibold leading-[56px] text-[#8FA87A]">+14.2%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll stagger-1 col-span-1 md:col-span-4 bg-white border border-[#D4C4B0]/30 rounded-2xl p-10 flex flex-col hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#F7C8D0]/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#E8A5B0] text-2xl">hub</span>
                </div>
                <h3 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26] mb-2">Omnichannel Veri Entegrasyonu</h3>
                <p className="font-body text-base text-[#6B6560] flex-grow">ERP, CRM ve mağaza platformlarındaki parçalı verileri tek bir merkezde birleştirerek bütünsel bir analiz ortamı yaratın.</p>
                <div className="mt-8 pt-8 border-t border-[#D4C4B0]/30 flex justify-between items-center opacity-60">
                  <span className="material-symbols-outlined text-[#8C857E] text-3xl">api</span>
                  <span className="material-symbols-outlined text-[#8C857E] text-xl">arrow_forward</span>
                  <span className="material-symbols-outlined text-[#8C857E] text-3xl">database</span>
                  <span className="material-symbols-outlined text-[#8C857E] text-xl">arrow_forward</span>
                  <span className="material-symbols-outlined text-[#8FA87A] text-3xl">analytics</span>
                </div>
              </div>
              <div className="animate-on-scroll stagger-2 col-span-1 md:col-span-6 bg-white border border-[#D4C4B0]/30 rounded-2xl p-10 hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#B8C7A3]/15 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#8FA87A] text-2xl">smart_toy</span>
                </div>
                <h3 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26] mb-2">Yapay Zeka Destekli Analizler</h3>
                <p className="font-body text-base text-[#6B6560] mb-6">Geçmiş verileri makine öğrenimi modelleriyle analiz ederek gelecek çeyrek için talep tahminleri ve risk uyarıları oluşturun.</p>
                <div className="bg-blue-500/5 border border-[#B8C7A3]/20 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#8FA87A] animate-pulse" />
                  <span className="font-body text-sm font-medium text-[#4A4540]">Öngörü: Kategori A&apos;da %8 talep artışı bekleniyor.</span>
                </div>
              </div>
              <div className="animate-on-scroll stagger-3 col-span-1 md:col-span-6 bg-white border border-[#D4C4B0]/30 rounded-2xl p-10 hover:border-[#B8C7A3]/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#F7C8D0]/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#E8A5B0] text-2xl">assignment</span>
                </div>
                <h3 className="font-display text-[28px] font-semibold leading-[36px] text-[#2D2A26] mb-2">Yönetici Düzeyi Raporlama</h3>
                <p className="font-body text-base text-[#6B6560] mb-6">Yönetim kurulu sunumları için hazır, estetik ve veri odaklı raporları tek tıkla dışa aktarın.</p>
                <div className="flex gap-2">
                  {["PDF", "CSV", "API"].map((f) => (
                    <span key={f} className="px-3 py-1.5 bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg font-body text-xs font-bold tracking-wide text-[#6B6560]">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto border-t border-[#D4C4B0]/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="col-span-1 md:col-span-4">
                <h2 className="animate-on-scroll font-display text-5xl font-semibold leading-[56px] text-[#2D2A26] mb-4 max-[768px]:text-4xl">Teknik Altyapı</h2>
                <p className="animate-on-scroll stagger-1 font-body text-base text-[#6B6560]">Kurumsal düzeyde güvenlik ve performans için tasarlanmış mimari.</p>
              </div>
              <div className="col-span-1 md:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {infraItems.map((item, i) => (
                    <div key={item.title} className={`animate-on-scroll stagger-${i + 1} bg-white rounded-xl p-6 border border-[#D4C4B0]/30`}>
                      <h4 className="font-body text-sm font-semibold text-[#2D2A26] mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#8FA87A] text-lg">{item.icon}</span>
                        {item.title}
                      </h4>
                      <p className="font-body text-base text-[#6B6560]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </AnimatedPage>
      <Footer />
    </>
  );
}
