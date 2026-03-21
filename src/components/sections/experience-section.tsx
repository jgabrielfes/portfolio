import Link from "next/link";

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
import { experience } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type ExperienceSectionProps = {
  variant: "preview" | "full";
  className?: string;
};

export function ExperienceSection({
  variant,
  className,
}: ExperienceSectionProps) {
  const isPreview = variant === "preview";

  return (
    <section
      id={isPreview ? "experiencia" : undefined}
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24",
        !isPreview && "pt-12",
        className
      )}
    >
      <Reveal className="mb-10 max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Experiência profissional
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {isPreview
            ? "Resumo das últimas posições. Na página expandida você encontra o detalhamento completo, pronto para compartilhar."
            : "Histórico completo conforme currículo — liderança técnica, arquitetura e entregas em produto."}
        </p>
      </Reveal>

      <div className="grid gap-6">
        {experience.map((job, index) => {
          const bullets =
            isPreview ? job.highlights.slice(0, 2) : [...job.highlights];
          const more = isPreview ? job.highlights.length - bullets.length : 0;

          return (
            <Reveal key={job.id} delayMs={index * 70}>
              <article id={job.id}>
                <Card className="border-border/70 transition-shadow hover:shadow-md hover:shadow-primary/5">
                  <CardHeader className="gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-base sm:text-lg">
                          {job.company}
                        </CardTitle>
                        <CardDescription className="text-xs font-medium text-foreground/90 sm:text-sm">
                          {job.role}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="font-mono text-[0.65rem]">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="list-inside list-disc space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {bullets.map((line, li) => (
                        <li key={li} className="pl-1">
                          {line}
                        </li>
                      ))}
                    </ul>
                    {more > 0 && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        +{more}{" "}
                        {more === 1
                          ? "realização adicional neste cargo"
                          : "realizações adicionais neste cargo"}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </article>
            </Reveal>
          );
        })}
      </div>

      {isPreview && (
        <Reveal className="mt-10 flex justify-center" delayMs={200}>
          <Button size="lg" variant="outline" asChild>
            <Link href="/experiencia">Ver experiência completa</Link>
          </Button>
        </Reveal>
      )}
    </section>
  );
}
