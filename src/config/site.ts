/**
 * URL canónica do site (Open Graph, JSON-LD, sitemap).
 * Ordem: `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → localhost.
 *
 * Importante: `VERCEL_URL` é o host de *cada deploy* (ex.: portfolio-xxx.vercel.app). Esse URL
 * pode devolver 401 a crawlers (Facebook/WhatsApp), que aí ignoram `og:image` e mostram um
 * ícone genérico. A Vercel expõe `VERCEL_PROJECT_PRODUCTION_URL` com o domínio estável de
 * produção (ex.: jgabrielfes.vercel.app).
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const normalized = explicit.endsWith("/") ? explicit.slice(0, -1) : explicit;
    return new URL(normalized);
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) {
    const host = productionHost.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return new URL(`https://${host}`);
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }

  return new URL("http://localhost:3000");
}

/** Descrição para meta, Open Graph, Twitter e pré-visualizações (ex.: WhatsApp). */
export const defaultSiteDescription =
  "Portfólio de João Ferraz — desenvolvedor full-stack sênior (FCamara, consultoria RD, Vite). Microsserviços, contratos de API, React, NestJS, .NET e liderança técnica.";

export const siteKeywords = [
  "João Ferraz",
  "desenvolvedor full-stack",
  "full-stack sênior",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "NestJS",
  ".NET",
  "microsserviços",
  "integrações",
  "API",
  "FCamara",
  "líder técnico",
] as const;
