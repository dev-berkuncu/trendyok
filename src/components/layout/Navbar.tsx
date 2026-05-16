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
    <header className="bg-[#FFF4E6]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-[#D4C4B0]/40">
      <nav className="flex justify-between items-center w-full h-16 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <Link href="/" className="font-display text-[28px] font-bold text-[#2D2A26] tracking-tight">
          Trendyok
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`font-body text-sm font-medium transition-all duration-300 ${isActive ? "text-[#8FA87A] border-b-2 border-[#8FA87A] pb-0.5" : "text-[#6B6560] hover:text-[#2D2A26]"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-sm font-medium text-[#6B6560] hover:text-[#8FA87A] transition-colors duration-300 cursor-pointer">Giriş Yap</button>
          <Button variant="primary" size="default">Ücretsiz Deneyin</Button>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü aç">
          <span className={`block w-6 h-0.5 bg-[#2D2A26] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2D2A26] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2D2A26] transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-margin-mobile py-6 border-t border-[#D4C4B0]/40 bg-[#FFF4E6] flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`font-body text-base py-2 transition-colors ${isActive ? "text-[#8FA87A] font-semibold" : "text-[#6B6560] hover:text-[#8FA87A]"}`}>
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
