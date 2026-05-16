"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Özellikler", href: "/ozellikler" },
  { label: "Çalışmalar", href: "/calismalar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#0C1425]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10">
      <nav className="flex justify-between items-center w-full h-16 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <Link href="/" className="font-display text-[28px] font-bold text-white tracking-tight">
          Trendyok
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`font-body text-sm font-medium transition-all duration-300 ${isActive ? "text-emerald-accent border-b-2 border-emerald-accent pb-0.5" : "text-gray-400 hover:text-white"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-sm font-medium text-gray-400 hover:text-emerald-accent transition-colors duration-300 cursor-pointer">Giriş Yap</button>
          <Button variant="primary" size="default">Ücretsiz Deneyin</Button>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü aç">
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-margin-mobile py-6 border-t border-white/10 bg-[#0C1425] flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`font-body text-base py-2 transition-colors ${isActive ? "text-emerald-accent font-semibold" : "text-gray-400 hover:text-emerald-accent"}`}>
                {link.label}
              </Link>
            );
          })}
          <Button variant="primary" size="default" className="mt-2">Ücretsiz Deneyin</Button>
        </div>
      </div>
    </header>
  );
}
