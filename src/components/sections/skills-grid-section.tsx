import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillsByCategory } from "@/content/portfolio";

export function SkillsGridSection() {
  return (
    <section
      id="stack"
      className="border-t border-border/60 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 max-w-xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Habilidades técnicas
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Visão agrupada do currículo — linguagens, arquitetura, dados, cloud e
            como trabalho em time.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsByCategory.map((group, index) => (
            <Reveal key={group.category} delayMs={index * 50}>
              <Card className="h-full border-border/70">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-primary">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="font-normal">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
