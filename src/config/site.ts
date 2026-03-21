/**
 * URL canónica do site (Open Graph, JSON-LD, sitemap).
 * Em produção na Vercel, `VERCEL_URL` é definido automaticamente.
 * Com domínio próprio, defina `NEXT_PUBLIC_SITE_URL` (ex.: https://seudominio.com).
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const normalized = explicit.endsWith("/") ? explicit.slice(0, -1) : explicit;
    return new URL(normalized);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
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
