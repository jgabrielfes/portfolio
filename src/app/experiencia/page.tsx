import type { Metadata } from "next";
import Link from "next/link";

import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Experiência profissional",
  description:
    "Histórico completo de João Ferraz: FCamara (RD, Vite), BonifiQ, uMode, HRP, Yaris Solar, Botfy — full-stack sênior, uConnect, NestJS, .NET e React.",
};

export default function ExperienciaPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-6xl px-4 pt-8 pb-4 sm:px-6">
          <Button variant="ghost" size="sm" className="-ml-2 text-muted-foreground" asChild>
            <Link href="/">← Voltar ao início</Link>
          </Button>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Página dedicada ao currículo: experiência por empresa, com todas as
            realizações listadas. Use os links do menu para saltar entre seções
            no site principal.
          </p>
        </div>

        <ExperienceSection variant="full" className="pt-0" />
        <EducationSection className="border-t border-border/60 bg-muted/10 pb-24" />
      </main>

      <SiteFooter />
    </div>
  );
}
