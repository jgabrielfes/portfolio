"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { Reveal } from "@/components/landing/reveal";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { EmployerImpactBlock, ImpactMetric } from "@/content/recruiter";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useInViewStart(ref: React.RefObject<HTMLElement | null>) {
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return started;
}

function AnimatedInt({
  end,
  suffix,
  className,
}: {
  end: number;
  suffix?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const started = useInViewStart(ref);
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!started) return;
    if (reducedMotion) {
      setValue(end);
      return;
    }

    const durationMs = end >= 100 ? 1800 : 1200;
    let startAt: number | null = null;
    let frameId = 0;

    const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

    const tick = (now: number) => {
      if (startAt === null) startAt = now;
      const t = Math.min(1, (now - startAt) / durationMs);
      setValue(Math.round(end * easeOutCubic(t)));
      if (t < 1) frameId = requestAnimationFrame(tick);
      else setValue(end);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, reducedMotion]);

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      {value}
      {suffix ? <span className="text-primary">{suffix}</span> : null}
    </span>
  );
}

function AnimatedMillions({
  end,
  suffix,
  className,
  locale,
}: {
  end: number;
  suffix?: string;
  className?: string;
  locale: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const started = useInViewStart(ref);
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!started) return;
    if (reducedMotion) {
      setValue(end);
      return;
    }

    const durationMs = 2000;
    let startAt: number | null = null;
    let frameId = 0;
    const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

    const tick = (now: number) => {
      if (startAt === null) startAt = now;
      const t = Math.min(1, (now - startAt) / durationMs);
      setValue(end * easeOutCubic(t));
      if (t < 1) frameId = requestAnimationFrame(tick);
      else setValue(end);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, reducedMotion]);

  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      {formatted}M{suffix ? <span className="text-primary">{suffix}</span> : null}
    </span>
  );
}

function MetricRow({
  metric,
  locale,
}: {
  metric: ImpactMetric;
  locale: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-border/50 py-4 last:border-b-0 last:pb-0 first:pt-0 sm:grid-cols-[minmax(4.75rem,auto)_1fr] sm:items-start sm:gap-x-4 sm:gap-y-0">
      <div className="font-heading text-3xl font-semibold leading-none tracking-tight text-foreground sm:min-w-21 sm:text-4xl md:min-w-23">
        {metric.kind === "int" ? (
          <AnimatedInt end={metric.value} suffix={metric.suffix} />
        ) : (
          <AnimatedMillions
            end={metric.value}
            suffix={metric.suffix}
            locale={locale}
          />
        )}
      </div>
      <p className="max-w-prose text-sm leading-snug text-muted-foreground sm:text-base sm:leading-relaxed">
        {metric.label}
      </p>
    </div>
  );
}

export function EmployerImpactStats({
  blocks,
}: {
  blocks: readonly EmployerImpactBlock[];
}) {
  const locale = useLocale();

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-2">
      {blocks.map((block, index) => (
        <Reveal key={block.id} delayMs={index * 80}>
          <Card className="h-full border-border/70 bg-card/80">
            <CardHeader className="gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {block.company}
                </p>
                <CardTitle className="mt-1 text-lg">{block.subtitle}</CardTitle>
                <CardDescription className="mt-1 text-xs font-normal sm:text-sm">
                  {block.period}
                </CardDescription>
              </div>
              <div className="border-t border-border/60 pt-1">
                {block.metrics.map((m) => (
                  <MetricRow key={m.label} metric={m} locale={locale} />
                ))}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {block.caption}
              </p>
            </CardHeader>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
