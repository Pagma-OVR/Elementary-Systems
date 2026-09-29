"use client";

import { useState } from "react";
import {
  buildMailtoHref,
  buildWhatsAppHref,
  isEmailConfigured,
  isWhatsAppConfigured,
  type ContactPayload,
} from "@/lib/contact";

const initial: ContactPayload = {
  name: "",
  email: "",
  company: "",
  topic: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const emailOk = isEmailConfigured();
  const waOk = isWhatsAppConfigured();
  const channelsOk = emailOk || waOk;

  function set<K extends keyof ContactPayload>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Informe um e-mail válido.";
    if (form.message.trim().length < 10)
      e.message = "Descreva sua necessidade com pelo menos 10 caracteres.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const mailto = validateSilent() ? buildMailtoHref(form) : null;
  const waHref = validateSilent() ? buildWhatsAppHref(form) : null;

  function validateSilent(): boolean {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
      form.message.trim().length >= 10
    );
  }

  const inputCls =
    "min-h-12 w-full border border-white/15 bg-obsidian px-4 py-3 text-sm text-ivory placeholder:text-stone/60 transition-colors focus:border-gold focus:outline-none";

  return (
    <div className="flex flex-col gap-6">
      {!channelsOk ? (
        <div
          role="status"
          className="border border-gold/40 bg-gold/[0.06] p-5 text-sm leading-relaxed text-ivory"
        >
          Canal de contato ainda não configurado. Defina{" "}
          <code className="text-gold">NEXT_PUBLIC_CONTACT_EMAIL</code> ou{" "}
          <code className="text-gold">NEXT_PUBLIC_WHATSAPP_NUMBER</code> no ambiente para
          habilitar o envio. Nenhum dado é enviado nesta fase.
        </div>
      ) : null}
      <form
        noValidate
        className="grid gap-5"
        onSubmit={(ev) => {
          ev.preventDefault();
          validate();
        }}
        aria-label="Formulário de contato"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-medium text-ivory">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              autoComplete="name"
              className={inputCls}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "erro-nome" : undefined}
            />
            {errors.name ? (
              <p id="erro-nome" role="alert" className="text-xs text-gold">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-ivory">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputCls}
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "erro-email" : undefined}
            />
            {errors.email ? (
              <p id="erro-email" role="alert" className="text-xs text-gold">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="empresa" className="text-sm font-medium text-ivory">
              Empresa <span className="text-stone">(opcional)</span>
            </label>
            <input
              id="empresa"
              name="empresa"
              autoComplete="organization"
              className={inputCls}
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="assunto" className="text-sm font-medium text-ivory">
              Assunto <span className="text-stone">(opcional)</span>
            </label>
            <input
              id="assunto"
              name="assunto"
              className={inputCls}
              value={form.topic}
              onChange={(e) => set("topic", e.target.value)}
              placeholder="Ex.: sistema sob medida, catálogo"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="text-sm font-medium text-ivory">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            className="w-full border border-white/15 bg-obsidian px-4 py-3 text-sm text-ivory placeholder:text-stone/60 transition-colors focus:border-gold focus:outline-none"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Descreva sua operação e o processo que precisa organizar."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "erro-mensagem" : undefined}
          />
          {errors.message ? (
            <p id="erro-mensagem" role="alert" className="text-xs text-gold">
              {errors.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {mailto ? (
            <a
              href={mailto}
              className="inline-flex min-h-11 items-center justify-center bg-ivory px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-gold"
            >
              Enviar por e-mail
            </a>
          ) : (
            <button
              type="submit"
              disabled={!emailOk}
              title={emailOk ? "Validar e preparar e-mail" : "Canal de e-mail não configurado"}
              className="inline-flex min-h-11 items-center justify-center bg-ivory px-6 py-3 text-sm font-semibold text-obsidian transition-opacity hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40"
            >
              Validar dados
            </button>
          )}
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Continuar no WhatsApp
            </a>
          ) : null}
          {!emailOk && !waOk ? (
            <p className="text-xs leading-relaxed text-stone">
              Envio desabilitado até a configuração dos canais. Preencha os campos para
              validar, sem simular envio.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
