import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/monogram.svg" alt="Monograma Elementary Systems" width={28} height={28} />
            <span className="flex flex-col leading-none">
              <span className="text-xs font-semibold tracking-[0.25em] text-ivory">ELEMENTARY</span>
              <span className="text-[0.6rem] tracking-[0.42em] text-gold">SYSTEMS</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone">
            Sistemas feitos simples. Software para operações reais.
          </p>
          <p className="text-xs tracking-widest text-stone/70 uppercase">Systems made simple</p>
        </div>
        <nav aria-label="Soluções">
          <p className="mb-4 text-xs font-semibold tracking-widest text-ivory uppercase">Soluções</p>
          <ul className="flex flex-col gap-2 text-sm text-stone">
            <li><Link className="transition-colors hover:text-gold" href="/solucoes">Catálogo</Link></li>
            <li><Link className="transition-colors hover:text-gold" href="/solucoes/fieldflow">FieldFlow</Link></li>
            <li><Link className="transition-colors hover:text-gold" href="/solucoes/buildflow">BuildFlow</Link></li>
            <li><Link className="transition-colors hover:text-gold" href="/solucoes/complianceflow">ComplianceFlow</Link></li>
          </ul>
        </nav>
        <nav aria-label="Empresa">
          <p className="mb-4 text-xs font-semibold tracking-widest text-ivory uppercase">Empresa</p>
          <ul className="flex flex-col gap-2 text-sm text-stone">
            <li><Link className="transition-colors hover:text-gold" href="/sobre">Sobre</Link></li>
            <li><Link className="transition-colors hover:text-gold" href="/projetos">Projetos</Link></li>
            <li><Link className="transition-colors hover:text-gold" href="/contato">Contato</Link></li>
          </ul>
        </nav>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-widest text-ivory uppercase">Contato</p>
          <p className="text-sm leading-relaxed text-stone">
            Canais configurados via ambiente do projeto. Nenhum contato fictício exibido aqui.
          </p>
          <Link href="/contato" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-ivory">
            Falar com a Elementary <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-stone/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elementary Systems.</p>
          <p>Software · Precisão · Simplicidade</p>
        </div>
      </div>
    </footer>
  );
}
