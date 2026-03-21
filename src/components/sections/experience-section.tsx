import { getMessages, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
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
import { cn } from "@/lib/utils";

type ExperienceJob = {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

type ExperienceSectionProps = {
  variant: "preview" | "full";
  className?: string;
};

export async function ExperienceSection({
  variant,
  className,
}: ExperienceSectionProps) {
  const isPreview = variant === "preview";
  const t = await getTranslations("ExperienceSection");
  const messages = await getMessages();
  const list = messages.ExperienceJobs as ExperienceJob[];

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
          {t("heading")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {isPreview ? t("leadPreview") : t("leadFull")}
        </p>
      </Reveal>

      <div className="grid gap-6">
        {list.map((job, index) => {
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
                        {t(more === 1 ? "moreOne" : "moreMany", { count: more })}
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
            <Link href="/experiencia">{t("viewFull")}</Link>
          </Button>
        </Reveal>
      )}
    </section>
  );
}
