# Answers Agent

Projeto desenvolvido durante o evento NLW Agents da Rocketseat. O Answers Agent é uma aplicação que utiliza inteligência artificial em conjunto com sistema de busca por vetores para processar e recuperar informações relevantes de um banco de dados contendo transcrições de lives em tempo real.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.io/)
- [PostgreSQL](https://www.postgresql.org/) com [pgvector](https://github.com/pgvector/pgvector)
- [DrizzleORM](https://orm.drizzle.team/)
- [Zod](https://zod.dev/)

## 💻 Pré-requisitos

- Node.js
- Docker e Docker Compose
- npm

## 🔧 Configuração do Ambiente

1. Clone o repositório
```bash
git clone https://github.com/LuxksC/AI_AnswersAgent.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` baseado no `.env.example`

4. Inicie o banco de dados:
```bash
docker compose up -d
```

5. Execute as migrações:
```bash
npx drizzle-kit migrate
```

6. (Opcional) Execute o seed do banco de dados:
```bash
npm run db:seed
```

## 🚀 Executando o Projeto

Para desenvolvimento:
```bash
npm run dev
```

Para produção:
```bash
npm run start
```

## 🏗 Estrutura do Projeto

- `src/` - Código fonte da aplicação
  - `db/` - Configurações e schemas do banco de dados
  - `http/` - Rotas e controllers da API
  - `env.ts` - Configurações de ambiente
  - `server.ts` - Entrada da aplicação

## � Rotas da API

- `GET /health` — Verifica o status da aplicação (retorna "OK").
- `GET /rooms` — Lista as salas disponíveis (ver detalhes em `src/http/routes/get-rooms.ts`).

## �📝 Licença

Este projeto está sob a licença ISC.

---

Feito com 💜 durante o NLW Agents da Rocketseat
