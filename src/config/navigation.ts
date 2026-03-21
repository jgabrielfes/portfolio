/**
 * Itens do menu: âncoras na landing ou rota interna.
 * Rótulos vêm de `useTranslations('Nav')` com a chave `labelKey`.
 */
export const siteNavConfig = [
  { kind: "anchor" as const, id: "inicio", labelKey: "home" as const },
  { kind: "anchor" as const, id: "sobre", labelKey: "about" as const },
  { kind: "anchor" as const, id: "stack", labelKey: "stack" as const },
  { kind: "anchor" as const, id: "experiencia", labelKey: "experience" as const },
  { kind: "anchor" as const, id: "formacao", labelKey: "education" as const },
  { kind: "anchor" as const, id: "recrutadores", labelKey: "recruiters" as const },
  { kind: "route" as const, path: "/projetos" as const, labelKey: "projects" as const },
  { kind: "anchor" as const, id: "contato", labelKey: "contact" as const },
] as const;
