import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogNewsletterForm from "./BlogNewsletterForm";
import AnimatedPage from "@/components/ui/AnimatedPage";

export const metadata: Metadata = {
  title: "Blog | Trendyok",
  description:
    "Pazar trendleri, kârlılık stratejileri ve büyüme odaklı analizlerle işinizi bir sonraki seviyeye taşıyacak uzman görüşleri.",
};

const articles = [
  {
    type: "featured",
    cols: "md:col-span-8",
    category: "Pazar Trendleri",
    categoryColor: "text-[#E8A5B0] bg-[#F7C8D0]/20",
    readTime: "8 Dk",
    title: "2024 E-ticaret Ekosisteminde Kârlılık Paradigması",
    excerpt:
      "E-ticaret markalarının benimsemesi gereken sürdürülebilir büyüme ve operasyonel verimlilik stratejileri.",
    author: "Ahmet Erdem",
    authorInitials: "AE",
    authorRole: "Strateji Direktörü",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSlHZF76WoYRI9ELLFg4YfF_5fzDzOjimVZjM4hFA5SI9uaovlLVpRJudx6lBhOYw0JfkOGdtqWTkiDlmTMhWuHmp6gYkKJFe2fhFkPEbBpleCZI8EMBAFklJ3rcS0g8nuwByNuCIwMrVuISSbnr2aXHla71yuHOS6IHNgHQfewPm-pZoyagnjrFYnZPKdIoyVLU5vGmSDDQHmH926nWEGbmFd1IehRxkUU0HeFNuSXM9gqkRBf2IGnvErSrlld0IIPID-9VHDgWc",
    imageH: "h-64",
  },
  {
    type: "small",
    cols: "md:col-span-4",
    category: "Strateji",
    categoryColor: "text-[#8FA87A] bg-[#B8C7A3]/15",
    readTime: "5 Dk",
    title: "Müşteri Elde Tutma Maliyetlerini Optimize Etmek",
    excerpt:
      "Yeni müşteri kazanım maliyetlerinin arttığı dönemde sadakat programlarının stratejik önemi.",
    author: "Burcu Yılmaz",
    authorInitials: "BY",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbLmVzk3H23YQivOFEaNPG0jyIQong5589h8Sfk8Dl2NaO_TEAWo7eMZCjXTFyGfZO4PjoR-ohIDl45ezeFM2C3lqzMoZ85DHG-I11fGLScDHiklZUxvE4r62Idt_R-72un6hFQQURp2aErqNvP2szTlOx4g5UPEqZAxih5ud65OKSsNB7sgZtCAcrLyARO976tOrNRH1wudHzrLfQ5mRSCe_4gu2fNqIF48JZ71KI-6UxOzPSODKnmONPOo2yV0oCbWbt7C7vIJg",
    imageH: "h-48",
  },
  {
    type: "text",
    cols: "md:col-span-4",
    category: "Finans",
    categoryColor: "text-[#E8A5B0] bg-[#F7C8D0]/20",
    readTime: "4 Dk",
    title: "Açık Bankacılık ve E-ticaret Entegrasyonu",
    excerpt:
      "Finansal verilerin e-ticaret platformlarıyla entegrasyonuyla kişiselleştirilmiş ödeme çözümleri.",
    author: "Can Kaya",
    authorInitials: "CK",
  },
  {
    type: "text",
    cols: "md:col-span-4",
    category: "Vaka Analizi",
    categoryColor: "text-[#8FA87A] bg-[#B8C7A3]/15",
    readTime: "6 Dk",
    title: "Lojistik Ağlarında Veri Odaklı Dönüşüm",
    excerpt:
      "Tahmine dayalı analitiğin teslimat süreleri ve maliyetleri üzerindeki etkileri.",
    author: "Deniz Tekin",
    authorInitials: "DT",
  },
  {
    type: "small",
    cols: "md:col-span-4",
    category: "Pazar Trendleri",
    categoryColor: "text-[#E8A5B0] bg-[#F7C8D0]/20",
    readTime: "7 Dk",
    title: "B2B Pazaryerlerinde Yükselen Dinamikler",
    excerpt:
      "Kurumsal alımların dijitalleşmesi ve yeni nesil tedarik zinciri modelleri.",
    author: "Ahmet Erdem",
    authorInitials: "AE",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC76lEu0BbvOPZh_DZarxx6nXPyKSMUE0XnL7L7MX1uXAE1TDCK_1D8iNyhMsR2ZRkEs4q21ET4sz8DAU9D-IRudEzudwjY72zUlUGsJVFfzAesZkAjq6cEcEmBbI94NVgVLQqMF9Ge4Iy4yWRNLuYoKu0NuIPPWiwfOVYuhN0C34OeLlHjKAS6Rfv3Rw2nO4oWO33VKg765yRDWwTkbVlHUGZ0Gef5BLsyxBEJBPqdpP93EAkzsVzqZXHRfGtKpVzPhKcB7MmJRO0",
    imageH: "h-48",
  },
];

function AuthorBadge({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-[#B8C7A3]/20 text-[#8FA87A] border border-[#B8C7A3]/25 flex items-center justify-center text-xs font-bold">
        {initials}
      </div>
      <div>
        <div className="font-body text-sm font-semibold text-[#2D2A26]">{name}</div>
        {role && (
          <div className="font-body text-xs text-[#8C857E]">{role}</div>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <main className="flex-grow pt-20">
          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto border-b border-[#D4C4B0]/30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
                <span className="animate-on-scroll font-body text-xs font-bold tracking-wide text-[#8FA87A] uppercase mb-4 block">
                  Blog
                </span>
                <h1 className="animate-on-scroll stagger-1 font-display text-[56px] font-bold leading-[64px] tracking-[-0.02em] text-[#2D2A26] mb-6 max-[768px]:text-[32px] max-[768px]:leading-[40px]">
                  E-ticaret Dünyasından Güncel Yazılar
                </h1>
                <p className="animate-on-scroll stagger-2 font-body text-lg leading-[28px] text-[#6B6560] max-w-2xl">
                  Pazar trendleri, kârlılık stratejileri ve büyüme odaklı
                  analizlerle işinizi bir sonraki seviyeye taşıyacak uzman
                  görüşleri.
                </p>
              </div>
              <div className="animate-on-scroll stagger-3 scale-up col-span-1 md:col-span-4 mt-8 md:mt-0">
                <div
                  className="w-full h-full min-h-[300px] bg-white border border-[#D4C4B0]/30 rounded-2xl relative overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAIgPWB-a7fMr_pdCGg8CrkLNXqtC0zWObL9Ndbpsq0kPgq4O2iTWZukV76ZBUn8itkM14UW0fJPni3b5IsLGodHEN2L1qXjoXJSnNHge-nuQZiHfLSyywVyPJryNmDhCD4N6Rkexu7cJBu7qVDsPLbUxd0-Y0FN651hMD5egG9rOPwrrJ3G-PUDe4GxRrRSTVV9Nsa2GU9hcDjmXiKIO7zhVmpcqa25l3-Na-9HSIUmYqqUro9XeuDyX1eoTZjMZvib0td_IMO_4")',
                  }}
                >
                  <div className="absolute inset-0 bg-[#FFF4E6]/40" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {articles.map((a, i) => (
                <article
                  key={a.title}
                  className={`animate-on-scroll stagger-${Math.min(i + 1, 5)} col-span-1 ${a.cols} bg-white border border-[#D4C4B0]/30 rounded-2xl group cursor-pointer hover:border-[#B8C7A3]/40 transition-all duration-300 flex flex-col overflow-hidden`}
                >
                  {a.imageUrl && (
                    <div
                      className={`${a.imageH} w-full bg-[#F5E6D3] relative overflow-hidden bg-cover bg-center`}
                      style={{
                        backgroundImage: `url("${a.imageUrl}")`,
                      }}
                    />
                  )}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span
                          className={`font-body text-xs font-bold tracking-wide ${a.categoryColor} px-3 py-1 rounded-full`}
                        >
                          {a.category}
                        </span>
                        <span className="font-body text-xs font-bold tracking-wide text-[#8C857E]">
                          {a.readTime}
                        </span>
                      </div>
                      <h3
                        className={`font-display ${a.type === "featured" ? "text-[28px]" : "text-[24px]"} font-semibold leading-tight text-[#2D2A26] mb-3 group-hover:text-[#8FA87A] transition-colors duration-300`}
                      >
                        {a.title}
                      </h3>
                      <p className="font-body text-base text-[#6B6560] mb-6">
                        {a.excerpt}
                      </p>
                    </div>
                    <AuthorBadge
                      initials={a.authorInitials}
                      name={a.author}
                      role={a.authorRole}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto border-t border-[#D4C4B0]/30">
            <div className="animate-on-scroll bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-[#D4C4B0]/30 rounded-2xl p-8 md:p-16 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[56px] text-[#8FA87A] mb-6">
                mark_email_read
              </span>
              <h2 className="font-display text-[40px] font-semibold leading-[48px] text-[#2D2A26] mb-4 max-[768px]:text-[28px]">
                E-ticaret İçgörüleri Kutunuza Gelsin
              </h2>
              <p className="font-body text-lg leading-[28px] text-[#6B6560] max-w-2xl mb-8">
                Her hafta e-ticaret dünyasından özenle seçilmiş analizleri
                doğrudan e-posta adresinize gönderiyoruz.
              </p>
              <BlogNewsletterForm />
            </div>
          </section>
        </main>
      </AnimatedPage>
      <Footer />
    </>
  );
}
