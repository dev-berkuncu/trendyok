import React from "react";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function CTASection() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1425] to-[#060A14]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_transparent_60%)]" />
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="animate-on-scroll font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-white mb-8 max-[768px]:text-[32px] max-[768px]:leading-[40px]">
          İşletmenizi Büyütmeye<br />Hazır Mısınız?
        </h2>
        <p className="animate-on-scroll stagger-1 font-body text-lg leading-[28px] text-gray-400 mb-12 max-w-2xl mx-auto">14 gün ücretsiz deneyin. Kredi kartı gerekmez. İstediğiniz zaman iptal edin.</p>
        <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="text-base shadow-[0_0_40px_rgba(37,99,235,0.3)]">Ücretsiz Deneyin</Button>
          <Button variant="secondary" size="lg" className="text-base">Satış Ekibiyle Konuşun</Button>
        </div>
      </div>
    </section>
  );
}
