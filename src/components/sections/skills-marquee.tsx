import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Quantas cópias da lista em sequência — precisa bater com `--marquee-segments` em `globals.css`. */
const MARQUEE_SEGMENTS = 6;

type SkillsMarqueeProps = {
  items: readonly string[];
  className?: string;
};

export function SkillsMarquee({ items, className }: SkillsMarqueeProps) {
  const track = Array.from({ length: MARQUEE_SEGMENTS }, (_, copy) =>
    items.map((label, i) => ({ label, key: `${copy}-${i}` }))
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
        {track.map(({ label, key }) => (
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
