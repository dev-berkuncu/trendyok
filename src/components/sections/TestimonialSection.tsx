import React from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FFF4E6] px-margin-mobile md:px-margin-desktop border-y border-[#D4C4B0]/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-on-scroll inline-flex items-center justify-center w-16 h-16 bg-[#B8C7A3]/15 rounded-full mb-8">
          <span className="material-symbols-outlined text-[#8FA87A] text-4xl">
            format_quote
          </span>
        </div>
        <h2 className="animate-on-scroll stagger-1 font-display text-[32px] md:text-5xl md:leading-[56px] font-medium italic leading-tight mb-10 text-[#2D2A26]">
          &ldquo;Trendyok, kârlılığa bakış açımızı yeniden tanımladı. Artık
          hangi ürünümüzün gerçekten kâr ettiğini biliyoruz.&rdquo;
        </h2>
        <div className="animate-on-scroll stagger-2 flex items-center justify-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-white border border-[#D4C4B0]/40 overflow-hidden">
            <Image
              alt="Executive"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsg31Pl8O2mO8UBaxXcvTo9HaWvr3WJgLRfIjMzMwgN0BHTof_wRjd6ZCoQL8msmhuTpWXFnioj22wSjmgfOhqlVjnOIoGp0eV9TsLOBd7XU32h5FdfHGAvAykELi6uAs99516riMITU-IvQizUVp1Z90x-ouRzzKOT-fY2qwQt8LtxpgnzEPa9FWy8YYVJ9KKXuG4egk8wilNV1SqO7KTUr9ITv-3N6LG-Zsw0p8HDs-SW-rVui38xyyYNzZ0n8e4UPOYQcJWdj8"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="text-left">
            <p className="font-body text-sm font-semibold text-[#2D2A26]">
              Mehmet Yılmaz
            </p>
            <p className="font-body text-xs text-[#8C857E]">
              E-Ticaret Direktörü, ABC Mağazacılık
            </p>
          </div>
        </div>

        {/* Trust counters */}
        <div className="animate-on-scroll stagger-3 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#D4C4B0]/30">
          {[
            { end: 10000, suffix: "+", label: "Aktif İşletme" },
            { end: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
            { end: 2.4, suffix: "B+", prefix: "₺", label: "İşlenen Veri", decimals: 1 },
            { end: 35, suffix: "+", label: "Entegrasyon" },
          ].map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="font-display text-3xl md:text-4xl font-bold text-[#2D2A26]">
                <AnimatedCounter
                  end={m.end}
                  suffix={m.suffix}
                  prefix={m.prefix || ""}
                  decimals={m.decimals || 0}
                  duration={2000}
                />
              </div>
              <div className="font-body text-xs text-[#8C857E] tracking-wide">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
