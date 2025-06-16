# Dockerfile para Next.js com pnpm
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala as dependências do projeto
RUN pnpm install

# Copia o restante do código
COPY . .

# Build do projeto
RUN pnpm build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
