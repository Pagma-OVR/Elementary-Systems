"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Elementary Systems — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/monogram.svg" alt="Monograma Elementary Systems" width={32} height={32} />
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-[0.25em] text-ivory">ELEMENTARY</span>
            <span className="text-[0.6rem] tracking-[0.42em] text-gold">SYSTEMS</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-sm transition-colors hover:text-gold ${
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
                  ? "text-gold"
                  : "text-stone"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="inline-flex min-h-10 items-center bg-ivory px-5 text-sm font-semibold text-obsidian transition-colors hover:bg-gold"
          >
            Fale com a Elementary
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/15 text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>
      {open ? (
        <nav id="menu-mobile" aria-label="Navegação móvel" className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center text-sm text-ivory transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center bg-ivory px-5 text-sm font-semibold text-obsidian"
              >
                Fale com a Elementary
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
