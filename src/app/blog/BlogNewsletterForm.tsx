"use client";

import React from "react";

export default function BlogNewsletterForm() {
  return (
    <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body text-base text-white focus:outline-none focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all duration-300 placeholder:text-gray-500"
        placeholder="E-posta adresiniz"
        type="email"
      />
      <button
        type="submit"
        className="bg-emerald-accent text-white font-body text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#1D4ED8] transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/20"
      >
        Abone Ol
      </button>
    </form>
  );
}
