"use client";

import Error from "next/error";

/**
 * Rotas fora do middleware (ex.: ficheiros estáticos sem locale) — fallback mínimo.
 * Erros 404 localizados ficam em `app/[locale]/not-found.tsx`.
 */
export default function GlobalNotFound() {
  return (
    <html lang="pt">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
