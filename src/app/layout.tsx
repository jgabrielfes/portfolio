import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import {
  defaultSiteDescription,
  getSiteUrl,
  siteKeywords,
} from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "João Ferraz — Desenvolvedor Full-Stack",
    template: "%s | João Ferraz",
  },
  description: defaultSiteDescription,
  applicationName: "João Ferraz — Portfólio",
  authors: [{ name: "João Ferraz", url: siteUrl.href }],
  creator: "João Ferraz",
  keywords: [...siteKeywords],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl.href,
    siteName: "João Ferraz",
    title: "João Ferraz — Desenvolvedor Full-Stack",
    description: defaultSiteDescription,
    images: [
      {
        url: "/logo.png",
        width: 494,
        height: 505,
        alt: "João Ferraz — identidade visual do portfólio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Ferraz — Desenvolvedor Full-Stack",
    description: defaultSiteDescription,
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased font-sans",
        figtree.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <PersonJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jgabrielfes-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
