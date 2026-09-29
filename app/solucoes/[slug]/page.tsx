import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  Badge,
  Breadcrumbs,
  CtaBlock,
  FeatureCard,
  FlowDiagram,
  SectionHeader,
  ShowcasePlaceholder,
} from "@/components/ui";
import { getProduct, productSlugs } from "@/content/products";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Solução não encontrada" };
  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
    },
  };
}

export default async function Produto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Soluções", href: "/solucoes" },
              { label: product.name },
            ]}
          />
          <Reveal className="flex flex-col items-start gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge>{product.code} — Catálogo</Badge>
              <Badge>{product.sector}</Badge>
            </div>
            <h1 className="font-display text-4xl font-medium sm:text-5xl">{product.name}</h1>
            <p className="text-lg font-medium text-gold">{product.positioning}</p>
            <p className="max-w-2xl leading-relaxed text-stone">{product.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contato">Conhecer solução</Button>
              <Button href="/solucoes" variant="ghost">
                Ver catálogo
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Problema" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <SectionHeader eyebrow="Problema" title={product.problem.title} />
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {product.problem.items.map((item, i) => (
            <Reveal as="li" key={item}>
              <p className="card-surface flex gap-3 p-6 text-sm leading-relaxed text-stone">
                <span className="font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-label="Solução" className="border-y border-white/10 bg-graphite/50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <SectionHeader
              eyebrow="Solução"
              title={product.solution.title}
              description={product.solution.description}
            />
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {product.solution.points.map((pt) => (
              <Reveal as="li" key={pt}>
                <p className="flex gap-3 border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-ivory">
                  {pt}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Fluxo operacional" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <SectionHeader
            eyebrow="Fluxo operacional"
            title="Como a operação funciona no sistema."
            description="Representação do ciclo principal. Detalhes de interface serão publicados com o demo navegável."
          />
        </Reveal>
        <Reveal className="mt-8">
          <FlowDiagram steps={product.flow} />
        </Reveal>
      </section>

      <section aria-label="Módulos" className="border-y border-white/10 bg-graphite/50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <SectionHeader eyebrow="Módulos" title="Blocos principais do produto." />
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.modules.map((m, i) => (
              <Reveal as="li" key={m.title}>
                <FeatureCard
                  index={String(i + 1).padStart(2, "0")}
                  title={m.title}
                  description={m.description}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Interface do produto" className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <SectionHeader
            eyebrow="Product interface"
            title="Espaço reservado para o demo."
            description="Capturas, vídeos e demonstração navegável serão incorporados aqui sem mudar a estrutura da página."
          />
        </Reveal>
        <Reveal className="mt-8">
          <ShowcasePlaceholder product={product.name} />
        </Reveal>
      </section>

      <section aria-label="Casos de uso" className="border-t border-white/10 bg-graphite/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Casos de uso" title="Onde pode ser aplicado." />
            <ul className="mt-6 flex flex-col gap-2">
              {product.useCases.map((u) => (
                <li key={u} className="flex gap-3 text-sm text-stone">
                  <span aria-hidden="true" className="text-gold">—</span> {u}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <SectionHeader eyebrow="Customização" title="Adaptação à sua operação." />
            <p className="mt-6 leading-relaxed text-stone">{product.customization}</p>
            <div className="mt-6">
              <Button href="/contato" variant="secondary">
                Fale com a Elementary
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBlock
        eyebrow={product.name}
        title={`Quer operar com ${product.name}?`}
        description="Descreva seu processo atual. Avaliamos fit com o catálogo ou proposta sob medida."
      />
    </>
  );
}
