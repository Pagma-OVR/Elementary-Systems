import Link from "next/link";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-gold/40 px-3 py-1 text-xs font-medium tracking-wide text-gold">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display max-w-2xl text-3xl leading-tight font-medium text-ivory sm:text-4xl">
        {title}
      </h2>
      <div className="rule-gold" aria-hidden="true" />
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-stone">{description}</p>
      ) : null}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Navegação estrutural">
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-stone">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden="true" className="text-stone/50">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ivory">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FeatureCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <article className="card-surface flex flex-col gap-3 p-7">
      <span className="font-display text-sm text-gold">{index}</span>
      <h3 className="text-lg font-semibold text-ivory">{title}</h3>
      <p className="text-sm leading-relaxed text-stone">{description}</p>
    </article>
  );
}

export function FlowDiagram({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col gap-2 bg-obsidian p-6">
          <span className="text-xs font-semibold tracking-widest text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-sm font-semibold text-ivory">{s.title}</p>
          <p className="text-xs leading-relaxed text-stone">{s.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function ShowcasePlaceholder({ product }: { product: string }) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para a interface futura do ${product}`}
      className="flex min-h-72 flex-col items-center justify-center gap-3 border border-dashed border-white/15 bg-graphite/60 p-10 text-center"
    >
      <div className="flex w-full max-w-md flex-col gap-2" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-gold/60" />
        </div>
        <div className="h-8 border border-white/10 bg-white/[0.03]" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 border border-white/10 bg-white/[0.03]" />
          <div className="h-16 border border-gold/25 bg-gold/[0.06]" />
          <div className="h-16 border border-white/10 bg-white/[0.03]" />
        </div>
        <div className="h-10 border border-white/10 bg-white/[0.03]" />
      </div>
      <p className="text-xs tracking-widest text-stone uppercase">
        Interface do {product} — em preparação
      </p>
      <p className="max-w-sm text-sm text-stone">
        Este espaço receberá capturas e demonstração navegável do sistema.
      </p>
    </div>
  );
}

export function CtaBlock({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section aria-label="Chamada para contato" className="border-y border-white/10 bg-graphite/50">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display max-w-2xl text-3xl leading-tight font-medium sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl leading-relaxed text-stone">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/solucoes"
            className="inline-flex min-h-11 items-center justify-center bg-ivory px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-gold"
          >
            Conheça nossas soluções
          </Link>
          <Link
            href="/contato"
            className="inline-flex min-h-11 items-center justify-center border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Fale com a Elementary
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="card-surface flex flex-col items-start gap-3 p-8">
      <p className="text-sm font-semibold text-ivory">{title}</p>
      <p className="text-sm leading-relaxed text-stone">{description}</p>
    </div>
  );
}
