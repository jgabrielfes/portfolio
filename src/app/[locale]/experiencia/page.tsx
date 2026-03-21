import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Button } from "@/components/ui/button";
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
  const t = await getTranslations({ locale, namespace: "ExperiencePage" });
  const path = "/experiencia";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: languageAlternates(siteUrl.origin, path),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}${path}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | João Ferraz`,
      description: t("description"),
    },
  };
}

export default async function ExperienciaPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ExperiencePage");

  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-6xl px-4 pt-8 pb-4 sm:px-6">
          <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" asChild>
            <Link href="/">{t("backHome")}</Link>
          </Button>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            {t("intro")}
          </p>
        </div>

        <ExperienceSection variant="full" className="pt-0" />
        <EducationSection className="pb-24" />
      </main>

      <SiteFooter />
    </div>
  );
}
