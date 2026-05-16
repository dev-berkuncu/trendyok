"use client";

import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white border border-[#D4C4B0]/30 rounded-2xl p-8 md:p-12">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body text-sm font-semibold text-[#4A4540] mb-2">
              Ad Soyad
            </label>
            <input
              className="w-full bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg px-4 py-3 text-[#2D2A26] font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-[#8C857E]"
              placeholder="Adınız Soyadınız"
              type="text"
            />
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-[#4A4540] mb-2">
              E-posta Adresi
            </label>
            <input
              className="w-full bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg px-4 py-3 text-[#2D2A26] font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-[#8C857E]"
              placeholder="ornek@sirket.com"
              type="email"
            />
          </div>
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-[#4A4540] mb-2">
            Şirket Adı
          </label>
          <input
            className="w-full bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg px-4 py-3 text-[#2D2A26] font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-[#8C857E]"
            placeholder="Şirketinizin adı"
            type="text"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-[#4A4540] mb-2">
            Mesajınız
          </label>
          <textarea
            className="w-full bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg px-4 py-3 text-[#2D2A26] font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none resize-none placeholder:text-[#8C857E]"
            placeholder="Size nasıl yardımcı olabiliriz?"
            rows={4}
          />
        </div>
        <button
          className="w-full bg-[#8FA87A] text-[#2D2A26] font-body text-base font-semibold py-4 rounded-lg hover:bg-[#7A9566] transition-all cursor-pointer shadow-lg shadow-[#B8C7A3]/20"
          type="submit"
        >
          Mesaj Gönder
        </button>
      </form>
    </div>
  );
}
