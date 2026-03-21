import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education, languages } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type EducationSectionProps = {
  className?: string;
};

/**
 * Faixa de fundo em largura total (como Habilidades técnicas): `bg-muted/20` no
 * `<section>`; conteúdo limitado com `max-w-6xl` + padding lateral só no inner.
 */
export function EducationSection({ className }: EducationSectionProps) {
  return (
    <section
      id="formacao"
      className={cn(
        "w-full border-t border-border/60 bg-muted/20 py-20 sm:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 max-w-xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Formação &amp; idiomas
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Base acadêmica e estudo contínuo em tecnologia.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((ed, index) => (
            <Reveal key={ed.institution} delayMs={index * 80}>
              <Card className="h-full border-border/70">
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <CardTitle className="text-base">{ed.title}</CardTitle>
                    <Badge variant="outline" className="font-mono text-[0.65rem]">
                      {ed.period}
                    </Badge>
                  </div>
                  <p className="text-xs font-medium text-primary">
                    {ed.institution}
                  </p>
                  <CardDescription className="text-xs leading-relaxed sm:text-sm">
                    {ed.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}

          <Reveal delayMs={160}>
            <Card className="h-full border-border/70 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Idiomas</CardTitle>
                <ul className="mt-2 flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <Badge variant="secondary" className="font-normal">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">
                          {" "}
                          — {lang.level}
                        </span>
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
