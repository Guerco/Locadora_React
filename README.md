Com base no modelo que você enviou e nas informações do PDF do projeto Paraprolim, aqui está um `README.md` sucinto e padronizado:

```markdown
# Projeto Paraprolim

**CEFET/RJ – Nova Friburgo**
**Bacharelado em Sistemas de Informação**

_Projeto Paraprolim, desenvolvido para [inserir disciplina/semestre]._

---

## 👨‍💻 Desenvolvedores

- [Gabriel Guerço](https://github.com/Guerco)
- [Inserir outros nomes aqui, se houver]

---

## 🌐 Tecnologias utilizadas

### Frontend 🎨

**🔧 Linguagens e Ferramentas:**

- HTML
- CSS
- TypeScript
- React
- Vite
- PNPM

**📚 Bibliotecas e Frameworks TypeScript:**

- React Router
- TanStack Query
- Material UI (se for usar, ou remova se não)
- oxlint

*(Ajuste essa lista de bibliotecas conforme o `package.json` final do seu projeto)*

---

### Backend 🛠️

**🔧 Linguagens e Ferramentas:**

- PHP
- Laravel (conforme as migrations e o ambiente enviados)
- Composer

---

## Primeiros Passos 🏃‍♂️

Para rodar o projeto localmente:

1. Instale as dependências do frontend:
   ```bash
   pnpm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
3. Certifique-se de que o backend (Laravel) esteja rodando na porta `8000` para o proxy funcionar.

---

## Estrutura de Diretórios 🗃

| **📂**                                       | **Descrição**                                           |
| -------------------------------------------- | ------------------------------------------------------- |
| [/api/](./api/)                              | Implementação da API (Backend)                          |
| [/frontend/](./frontend/)                    | Implementação do frontend                               |
| 🛠️**Estrutura da API**                       |                                                         |
| [/database/migrations/](./api/database/migrations/) | Migrations do banco de dados                     |
| [/src/](./api/src/)                          | Código-fonte da API                                     |
| 🎨**Estrutura do Frontend**                  |                                                         |
| [/src/](./frontend/src/)                     | Código-fonte do frontend                                |
| [/src/api/](./frontend/src/api/)             | Configuração HTTP, rotas e interceptores                |
| [/src/components/](./frontend/src/components/) | Componentes reutilizáveis (separados por entidade)    |
| [/src/hooks/](./frontend/src/hooks/)         | Hooks customizados                                      |
| [/src/pages/](./frontend/src/pages/)         | Páginas da aplicação                                    |
| [/src/services/](./frontend/src/services/)   | Serviços de chamadas à API                              |
| [/src/types/](./frontend/src/types/)         | Definições de tipos TypeScript                          |
| [/src/utils/](./frontend/src/utils/)         | Funções utilitárias (formatadores, etc.)                |

---

## Documentação da API 🧩

*(Se houver um arquivo de documentação da API, link aqui)*

---

## Comandos disponíveis:

- `pnpm install` - Instala as dependências
- `pnpm dev` - Roda o frontend em ambiente de desenvolvimento
- `pnpm build` - Gera o build de produção
- `pnpm lint` - Verifica a qualidade do código com oxlint
```