# AGENTS.md — índice

As **regras completas** para assistentes (Cursor e outras IAs) estão em:

**[`.cursor/rules/portfolio.mdc`](.cursor/rules/portfolio.mdc)**  
Esse ficheiro usa `alwaysApply: true`, por isso o **Cursor** injeta o contexto em praticamente todos os pedidos neste repositório.

## Resumo rápido

| Tópico | Onde |
|--------|------|
| Node 24, yarn, nvm | `.nvmrc` + regra `portfolio.mdc` |
| Conventional Commits | `portfolio.mdc` |
| Next.js 16 (ler docs locais) | `portfolio.mdc` |
| Pastas, conteúdo, UI (full-bleed, marquee, **responsivo**) | `portfolio.mdc` |
| Testes (Vitest, `yarn test:run`) | `portfolio.mdc` + `vitest.config.ts` |
| Respostas ao utilizador | Português (PT-BR) |

Se editar convenções do projeto, atualize **`.cursor/rules/portfolio.mdc`** e, se quiser, este resumo.
