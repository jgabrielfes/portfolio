import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LandingView } from "@/components/landing/landing-view";
import { getSiteUrl } from "@/config/site";
import { languageAlternates } from "@/lib/locale-meta";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = getSiteUrl();
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(siteUrl.origin, ""),
    },
    openGraph: {
      url: new URL(`/${locale}`, siteUrl.origin).href,
      title: t("ogTitle"),
      description: t("description"),
    },
    twitter: {
      title: t("twitterTitle"),
      description: t("description"),
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LandingView />;
}
