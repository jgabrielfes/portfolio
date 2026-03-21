<!-- BEGIN:nextjs-agent-rules -->

# Ambiente Node

Antes de instalar dependências ou rodar scripts (`yarn`, `npm`, `next`, etc.), use **Node 24** com nvm:

```bash
nvm use 24
```

Com `direnv` ou `nvm` configurado para ler `.nvmrc`, `nvm use` na raiz do repo já seleciona a versão certa.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
