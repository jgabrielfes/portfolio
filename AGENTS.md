<!-- BEGIN:nextjs-agent-rules -->

# Ambiente Node

Antes de instalar dependências ou rodar scripts (`yarn`, `npm`, `next`, etc.), use **Node 24** com nvm:

```bash
nvm use 24
```

Com `direnv` ou `nvm` configurado para ler `.nvmrc`, `nvm use` na raiz do repo já seleciona a versão certa.

# Commits (Conventional Commits)

Sempre que for **criar mensagens de commit**, **sugerir** um commit ou **executar** `git commit` em nome do usuário, use o padrão **[Conventional Commits](https://www.conventionalcommits.org/)**:

- Formato: `<tipo>[escopo opcional]: <descrição>`
- A descrição deve ser **curta**, no **imperativo** (ex.: “adiciona”, não “adicionado” ou “adicionando”) e, em geral, **sem ponto final**.
- **Tipos comuns:** `feat` (funcionalidade), `fix` (correção), `docs` (documentação), `style` (formatação, sem mudar lógica), `refactor`, `perf`, `test`, `chore` (tarefas/manutenção), `ci`, `build`, `revert`.
- **Breaking change:** use `!` após o tipo/escopo (ex.: `feat!: remove API legada`) ou rodapé `BREAKING CHANGE:` na mensagem completa.
- **Escopo:** opcional e útil quando há módulo claro (ex.: `feat(landing): adiciona seção de contato`).

Exemplos: `fix(header): corrige menu mobile no iOS`, `chore: atualiza dependências`, `docs(agents): documenta padrão de commits`.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
