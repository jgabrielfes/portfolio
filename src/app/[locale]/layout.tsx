import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl } from "@/config/site";
import { routing } from "@/i18n/routing";
import { languageAlternates, toOpenGraphLocale } from "@/lib/locale-meta";
import { getPersonJsonLdObject } from "@/lib/person-json-ld";
import { cn } from "@/lib/utils";

import "../globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Meta" });
  const siteUrl = getSiteUrl();
  const keywords = t.raw("keywords") as string[];
  const ogLocale = toOpenGraphLocale(locale as (typeof routing.locales)[number]);

  return {
    metadataBase: siteUrl,
    title: {
      default: t("titleDefault"),
      template: "%s | João Ferraz",
    },
    description: t("description"),
    applicationName: t("applicationName"),
    authors: [{ name: "João Ferraz", url: siteUrl.href }],
    creator: "João Ferraz",
    keywords: [...keywords],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: new URL(`/${locale}`, siteUrl.origin).href,
      siteName: "João Ferraz",
      title: t("ogTitle"),
      description: t("description"),
      images: [
        {
          url: "/logo.png",
          width: 494,
          height: 505,
          alt: t("ogImageAlt"),
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("description"),
      images: ["/logo.png"],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(siteUrl.origin, ""),
    },
  };
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const personJsonLd = await getPersonJsonLdObject(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased font-sans",
        figtree.variable,
        geistMono.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="jgabrielfes-theme"
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
