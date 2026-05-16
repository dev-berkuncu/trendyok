import React from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const partnerLogos = [
  { name: "Shopify", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx_SyJa2RDYszhX5h6mdvaFcN9yWlQEVHZno_6PgSQSl9bJ5JBuHOGZhqSTUtol_s3YmJOY3TbzJp3OmsXegdxkBNhAuA4zDcIPt3hKGX3_48A9P7cTTWhLtRWIW-vy7z7js4fJSS5kZB8hlP3LJoizGt7AIwbd5sehns1CxuBhRtqqtth-LOZCmLL3r9SE6syQ-KKy9zMMLxyl9tOd7rwZUAnhm2a6NN3Ao9g4b5e-taA4_se3tfguvdDWA3_nqtOHu6ulYOf664", height: "h-6" },
  { name: "Amazon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYBarDK4Qews1qZifNrtRUFw3PBNfyvXTgCPzaBFgb7I8bPl8TttxFWgl_yYUu6-BSPL1St-YzrlExKUjHJs4YrwUOIbMXqesMmOVqd_5OGNXn4R8vyGIGams52wpkMFQxHb6fa_8FENI8J5NMfggktVRs_v5AE9kdJbrSu6uxJTybDJfy2Vrwj1yeojUNKsb-zpKJnQEnpf77Qtz3Kdh9mpDyYqd6ncXekwcHfHhGo_4H94nB49Xk1VD89xI751HcwOp1RhmmA6g", height: "h-5" },
  { name: "Google Ads", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg06n6LBShWKjPI58cRbou3LPLHFVa0h-wsdJRJmIvClgOSRDoOw1sf1vCays3cBhw614tGnBGFeu-Pzz80B1aR-FDRxtZyr02OIHh36QfyxyEz9GMLOUDoY3dDoqz45Axs_BziWbu7XG8fYCJ7s98f6Dda5s_MrPmXwNMYwLlkG0awfyekP-GafUG850-p59fxw-fdICIU9nuJgX-V2GM47qpGq5d7CfmuprUPdHdFGRnOCEL3jfz5DVFVaSMqIFXtGeVMingx6c", height: "h-6" },
  { name: "Netflix", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKRsUA8SYoJeZU60hBLhFQ2A4gZzArrI4QybYdnPOO_u6HFQcM0yWwYjLXsGLOs_6JxvhXsN58LLEN95PUSitD2XdYh8bBahpEzO1wMVmUe-STYM7YWMom9ecrc48BTPJ6gjVWZXEAx3QjQYFvTFOuQ58AwpS8HKqchjRBY2qkN5zr_HFSE7dgXLB2-l1ydPyLVzu2btNsBaMVQocczDGxyTdKq3kf3x9Cy7InB_v9pHKWzqEMejK1l80dgxPelN2aqDvERC-Z1Io", height: "h-4" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-section-padding px-margin-mobile md:px-margin-desktop hero-gradient overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-gutter relative z-10">
        <div className="lg:col-span-6">
          <span className="animate-on-scroll inline-flex items-center gap-2 bg-blue-500/10 text-emerald-accent font-body text-xs font-bold tracking-wide px-4 py-2 rounded-full mb-6 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
            Türkiye&apos;nin #1 E-Ticaret Analitik Platformu
          </span>

          <h1 className="animate-on-scroll stagger-1 font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-white mb-8 max-[768px]:text-[32px] max-[768px]:leading-[40px]">
            E-Ticaret&nbsp;<br />
            <span className="text-gradient-blue">Kârlılığını</span><br />
            Artırın
          </h1>

          <p className="animate-on-scroll stagger-2 font-body text-lg leading-[28px] text-gray-400 max-w-lg mb-10">
            Satışlarınızı analiz edin, maliyetlerinizi optimize edin ve kârlılığınızı artırın. 10.000+ e-ticaret işletmesinin güvendiği platform.
          </p>

          <div className="animate-on-scroll stagger-3 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="text-base">Ücretsiz Deneyin</Button>
            <Button variant="secondary" size="lg" className="text-base">Demo İzleyin</Button>
          </div>

          <div className="animate-on-scroll stagger-4 mt-16">
            <p className="font-body text-xs font-bold tracking-wide text-gray-600 mb-5">10.000+ İŞLETMENİN TERCİHİ</p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
              {partnerLogos.map((logo) => (
                <img key={logo.name} alt={logo.name} src={logo.src} width={120} height={24} className={`${logo.height} w-auto object-contain brightness-0 invert`} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-16 lg:mt-0">
          <div className="animate-on-scroll scale-up stagger-2 glass-panel p-2 rounded-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image alt="Trendyok Analytics Dashboard" src="/hero-dashboard.png" width={800} height={500} className="rounded-xl w-full" priority />
          </div>
          <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute -z-10 -top-20 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
