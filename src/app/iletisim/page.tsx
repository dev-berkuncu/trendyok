import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";
import AnimatedPage from "@/components/ui/AnimatedPage";

export const metadata: Metadata = {
  title: "İletişim | Trendyok",
  description: "Trendyok ekibiyle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.",
};

const supportFeatures = [
  { icon: "shield_lock", iconColor: "text-emerald-accent", iconBg: "bg-blue-500/10", title: "Güvenli İletişim", desc: "Tüm verileriniz uçtan uca şifreleme ile korunur." },
  { icon: "schedule", iconColor: "text-indigo-accent", iconBg: "bg-cyan-500/10", title: "7/24 Destek", desc: "İhtiyacınız olduğunda destek ekibimiz her zaman yanınızda." },
  { icon: "globe", iconColor: "text-emerald-accent", iconBg: "bg-blue-500/10", title: "Global Erişim", desc: "Dünyanın her yerinden platformumuza erişin ve işletmenizi büyütün." },
];

const offices = [
  { city: "İstanbul", region: "TÜRKİYE", regionColor: "text-emerald-accent", address: "Maslak Mahallesi, Büyükdere Cad.\nİstanbul 34398, Türkiye", email: "istanbul@trendyok.com", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzDDpXMhXO9cidt2DrrJ2h4TKMpvypEk-I1syISYdHp5GzB0aAp9MsQJ7ChaKxgmfP1eallUKTo1FhHneps6O9QH7iqUC-bhFcgkapWgzrdUXJbozQ17yvEFYnX3I4L02osRLJWoVeSTLiw8iDKLThOKzETZsUx4EB4IlBU8OgZCZ4JRlw5QmeONvLiwH1Y0rfN6PyPY45vDKrjFV6m4Hu_6I49UmDLZrbSKxAbqluJedhH3wBr1HDmM78chFouFNSU-53S4_iH0" },
  { city: "Londra", region: "EMEA", regionColor: "text-indigo-accent", address: "1 Canada Square, Canary Wharf\nLondon E14 5AB, İngiltere", email: "london@trendyok.com", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSXQH5-qoqOEEl6FEGzSiJGW8EKjlISKxf6-sCuiUrR1wKKKIqacTu_HeOpAttA4p_lEWqrzSw9KYFmav94tve-LELA7ExpN4LV-4PQoDcdaiw25w81kfVwZ42uYGqWmUozV81YRMN0-HXfho0llhWDS4i-xgVRNbD3Ur5GHR8BGAKfBK36QFgtgRLA4LTGrA0wuFRF2TPKU_OBDkHD10jVVLTxnnkm6RePj0pL-ZZ-K8XfvGYLanLLWuN1As7Dp6JZwiLqlF1Xw4" },
  { city: "Singapur", region: "APAC", regionColor: "text-emerald-accent", address: "Marina Bay Financial Centre\n12 Marina Blvd, Singapur 018982", email: "sg@trendyok.com", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUxBxP517hOjHC9HKxM5znJbVQaeue8E1975kQlms5cndyaZzWu33zP72VdvzNXFFjcSo2BHV51BtIjbhzM4-gk_atJjiLbJlI-ExkzJwPxUdYs8R16UanM2s2CyZ2yjd7ipHckcqB4tRChxueaVjCdAO_xA-fjaCzT4i4YCufSIiDBaBCmF9M0ZkCZS_Ok8ZtbUp_vOsaIf4d4xwJI-46BLWTHG86lkLvhWHdf5eRdy0eEQMKusEeAa3DmTDOpGIjdAZMsudkbdo" },
];

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <main className="flex-grow pt-20">
          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto text-center">
            <h1 className="animate-on-scroll font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-white mb-6 max-[768px]:text-[32px] max-[768px]:leading-[40px]">Bizimle İletişime Geçin</h1>
            <p className="animate-on-scroll stagger-1 font-body text-lg leading-[28px] text-gray-400 max-w-2xl mx-auto mb-12">Sorularınız veya demo talepleriniz için formu doldurun. En kısa sürede size dönüş yapacağız.</p>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="animate-on-scroll lg:col-span-7"><ContactForm /></div>
              <div className="lg:col-span-5 flex flex-col justify-center space-y-8 mt-12 lg:mt-0 pl-0 lg:pl-12">
                {supportFeatures.map((f, i) => (
                  <div key={f.title} className={`animate-on-scroll stagger-${i + 1} flex items-start space-x-4`}>
                    <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center shrink-0`}>
                      <span className={`material-symbols-outlined ${f.iconColor}`}>{f.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-body text-lg font-semibold text-white mb-1">{f.title}</h3>
                      <p className="font-body text-base text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto border-t border-white/5">
            <div className="mb-12">
              <h2 className="animate-on-scroll font-display text-[40px] font-semibold leading-[48px] text-white mb-4">Ofislerimiz</h2>
              <p className="animate-on-scroll stagger-1 font-body text-base text-gray-400">Küresel ekibimizle tanışın.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((o, i) => (
                <div key={o.city} className={`animate-on-scroll stagger-${i + 1} bg-[#162040] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/15 transition-colors duration-300`}>
                  <div className="h-48 bg-[#0A1020] relative">
                    <img alt={`${o.city} Ofisi`} src={o.image} width={640} height={192} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162040] to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <span className={`inline-block px-3 py-1 bg-[#0C1425]/80 border border-white/10 font-body text-xs font-bold tracking-wide ${o.regionColor} rounded-full mb-2`}>{o.region}</span>
                      <h3 className="font-display text-[28px] font-semibold text-white leading-none">{o.city}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-base text-gray-400 mb-4 whitespace-pre-line">{o.address}</p>
                    <div className="flex items-center text-gray-400 hover:text-emerald-accent transition-colors cursor-pointer w-fit">
                      <span className="material-symbols-outlined text-[20px] mr-2">mail</span>
                      <span className="font-body text-sm font-medium">{o.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </AnimatedPage>
      <Footer />
    </>
  );
}
