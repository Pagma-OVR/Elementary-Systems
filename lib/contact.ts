export function getContactEmail(): string {
  return (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim();
}

export function getWhatsAppNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").trim();
}

export function isEmailConfigured(): boolean {
  return getContactEmail().length > 0;
}

export function isWhatsAppConfigured(): boolean {
  return getWhatsAppNumber().length > 0;
}

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  topic?: string;
  message: string;
};

export function buildMailtoHref(payload: ContactPayload): string | null {
  const to = getContactEmail();
  if (!to) return null;
  const subject = `Contato — ${payload.name}${payload.company ? ` (${payload.company})` : ""}${payload.topic ? ` — ${payload.topic}` : ""}`;
  const body = `Nome: ${payload.name}\nE-mail: ${payload.email}${payload.company ? `\nEmpresa: ${payload.company}` : ""}${payload.topic ? `\nAssunto: ${payload.topic}` : ""}\n\n${payload.message}`;
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsAppHref(payload: ContactPayload): string | null {
  const number = getWhatsAppNumber().replace(/\D/g, "");
  if (!number) return null;
  const text = `Olá, sou ${payload.name}${payload.company ? ` da ${payload.company}` : ""}. ${payload.message}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// ponytail: teto atual é mailto/wa.me sem backend; caminho de upgrade é
// trocar esta camada por POST em /api/contato ou CRM sem refazer a UI.
