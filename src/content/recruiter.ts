/**
 * Conteúdo voltado a recrutadores: visão rápida, diferenciais e cases.
 * Ajuste datas/números conforme evoluir a carreira.
 */

export const recruiterAtAGlance = [
  {
    label: "Senioridade",
    value: "Desenvolvedor full-stack sênior",
  },
  {
    label: "Experiência em produto",
    value: "Desde 2022 (squads B2B/B2C)",
  },
  {
    label: "Liderança",
    value: "Times de engenharia e integrações",
  },
  {
    label: "Foco atual",
    value: "Front (Vite) + contratos de API + dados RD",
  },
] as const;

export const valuePropositions = [
  {
    title: "Ponte entre produto, front e back-end",
    description:
      "Consigo especificar e negociar contratos de API, acompanhar mudanças no back-end e garantir que o front consuma dados de forma consistente — menos retrabalho entre times.",
  },
  {
    title: "Arquitetura e integrações em escala",
    description:
      "Experiência com microsserviços e integrações configuráveis (uConnect): desenho de fluxos de dados, evolução de Serverless para NestJS e integridade entre sistemas.",
  },
  {
    title: "Front-end em ecossistema grande",
    description:
      "Manutenção e arquitetura de múltiplas aplicações React + TypeScript (widgets, checkouts, editores), com foco em performance e padronização.",
  },
  {
    title: "Consultoria e visão de negócio",
    description:
      "Na FCamara, atuação com Raia Drogasil (RD): painéis com dados de integração, traduzindo necessidade de negócio em interfaces confiáveis e auditáveis.",
  },
] as const;

export type FeaturedProject = {
  id: string;
  title: string;
  context: string;
  summary: string;
  stack: readonly string[];
  period: string;
  highlights: readonly string[];
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "rd-painéis",
    title: "Painéis de integração — Raia Drogasil (RD)",
    context: "FCamara · consultoria",
    period: "2026 — atual",
    summary:
      "Construção de painéis que consolidam e exibem dados vindos de integrações, com foco em clareza para operações e alinhamento com o que o back-end expõe.",
    stack: ["Vite", "React", "TypeScript", "Integração de dados", "APIs"],
    highlights: [
      "Front-end com Vite e forte colaboração com o time de back-end.",
      "Definição e refinamento de contratos para consumo seguro dos dados.",
    ],
  },
  {
    id: "engage-bonifiq",
    title: "Ecossistema Engage — BonifiQ",
    context: "Liderança técnica & full-stack",
    period: "2025 — 2026",
    summary:
      "Coordenação técnica de um time de alto impacto e manutenção de um conjunto amplo de aplicações front-end, com entregas contínuas em .NET no back-end.",
    stack: ["React", "TypeScript", ".NET", "C#", "Arquitetura front"],
    highlights: [
      "Mais de 6 aplicações React + TypeScript em produção.",
      "Mentoria e evolução técnica de desenvolvedores front-end.",
    ],
  },
  {
    id: "uconnect",
    title: "uConnect — motor de integrações",
    context: "uMode · liderança de integrações",
    period: "2023 — 2025",
    summary:
      "Microsserviço para integrações dinâmicas guiadas por configuração em banco, reduzindo atrito no fluxo de dados entre a plataforma e sistemas externos.",
    stack: ["NestJS", "TypeScript", "Microsserviços", "PostgreSQL", "AWS"],
    highlights: [
      "Concepção e arquitetura do serviço desde a ideia até produção.",
      "Migração de Serverless para arquitetura NestJS mais sustentável.",
    ],
  },
  {
    id: "crm-yaris",
    title: "Plataforma CRM — Yaris Solar",
    context: "Full-stack",
    period: "2022",
    summary:
      "CRM para gestão de relacionamento com cliente, com organização de processos comerciais e base preparada para crescer com o negócio.",
    stack: ["React", "NestJS", "TypeScript", "APIs REST"],
    highlights: [
      "Responsabilidade ponta a ponta: interface e API.",
      "Modelagem pensada em escalabilidade e clareza de domínio.",
    ],
  },
] as const;

/** Se hospedar um PDF público (ex.: /curriculo.pdf em /public), coloque a URL aqui. */
export const resumePdfUrl: string | null = null;
