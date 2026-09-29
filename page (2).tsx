import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contato — Fale com a Elementary",
  description:
    "Fale com a Elementary Systems sobre catálogo ou sistemas sob medida. Descreva sua operação e receba próximos passos.",
};

export default function Contato() {
  return (
    <>
      <h1 className="sr-only">Contato — Fale com a Elementary</h1>
      <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-5">
            <SectionHeader
              eyebrow="Contato comercial"
              title="Descreva sua operação."
              description="Conte o processo atual, onde trava e o que precisa controlar. Sem backend nesta fase: o envio usa e-mail ou WhatsApp configurados via ambiente."
            />
            <div className="card-surface flex flex-col gap-3 p-6 text-sm leading-relaxed text-stone">
              <p><span className="font-semibold text-ivory">1.</span> Preencha e valide os campos.</p>
              <p><span className="font-semibold text-ivory">2.</span> Escolha e-mail ou WhatsApp.</p>
              <p><span className="font-semibold text-ivory">3.</span> Mensagem chega pronta para envio.</p>
            </div>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
