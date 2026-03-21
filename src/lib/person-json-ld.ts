import { getTranslations } from "next-intl/server";

import { contact } from "@/content/portfolio";
import { getSiteUrl } from "@/config/site";

/** Dados Schema.org `Person` (serializar em `<script type="application/ld+json">` no `<head>`). */
export async function getPersonJsonLdObject(locale: string) {
  const tPortfolio = await getTranslations({ locale, namespace: "Portfolio" });
  const tPerson = await getTranslations({ locale, namespace: "PersonJsonLd" });

  const base = getSiteUrl().origin;
  const knowsAbout = tPerson.raw("knowsAbout") as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "João Ferraz",
    url: base,
    image: `${base}/logo.png`,
    jobTitle: tPerson("jobTitle"),
    description: tPortfolio("professionalSummary"),
    email: contact.email,
    sameAs: [contact.linkedin, contact.github],
    knowsAbout,
  };
}
