import type { MetadataRoute } from "next";
import { productSlugs } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elementary.systems";
  const now = new Date();
  const routes = ["", "/solucoes", "/projetos", "/sobre", "/contato"].map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const productRoutes = productSlugs.map((slug) => ({
    url: `${base}/solucoes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...routes, ...productRoutes];
}
