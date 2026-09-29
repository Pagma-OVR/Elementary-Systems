import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, CtaBlock, FeatureCard, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre — Processos, software, operação",
  description:
    "Elementary Systems cria sistemas web e SaaS para transformar processos manuais em operações digitais, organizadas e mensuráveis.",
};

const values = [
  { title: "Precisão", description: "Fluxos claros, responsáveis definidos, prazos visíveis." },
  { title: "Simplicidade", description: "Interface direta para quem opera, não só para quem gerencia." },
  { title: "Estrutura", description: "Processo antes de código. Software reflete a operação real." },
  { title: "Confiança", description: "Escopo fechado, entrega por etapas, sem promessa vazia." },
];

export default function Sobre() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />
          <Reveal className="flex flex-col items-start gap-5">
            <p className="eyebrow">Elementary Systems</p>
            <h1 className="font-display max-w-3xl text-4xl leading-tight font-medium sm:text-5xl">
              Transformamos processos complexos em sistemas simples.
            </h1>
            <p className="max-w-2xl leading-relaxed text-stone">
              Criamos sistemas web e SaaS para empresas que dependem de WhatsApp, Excel e
              processos manuais. Nosso trabalho: organizar a operação em software —
              processo, estrutura, sistema, controle.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <SectionHeader
            eyebrow="Posicionamento"
            title="Vendemos software, não programação."
            description="O visitante entende: empresa profissional, constrói software real, domina processos e operações, oferece soluções concretas e projetos sob medida."
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title}>
              <FeatureCard
                index={String(i + 1).padStart(2, "0")}
                title={v.title}
                description={v.description}
              />
            </Reveal>
          ))}
        </ul>
      </section>
      <section aria-label="Para quem" className="border-t border-white/10 bg-graphite/50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <SectionHeader
              eyebrow="Público"
              title="Para operações que precisam sair do manual."
              description="Pequenas e médias empresas, serviços especializados, prestadores e negócios que precisam transformar operação em software — com linguagem clara, mesmo para quem não é técnico."
            />
          </Reveal>
        </div>
      </section>
      <CtaBlock
        eyebrow="Sobre em ação"
        title="Veja o catálogo ou peça um sistema sob medida."
        description="Dez produtos organizados por processo. Ou uma solução desenhada da sua operação."
      />
    </>
  );
}
