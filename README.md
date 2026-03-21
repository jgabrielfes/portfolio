# Portfólio — João Ferraz

Site pessoal (CV, cases e contato) em **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4** e **shadcn/ui**.

## Ver ao vivo

- Produção: [jgabrielfes.vercel.app](https://jgabrielfes.vercel.app) (ajuste se usares domínio próprio)

## Requisitos

- **Node.js 24** (ver [`.nvmrc`](./.nvmrc))
- **Yarn** (Classic)

## Scripts

```bash
nvm use 24   # se usares nvm
yarn install
yarn dev     # http://localhost:3000
yarn build
yarn start
yarn lint
yarn test       # Vitest em modo watch
yarn test:run   # uma execução (CI / pré-commit)
```

## Testes

- **Vitest** + **Testing Library** (React) + **jsdom**
- Ficheiros: `src/**/*.test.ts` e `src/**/*.test.tsx`
- Configuração: [`vitest.config.ts`](./vitest.config.ts)

## Variáveis de ambiente

Ver [`.env.example`](./.env.example). Em produção na Vercel, `VERCEL_PROJECT_PRODUCTION_URL` é definida automaticamente; opcional: `NEXT_PUBLIC_SITE_URL` para domínio próprio (Open Graph, sitemap, etc.).

## Licença

O código deste repositório é disponibilizado para **referência e portfólio**. O conteúdo textual e a marca pessoal permanecem teus; quem forkar deve adaptar textos e dados.

## Estrutura (resumo)

| Pasta | Conteúdo |
|--------|-----------|
| `src/app/` | Rotas App Router, `layout`, metadados |
| `src/components/` | Layout, secções, UI (shadcn) |
| `src/content/` | Dados do CV, recrutadores, cases |
| `public/` | Assets estáticos (ex.: PDF, `logo.png`) |

---

Feito com foco em performance leve, tema claro/escuro e boa leitura em mobile.
