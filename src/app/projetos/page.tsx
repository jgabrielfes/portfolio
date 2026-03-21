import type { Metadata } from "next";
import Link from "next/link";

import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contact } from "@/content/portfolio";
import { featuredProjects } from "@/content/recruiter";

export const metadata: Metadata = {
  title: "Projetos e cases",
  description:
    "Cases de João Ferraz: integrações RD, Engage BonifiQ, uConnect, CRM — stack, contexto e impacto em alto nível para recrutadores e tech leads.",
};

export default function ProjetosPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14">
          <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" asChild>
            <Link href="/">← Voltar ao início</Link>
          </Button>
          <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Projetos e cases
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Visão em alto nível de entregas relevantes — sem expor detalhes
            confidenciais de cliente. Para aprofundar conversa técnica,{" "}
            <a
              href={contact.linkedin}
              className="font-medium text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              fale comigo no LinkedIn
            </a>{" "}
            ou use o{" "}
            <Link
              href="/#contato"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              contato
            </Link>{" "}
            no site.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 pb-24 sm:px-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 70}>
              <article id={project.id}>
                <Card className="border-border/70">
                  <CardHeader className="gap-2">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-primary">
                          {project.context}
                        </p>
                        <CardTitle className="text-xl sm:text-2xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs font-mono text-muted-foreground">
                          {project.period}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Destaques
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </Reveal>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
