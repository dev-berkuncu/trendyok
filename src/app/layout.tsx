import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Trendyok — E-Ticaret Kârlılığında Tam Uzmanlık",
  description:
    "Dünyanın en kârlı tüccarlarına katılın. Trendyok premium analitik altyapısıyla e-ticaret operasyonlarınızı optimize edin.",
  keywords: [
    "e-ticaret",
    "analitik",
    "kârlılık",
    "SaaS",
    "dashboard",
    "Trendyok",
  ],
  openGraph: {
    title: "Trendyok — E-Ticaret Kârlılığında Tam Uzmanlık",
    description:
      "Premium analitik altyapısıyla e-ticaret operasyonlarınızı optimize edin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${bodoniModa.variable} ${hankenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
