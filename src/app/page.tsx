import { redirect } from "next/navigation";

import { routing } from "@/i18n/routing";

/**
 * Fallback se o pedido chegar sem redirecionamento do middleware.
 * O middleware do next-intl costuma enviar `/` para `/{locale}` com base no navegador.
 */
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
