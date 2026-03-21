/**
 * Tipos para métricas animadas e URL do CV.
 * Textos traduzidos: `EmployerImpactBlocks`, `FeaturedProjects`, etc. em `src/messages/*.json`.
 */

export type ImpactMetric =
  | {
      kind: "int";
      value: number;
      suffix?: string;
      label: string;
    }
  | {
      kind: "millions";
      value: number;
      suffix?: string;
      label: string;
    };

export type EmployerImpactBlock = {
  id: string;
  company: string;
  subtitle: string;
  period: string;
  metrics: readonly ImpactMetric[];
  caption: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  context: string;
  summary: string;
  stack: readonly string[];
  period: string;
  highlights: readonly string[];
};

export const resumePdfUrl: string | null = "/jgabrielfes-cv.pdf";
