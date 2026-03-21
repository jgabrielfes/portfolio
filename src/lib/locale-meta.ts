import { routing, type AppLocale } from "@/i18n/routing";

/** Open Graph `locale` (underscore, região implícita nos códigos curtos). */
const ogLocaleByApp: Record<AppLocale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export function toOpenGraphLocale(locale: AppLocale): string {
  return ogLocaleByApp[locale];
}

export function languageAlternates(
  baseOrigin: string,
  pathname: string
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${baseOrigin}/${loc}${pathname}`;
  }
  languages["x-default"] = `${baseOrigin}/${routing.defaultLocale}${pathname}`;
  return languages;
}
