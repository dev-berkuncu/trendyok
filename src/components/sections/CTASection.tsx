import React from "react";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function CTASection() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] to-[#F5E6D3]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,199,163,0.2)_0%,_transparent_60%)]" />
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="animate-on-scroll font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-[#2D2A26] mb-8 max-[768px]:text-[32px] max-[768px]:leading-[40px]">
          İşletmenizi Büyütmeye<br />Hazır Mısınız?
        </h2>
        <p className="animate-on-scroll stagger-1 font-body text-lg leading-[28px] text-[#6B6560] mb-12 max-w-2xl mx-auto">14 gün ücretsiz deneyin. Kredi kartı gerekmez. İstediğiniz zaman iptal edin.</p>
        <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="text-base shadow-[0_0_40px_rgba(143,168,122,0.25)]">Ücretsiz Deneyin</Button>
          <Button variant="secondary" size="lg" className="text-base">Satış Ekibiyle Konuşun</Button>
        </div>
      </div>
    </section>
  );
}
