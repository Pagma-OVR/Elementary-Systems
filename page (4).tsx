import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeader } from "@/components/ui";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Soluções — Catálogo de sistemas",
  description:
    "Catálogo Elementary Systems: dez sistemas para operações especializadas — serviços em campo, obras, limpeza, locação, garantia, pragas, entregas, B2B, cobranças e documentos.",
};

export default function Solucoes() {
  return (
    <>
      <h1 className="sr-only">Soluções — Catálogo de sistemas Elementary Systems</h1>
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Soluções" }]} />
          <Reveal>
            <SectionHeader
              eyebrow="Catálogo"
              title="Dez sistemas. Um padrão: operação organizada."
              description="Cada produto resolve um processo específico. Explore o posicionamento, o fluxo operacional e os módulos. Interfaces e demos navegáveis serão adicionadas a cada página."
            />
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
