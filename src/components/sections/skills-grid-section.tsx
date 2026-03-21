import { getMessages, getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SkillGroup = {
  category: string;
  items: readonly string[];
};

export async function SkillsGridSection() {
  const t = await getTranslations("Skills");
  const messages = await getMessages();
  const skillsByCategory = messages.SkillsByCategory as SkillGroup[];

  return (
    <section
      id="stack"
      className="border-t border-border/60 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 max-w-xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("lead")}
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
