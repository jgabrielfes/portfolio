import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, FolderKanban, Home, Linkedin, SearchX } from "lucide-react";

import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/portfolio";

const notFoundDescription =
  "Este endereço não existe no portfólio de João Ferraz. Use o início, projetos ou contato para continuar.";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: notFoundDescription,
  robots: { index: false, follow: true },
  openGraph: {
    title: "Página não encontrada",
    description: notFoundDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Página não encontrada | João Ferraz",
    description: notFoundDescription,
  },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto w-full max-w-2xl text-center">
            <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700 ease-out">
              <Badge variant="secondary" className="gap-1.5 rounded-full pl-2 pr-2.5">
                <SearchX className="size-3 text-primary" aria-hidden />
                Página não encontrada
              </Badge>
            </div>

            <p
              className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mt-6 font-mono text-6xl font-semibold tabular-nums tracking-tight text-primary delay-100 duration-700 ease-out sm:text-7xl"
              aria-hidden
            >
              404
            </p>

            <h1 className="animate-in fade-in slide-in-from-bottom-5 fill-mode-both mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground delay-150 duration-700 ease-out sm:text-3xl">
              Esse endereço não existe por aqui
            </h1>

            <p className="animate-in fade-in zoom-in-95 fill-mode-both mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground delay-200 duration-700 ease-out sm:text-base">
              Se você veio de um link antigo ou digitou o caminho errado, use os
              atalhos abaixo — o contato, a experiência e os cases continuam nos
              mesmos lugares.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both mt-10 flex flex-col items-stretch gap-2 delay-300 duration-700 ease-out sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
              <Button size="lg" className="min-h-11 w-full sm:w-auto" asChild>
                <Link href="/">
                  <Home className="size-4 shrink-0" />
                  Voltar ao início
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-h-11 w-full sm:w-auto"
                asChild
              >
                <Link href="/projetos">
                  <FolderKanban className="size-4 shrink-0" />
                  Projetos e cases
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-h-11 w-full sm:w-auto"
                asChild
              >
                <Link href="/experiencia">
                  <Briefcase className="size-4 shrink-0" />
                  Experiência
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="min-h-11 w-full sm:w-auto"
                asChild
              >
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4 shrink-0" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
