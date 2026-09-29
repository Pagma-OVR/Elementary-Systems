import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CtaBlock, FeatureCard, FlowDiagram, SectionHeader, ShowcasePlaceholder } from "@/components/ui";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Elementary Systems — Systems Made Simple",
  description:
    "Criamos sistemas web e SaaS que transformam processos manuais e fragmentados em operações digitais, organizadas e mensuráveis. Sistemas feitos simples.",
};

const pains = [
  { title: "WhatsApp", description: "Pedidos, chamados e decisões perdidos em conversas." },
  { title: "Excel", description: "Planilhas paralelas, versões conflitantes, sem dono." },
  { title: "Papel", description: "Registros físicos impossíveis de buscar e medir." },
  { title: "Fragmentação", description: "Informação espalhada, ninguém sabe o estado real." },
];

const method = [
  { title: "Discover", description: "Mapeamos processo, responsáveis e gargalos reais." },
  { title: "Design", description: "Desenhamos fluxo simples antes de qualquer código." },
  { title: "Build", description: "Construímos sistema funcional por etapas visíveis." },
  { title: "Evolve", description: "Ajustamos com uso real e expandimos módulos." },
];

export default function Home() {
  return (
    <>
      <section aria-label="Apresentação" className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal className="flex flex-col items-start gap-6">
            <p className="eyebrow">Elementary Systems — Systems made simple</p>
            <h1 className="font-display text-4xl leading-[1.05] font-medium text-ivory sm:text-6xl">
              Sistemas feitos simples para operações reais.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-stone sm:text-lg">
              Transformamos processos manuais, fragmentados e difíceis de controlar em
              operações digitais, organizadas e mensuráveis.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/solucoes">Conheça nossas soluções</Button>
              <Button href="/contato" variant="secondary">
                Fale com a Elementary
              </Button>
            </div>
            <p className="text-xs tracking-widest text-stone/70 uppercase">
              Software · Precisão · Simplicidade
            </p>
          </Reveal>
          <Reveal className="card-surface flex flex-col gap-4 p-8" as="div">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs tracking-widest text-stone uppercase">Operação</span>
              <span className="border border-gold/40 px-2 py-1 text-[0.65rem] text-gold">AO VIVO</span>
            </div>
            {[
              ["Ordens abertas", "12"],
              ["Em execução", "7"],
              ["Concluídas hoje", "19"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-sm text-stone">{k}</span>
                <span className="font-display text-xl text-ivory">{v}</span>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-stone/80">
              Ilustração estrutural. Não representa dados reais de cliente.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Problema" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Problema"
            title="Operação presa em WhatsApp, Excel e papel."
            description="Processos manuais funcionam até certo ponto. Depois viram retrabalho, perda de informação e falta de controle."
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <Reveal key={p.title} as="li">
              <FeatureCard index={String(i + 1).padStart(2, "0")} title={p.title} description={p.description} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-label="Transformação" className="border-y border-white/10 bg-graphite/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Transformação"
              title="Do processo solto ao sistema controlado."
              description="Método direto: estrutura primeiro, software depois. Sem jargão, sem promessa vazia."
            />
          </Reveal>
          <Reveal className="mt-10">
            <FlowDiagram
              steps={[
                { title: "Processo", description: "Rotina real mapeada ponta a ponta." },
                { title: "Estrutura", description: "Etapas, responsáveis e regras claras." },
                { title: "Sistema", description: "Fluxo vira interface simples de usar." },
                { title: "Automação", description: "Repetição vira rotina automática." },
                { title: "Controle", description: "Prazos e resultados visíveis." },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section aria-label="Soluções" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Catálogo"
            title="Dez sistemas para operações especializadas."
            description="Linha própria de produtos. Cada um resolve um processo específico. Escolha, explore, adapte."
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/solucoes" variant="link">
            Explorar catálogo
          </Button>
        </div>
      </section>

      <section aria-label="Como trabalhamos" className="border-y border-white/10 bg-graphite/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Método"
              title="Discover, Design, Build, Evolve."
              description="Processo curto e visível. Você acompanha cada etapa."
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => (
              <Reveal key={m.title} as="li">
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

      <section aria-label="Showcase" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Showcase"
            title="Software como elemento visual."
            description="Espaço preparado para capturas e demonstrações navegáveis dos produtos."
          />
        </Reveal>
        <Reveal className="mt-10">
          <ShowcasePlaceholder product="catálogo Elementary" />
        </Reveal>
      </section>

      <section aria-label="Sistemas personalizados" className="border-t border-white/10 bg-graphite/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <p className="eyebrow">Custom systems</p>
            <h2 className="font-display text-3xl leading-tight font-medium sm:text-4xl">
              Sua operação não cabe no catálogo? Construímos sob medida.
            </h2>
            <div className="rule-gold" aria-hidden="true" />
            <p className="leading-relaxed text-stone">
              Adaptamos produtos existentes ou criamos sistemas novos a partir do seu
              processo. Escopo fechado, fluxo validado, entrega por etapas.
            </p>
          </Reveal>
          <Reveal className="card-surface flex flex-col gap-3 p-8">
            {[
              "Levantamento do processo atual",
              "Protótipo navegável do fluxo",
              "Sistema funcional por módulos",
              "Ajustes com uso real",
            ].map((t, i) => (
              <p key={t} className="flex gap-3 border-b border-white/5 pb-3 text-sm text-stone last:border-0">
                <span className="font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span> {t}
              </p>
            ))}
            <div className="pt-2">
              <Button href="/contato" variant="secondary">
                Fale com a Elementary
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBlock
        eyebrow="Contato comercial"
        title="Vamos organizar sua operação em software."
        description="Conte seu processo atual. Respondemos com próximos passos claros e proposta objetiva."
      />
    </>
  );
}
