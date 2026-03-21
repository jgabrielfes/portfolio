/** Conteúdo alinhado ao currículo (fonte de verdade para o site). */

export const contact = {
  email: "jgabrielfes@gmail.com",
  phoneDisplay: "+55 (77) 99146-3904",
  phoneTel: "+5577991463904",
  linkedin: "https://linkedin.com/in/jgabrielfes",
  github: "https://github.com/jgabrielfes",
} as const;

export const professionalSummary =
  "Desenvolvedor full-stack sênior com sólida experiência em arquitetura de microsserviços, liderança técnica e mentoria. Atualmente na FCamara com foco em front-end (Vite), consultoria para Raia Drogasil (RD) em painéis com dados de integração e alinhamento de contratos de API com o back-end. Especialista em Node.js (TypeScript/NestJS), .NET e Ruby on Rails; histórico com uConnect (uMode) e liderança técnica no Engage (BonifiQ). Formação em Física (Licenciatura).";

/** Texto mais curto para a seção Sobre (evita repetir o resumo inteiro). */
export const aboutNarrative =
  "Atuo na FCamara como desenvolvedor full-stack sênior, com ênfase em front-end com Vite e em consultoria para a Raia Drogasil (RD) — painéis alimentados por dados de integração. Uso experiência em back-end para conversar com o time, definir contratos de APIs e manter entregas coerentes. Antes, BonifiQ (Engage, .NET/React) e uMode (uConnect, NestJS). Formação em Física pela UESB e desenvolvimento web full-stack pela Trybe.";

export const experience = [
  {
    id: "fcamara",
    company: "FCamara",
    role: "Desenvolvedor Full-stack Sênior",
    period: "Mar 2026 — Atual",
    highlights: [
      "Atuação com foco em front-end em stack com Vite, com base sólida em back-end para alinhar com a equipe, apoiar mudanças na API e formalizar contratos necessários entre camadas.",
      "Consultoria para Raia Drogasil (RD): construção de painéis que exibem dados de integração, priorizando clareza, confiabilidade da informação e aderência aos fluxos do negócio.",
    ],
  },
  {
    id: "bonifiq",
    company: "BonifiQ",
    role: "Full-stack Developer",
    period: "Jan 2025 — Mar 2026",
    highlights: [
      "Liderança técnica da equipe Engage, focada em inovação e novos desenvolvimentos de alto impacto.",
      "Arquitetura e manutenção de mais de 6 aplicações em React + TypeScript (widgets, checkouts, editores e landing pages), com foco em performance e escalabilidade.",
      "Atuação integral no back-end em .NET, entregando features completas e apoiando a evolução técnica de desenvolvedores front-end.",
    ],
  },
  {
    id: "umode",
    company: "uMode",
    role: "Líder de Integrações (Pleno)",
    period: "Jan 2023 — Jan 2025",
    highlights: [
      "Idealização e arquitetura do microsserviço uConnect: integrações dinâmicas baseadas em configurações de banco de dados, otimizando o fluxo de dados da plataforma.",
      "Liderança da migração de um ambiente Serverless para arquitetura robusta em NestJS.",
      "Gestão da área de integrações, garantindo integridade de dados entre múltiplos sistemas.",
    ],
  },
  {
    id: "hrp",
    company: "HRP Serviços",
    role: "Front-end Developer",
    period: "Dez 2022 — Jan 2023",
    highlights: [
      "Implementação de funcionalidades e integração com o back-end em aplicação React, melhorando a interface e a consistência do fluxo de dados.",
    ],
  },
  {
    id: "yaris",
    company: "Yaris Solar",
    role: "Full-stack Developer",
    period: "Out 2022 — Dez 2022",
    highlights: [
      "Desenvolvimento de plataforma CRM: arquitetura full-stack com React no front-end e NestJS no back-end, com foco em escalabilidade e processos comerciais.",
    ],
  },
  {
    id: "botfy",
    company: "Botfy",
    role: "Front-end Developer",
    period: "Jul 2022 — Out 2022",
    highlights: [
      "Implementação e finalização de módulos front-end em React, participando do ciclo completo de entrega do projeto.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Trybe",
    title: "Desenvolvimento Web Full-Stack",
    period: "Nov 2021 — Nov 2022",
    description:
      "Mais de 1.500 horas em desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.",
  },
  {
    institution: "Universidade Estadual do Sudoeste da Bahia (UESB)",
    title: "Licenciatura em Física",
    period: "Mai 2016 — Fev 2020",
    description:
      "Base sólida em pensamento lógico e resolução de problemas, com aplicação em pesquisa, engenharia e tecnologia.",
  },
] as const;

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Técnico (leitura e documentação)" },
] as const;

export const skillsByCategory = [
  {
    category: "Linguagens & frameworks",
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "NestJS",
      ".NET",
      "C#",
      "Blazor",
      "Ruby on Rails",
      "React",
      "Next.js",
      "Vite",
    ],
  },
  {
    category: "Arquitetura & backend",
    items: [
      "Microsserviços",
      "API design",
      "Serverless Framework",
      "Integrações configuráveis (uConnect)",
    ],
  },
  {
    category: "Bancos de dados",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & cloud",
    items: [
      "AWS (SQS, Lambda, CodePipeline)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    category: "Práticas",
    items: [
      "Scrum / Kanban",
      "Git Flow",
      "Code review",
      "Mentoria técnica",
      "Liderança técnica",
    ],
  },
] as const;

/** Itens da faixa animada (destaques). */
export const stackMarquee = [
  "TypeScript",
  "Vite",
  "NestJS",
  "React",
  ".NET",
  "Ruby on Rails",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Microsserviços",
  "CI/CD",
] as const;
