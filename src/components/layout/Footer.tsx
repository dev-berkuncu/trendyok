import React from "react";

const footerLinks = [
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Şartları", href: "#" },
  { label: "KVKK", href: "#" },
];

const footerColumns = [
  { title: "Ürün", links: ["Özellikler", "Fiyatlandırma", "Entegrasyonlar", "API"] },
  { title: "Şirket", links: ["Hakkımızda", "Kariyer", "Blog", "İletişim"] },
  { title: "Destek", links: ["Yardım Merkezi", "Dokümantasyon", "Topluluk", "Durum"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFF8F0] border-t border-[#D4C4B0]/30 pt-20 pb-10 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="md:col-span-4">
            <div className="font-display text-[28px] font-bold text-[#2D2A26] mb-6 tracking-tight">Trendyok</div>
            <p className="font-body text-base text-[#8C857E] max-w-xs leading-relaxed mb-6">E-ticaret işletmeniz için güçlü analitik araçlar. Verilerinizi kârlılığa dönüştürün.</p>
            <div className="flex space-x-4">
              {["public", "terminal", "alternate_email"].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-[#2D2A26]/[0.03] flex items-center justify-center text-[#8C857E] hover:text-[#8FA87A] hover:bg-[#2D2A26]/[0.05] transition-all duration-300">
                  <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-body text-sm font-bold text-[#4A4540] mb-4 uppercase tracking-wide">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="font-body text-sm text-[#8C857E] hover:text-[#2D2A26] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#D4C4B0]/30 gap-6">
          <p className="font-body text-xs text-[#8C857E]">© 2024 Trendyok Analytics. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 flex-wrap">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-body text-xs text-[#8C857E] hover:text-[#6B6560] transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
