import { Briefcase } from "lucide-react";
import { getMessages, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/landing/reveal";
import { EmployerImpactStats } from "@/components/sections/employer-impact-stats";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type EmployerImpactBlock,
  resumePdfUrl,
} from "@/content/recruiter";

type AtAGlance = { label: string; value: string };
type ValueProp = { title: string; description: string };

export async function RecruiterSection() {
  const t = await getTranslations("RecruiterSection");
  const messages = await getMessages();
  const recruiterAtAGlance = messages.RecruiterAtAGlance as AtAGlance[];
  const employerImpactBlocks = messages.EmployerImpactBlocks as EmployerImpactBlock[];
  const valuePropositions = messages.ValuePropositions as ValueProp[];

  return (
    <section
      id="recrutadores"
      className="border-t border-border/60 bg-muted/15 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("lead")}
          </p>
        </Reveal>

        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterAtAGlance.map((item, index) => (
            <Reveal key={item.label} delayMs={index * 50}>
              <Card className="h-full border-border/70 bg-card/80">
                <CardHeader className="gap-1 pb-3">
                  <p className="text-[0.65rem] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <CardTitle className="text-sm font-semibold leading-snug">
                    {item.value}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>

        <EmployerImpactStats blocks={employerImpactBlocks} />

        <div className="grid gap-4 md:grid-cols-2">
          {valuePropositions.map((vp, index) => (
            <Reveal key={vp.title} delayMs={index * 60}>
              <Card className="h-full border-border/70 transition-colors hover:border-primary/25">
                <CardHeader>
                  <CardTitle className="text-base">{vp.title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed sm:text-sm">
                    {vp.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button size="lg" asChild>
            <Link href="/projetos">
              <Briefcase className="size-4" />
              {t("viewCases")}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/experiencia">{t("fullTimeline")}</Link>
          </Button>
          {resumePdfUrl ? (
            <Button size="lg" variant="outline" asChild>
              <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                {t("downloadCv")}
              </a>
            </Button>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
