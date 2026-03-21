import { ArrowDown, Github, Layers, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { getMessages, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/landing/reveal";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { RecruiterSection } from "@/components/sections/recruiter-section";
import { SkillsGridSection } from "@/components/sections/skills-grid-section";
import { SkillsMarquee } from "@/components/sections/skills-marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/portfolio";

export async function LandingView() {
  const tHome = await getTranslations("Home");
  const tPortfolio = await getTranslations("Portfolio");
  const messages = await getMessages();
  const stackMarquee = messages.StackMarquee as string[];

  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section
          id="inicio"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:grid lg:min-h-[calc(100vh-3.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-24 lg:pt-6"
        >
          <div className="flex flex-col gap-8">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 ease-out">
              <Badge variant="secondary" className="gap-1.5 rounded-full pl-2 pr-2.5">
                <Sparkles className="size-3 text-primary" aria-hidden />
                {tHome("badge")}
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="animate-in fade-in slide-in-from-bottom-5 fill-mode-both font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground delay-100 duration-700 ease-out sm:text-5xl lg:text-6xl">
                João Ferraz
                <span className="mt-2 block text-balance text-2xl font-medium text-muted-foreground sm:text-3xl lg:text-4xl">
                  {tHome("headlineSub")}
                </span>
              </h1>
              <p className="animate-in fade-in zoom-in-95 fill-mode-both max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground delay-200 duration-700 ease-out sm:text-base">
                {tPortfolio("professionalSummary")}
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both flex flex-wrap items-stretch gap-2 delay-300 duration-700 ease-out sm:items-center sm:gap-3">
              <Button size="lg" className="min-h-10 w-full min-[380px]:w-auto" asChild>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4 shrink-0" />
                  {tHome("linkedin")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-h-10 w-full min-[380px]:w-auto"
                asChild
              >
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4 shrink-0" />
                  {tHome("github")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="min-h-10 w-[calc(50%-0.25rem)] min-[380px]:w-auto sm:w-auto"
                asChild
              >
                <Link href="/projetos">{tHome("cases")}</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="min-h-10 w-[calc(50%-0.25rem)] min-[380px]:w-auto sm:w-auto"
                asChild
              >
                <Link href="/experiencia">{tHome("experience")}</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="min-h-10 w-full min-[380px]:w-auto"
                asChild
              >
                <a href="#sobre">
                  {tHome("aboutMe")}
                  <ArrowDown className="size-4 shrink-0 opacity-70" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            <div
              className="landing-orb relative aspect-square w-[min(100%,20rem)] sm:w-[min(100%,22rem)]"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-primary/40 via-chart-2/25 to-transparent blur-2xl" />
              <div className="absolute inset-[12%] rounded-[1.75rem] border border-border/60 bg-card/80 shadow-[0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent)] backdrop-blur-sm ring-1 ring-foreground/5" />
              <div className="absolute inset-[12%] flex flex-col justify-between rounded-[1.75rem] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {tHome("orbLabel")}
                  </span>
                  <Layers className="size-5 text-primary" />
                </div>
                <div className="space-y-3">
                  <p className="font-heading text-lg font-semibold leading-snug text-foreground">
                    {tHome("orbTitle")}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {tHome("orbBody")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Vite</Badge>
                  <Badge variant="outline">RD</Badge>
                  <Badge variant="secondary">APIs</Badge>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#sobre"
            className="animate-in fade-in fill-mode-both absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted-foreground delay-500 duration-1000 ease-out lg:flex"
            aria-label={tHome("scrollToAbout")}
          >
            <span className="font-mono uppercase tracking-widest">{tHome("scroll")}</span>
            <ArrowDown className="size-4 motion-safe:animate-bounce" />
          </a>
        </section>

        <SkillsMarquee items={stackMarquee} />

        <section
          id="sobre"
          className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
        >
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {tHome("aboutHeading")}
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {tPortfolio("aboutNarrative")}
            </p>
          </Reveal>
        </section>

        <SkillsGridSection />

        <ExperienceSection variant="preview" />

        <EducationSection />

        <RecruiterSection />

        <section
          id="contato"
          className="border-t border-border/60 bg-muted/15 py-16 sm:py-20 md:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal className="mx-auto w-full max-w-3xl rounded-2xl border border-border/70 bg-card/80 p-6 text-center shadow-sm ring-1 ring-foreground/5 backdrop-blur-sm sm:p-8 md:p-10">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {tHome("contactHeading")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-sm text-muted-foreground sm:text-base">
                {tHome("contactLead")}
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
                <Button
                  size="lg"
                  className="min-h-11 w-full min-w-0 justify-center gap-2 px-3 sm:w-auto sm:min-w-0 sm:max-w-full"
                  asChild
                >
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all sm:break-normal"
                  >
                    <Mail className="size-4 shrink-0" />
                    <span className="text-left text-xs sm:text-sm">
                      {contact.email}
                    </span>
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-11 w-full sm:w-auto"
                  asChild
                >
                  <a href={`tel:${contact.phoneTel}`}>
                    <Phone className="size-4 shrink-0" />
                    {contact.phoneDisplay}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-11 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="size-4 shrink-0" />
                    {tHome("linkedin")}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-11 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4 shrink-0" />
                    {tHome("github")}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
