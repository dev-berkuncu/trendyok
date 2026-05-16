"use client";

import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-[#162040] border border-white/5 rounded-2xl p-8 md:p-12">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body text-sm font-semibold text-gray-300 mb-2">
              Ad Soyad
            </label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-gray-600"
              placeholder="Adınız Soyadınız"
              type="text"
            />
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-gray-300 mb-2">
              E-posta Adresi
            </label>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-gray-600"
              placeholder="ornek@sirket.com"
              type="email"
            />
          </div>
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-gray-300 mb-2">
            Şirket Adı
          </label>
          <input
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none placeholder:text-gray-600"
            placeholder="Şirketinizin adı"
            type="text"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-gray-300 mb-2">
            Mesajınız
          </label>
          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-body text-base focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all outline-none resize-none placeholder:text-gray-600"
            placeholder="Size nasıl yardımcı olabiliriz?"
            rows={4}
          />
        </div>
        <button
          className="w-full bg-emerald-accent text-white font-body text-base font-semibold py-4 rounded-lg hover:bg-[#1D4ED8] transition-all cursor-pointer shadow-lg shadow-blue-500/20"
          type="submit"
        >
          Mesaj Gönder
        </button>
      </form>
    </div>
  );
}
