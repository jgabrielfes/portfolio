import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { stackMarquee } from "@/content/portfolio";
import { cn } from "@/lib/utils";

/** Quantas cópias da lista em sequência — precisa bater com `--marquee-segments` em `globals.css`. */
const MARQUEE_SEGMENTS = 6;

export function SkillsMarquee({ className }: { className?: string }) {
  const items = Array.from({ length: MARQUEE_SEGMENTS }, (_, copy) =>
    stackMarquee.map((label, i) => ({ label, key: `${copy}-${i}` }))
  ).flat();
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/60 bg-muted/30 py-3",
        className
      )}
    >
      <div
        className="landing-marquee-track flex w-max gap-3"
        style={
          {
            "--marquee-segments": MARQUEE_SEGMENTS,
          } as CSSProperties
        }
        aria-hidden
      >
        {items.map(({ label, key }) => (
          <Badge
            key={key}
            variant="outline"
            className="shrink-0 rounded-md px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider"
          >
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
