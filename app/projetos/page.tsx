import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, CtaBlock, EmptyState, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projetos — Demos e cases em preparação",
  description:
    "Projetos Elementary Systems: espaço preparado para demonstrações navegáveis e cases dos produtos do catálogo.",
};

export default function Projetos() {
  return (
    <>
      <h1 className="sr-only">Projetos — Demos e cases em preparação</h1>
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Projetos" }]} />
          <Reveal>
            <SectionHeader
              eyebrow="Projetos"
              title="Demonstrações em preparação."
              description="Cada produto do catálogo receberá interface real, demonstração navegável e caso correspondente. Esta página será o índice desses materiais."
            />
          </Reveal>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-14 md:grid-cols-2">
        <Reveal>
          <EmptyState
            title="Nenhum demo publicado ainda."
            description="Estamos construindo o portfólio visual primeiro. Os sistemas demo serão incorporados aqui sem mudar a arquitetura."
          />
        </Reveal>
        <Reveal>
          <EmptyState
            title="O que cada projeto terá."
            description="Interface real, capturas, demonstração navegável, funcionalidades e caso correspondente — por produto."
          />
        </Reveal>
      </section>
      <CtaBlock
        eyebrow="Acompanhe"
        title="Quer ser avisado dos primeiros demos?"
        description="Fale com a Elementary e descreva sua operação. Direcionamos para o produto mais próximo do seu processo."
      />
    </>
  );
}
