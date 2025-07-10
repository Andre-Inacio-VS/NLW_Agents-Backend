# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar um sistema de agentes inteligentes com processamento de áudio e IA.

## 🚀 Tecnologias Utilizadas

### Backend
- **Fastify** - Framework web rápido para Node.js
- **TypeScript** - Linguagem de programação tipada
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão para vetores no PostgreSQL
- **Zod** - Validação de schemas e tipos
- **Google Gemini AI** - API de inteligência artificial

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter
- **Docker** - Containerização
- **Drizzle Kit** - Ferramentas para migrações

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Chave da API do Google Gemini

## ⚙️ Configuração

1. **Clone o repositório**
```bash
git clone <repository-url>
cd server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=sua_chave_api_aqui
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
npm run db:migrate
```

6. **Popule o banco com dados iniciais (opcional)**
```bash
npm run db:seed
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📊 Estrutura do Banco de Dados

O projeto utiliza as seguintes tabelas:
- **rooms** - Salas de conversação
- **questions** - Perguntas dos usuários
- **audio_chunks** - Chunks de áudio processados

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm start` - Executa em modo produção
- `npm run db:generate` - Gera novas migrações
- `npm run db:migrate` - Executa migrações pendentes
- `npm run db:seed` - Popula o banco com dados iniciais

## 🌐 Endpoints da API

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:id/questions` - Lista perguntas de uma sala
- `POST /questions` - Cria uma nova pergunta
- `POST /upload-audio` - Faz upload de áudio

## 📝 Padrões de Projeto

- **Arquitetura em camadas** - Separação clara entre rotas, serviços e banco de dados
- **Validação com Zod** - Schemas tipados para validação de entrada
- **TypeScript** - Tipagem estática em todo o projeto
- **Drizzle ORM** - Queries tipadas e migrações automáticas
- **Fastify** - Framework performático com plugins modulares

## 🤝 Contribuição

Este projeto foi desenvolvido como parte do evento NLW da Rocketseat. Para contribuições, siga os padrões estabelecidos e utilize o Biome para formatação do código.
