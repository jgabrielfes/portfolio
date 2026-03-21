import type { ReactNode } from "react";

/**
 * Layout raiz mínimo (exigido com `not-found` na raiz).
 * `<html>` / `<body>` e i18n ficam em `app/[locale]/layout.tsx`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
