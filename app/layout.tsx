import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elementary.systems"),
  title: {
    default: "Elementary Systems — Systems Made Simple",
    template: "%s — Elementary Systems",
  },
  description:
    "A Elementary Systems cria sistemas web e SaaS que transformam processos manuais e fragmentados em operações digitais, organizadas e mensuráveis. Sistemas feitos simples.",
  keywords: [
    "sistemas web",
    "software sob medida",
    "SaaS",
    "gestão de operações",
    "Elementary Systems",
  ],
  authors: [{ name: "Elementary Systems" }],
  creator: "Elementary Systems",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Elementary Systems",
    title: "Elementary Systems — Systems Made Simple",
    description:
      "Transformamos processos manuais, fragmentados e difíceis de controlar em operações digitais, organizadas e mensuráveis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elementary Systems — Systems Made Simple",
    description:
      "Sistemas web e SaaS para operações reais. Sistemas feitos simples.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} h-full`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-obsidian text-ivory antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-obsidian"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
