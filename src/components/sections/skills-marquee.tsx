import { Badge } from "@/components/ui/badge";
import { stackMarquee } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SkillsMarquee({ className }: { className?: string }) {
  const items = [...stackMarquee, ...stackMarquee];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/60 bg-muted/30 py-3",
        className
      )}
    >
      <div className="landing-marquee-track flex w-max gap-3" aria-hidden>
        {items.map((label, i) => (
          <Badge
            key={`${label}-${i}`}
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
