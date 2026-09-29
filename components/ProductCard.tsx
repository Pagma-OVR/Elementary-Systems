import Link from "next/link";
import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface group flex flex-col gap-4 p-7 transition-colors hover:border-gold/40">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm text-gold">{product.code}</span>
        <span className="border border-white/10 px-2 py-1 text-[0.65rem] tracking-widest text-stone uppercase">
          {product.sector}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-ivory">{product.name}</h3>
        <p className="text-sm font-medium text-gold/90">{product.positioning}</p>
        <p className="text-sm leading-relaxed text-stone">{product.description}</p>
      </div>
      <div className="mt-auto flex items-center gap-4 pt-2">
        <Link
          href={`/solucoes/${product.slug}`}
          className="inline-flex min-h-11 items-center justify-center bg-ivory px-5 text-sm font-semibold text-obsidian transition-colors hover:bg-gold"
        >
          Conhecer solução
        </Link>
        <Link
          href={`/solucoes/${product.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-stone transition-colors hover:text-gold"
        >
          Ver solução <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
