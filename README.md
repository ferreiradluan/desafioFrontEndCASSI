# Desafio CASSI

Projeto desenvolvido com **React** e **Next.js**.

## Como rodar o projeto

### 1. Usando Docker (recomendado)
Certifique-se de ter o Docker instalado.

#### Build e execução com Docker Compose:
```bash
docker-compose up --build
```
Acesse: http://localhost:3000

#### Ou apenas com Docker:
```bash
docker build -t desafio-cassi .
docker run -p 3000:3000 desafio-cassi
```


### 2. Usando npm
```bash
npm install
npm run dev
```
Acesse: http://localhost:3000


---

- O projeto foi desenvolvido com React e Next.js.
- Para produção, utilize `pnpm build` ou `npm run build` e depois `pnpm start` ou `npm start`.
