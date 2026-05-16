"use client";

import React from "react";

export default function BlogNewsletterForm() {
  return (
    <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        className="flex-grow bg-[#2D2A26]/[0.03] border border-[#D4C4B0]/40 rounded-lg px-4 py-3 font-body text-base text-[#2D2A26] focus:outline-none focus:border-emerald-accent focus:ring-2 focus:ring-emerald-accent/20 transition-all duration-300 placeholder:text-[#8C857E]"
        placeholder="E-posta adresiniz"
        type="email"
      />
      <button
        type="submit"
        className="bg-[#8FA87A] text-[#2D2A26] font-body text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#7A9566] transition-all duration-300 cursor-pointer shadow-lg shadow-[#B8C7A3]/20"
      >
        Abone Ol
      </button>
    </form>
  );
}
