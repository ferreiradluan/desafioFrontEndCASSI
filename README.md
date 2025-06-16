# Desafio CASSI

Projeto desenvolvido com **React**, **Next.js 15** e **TypeScript**, implementando um sistema de notificação de intermediação preliminar (NIP) para a CASSI com componentes reutilizáveis e testes automatizados.

## 📋 Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Componentes Principais](#componentes-principais)
- [Testes](#testes)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Organização do Repositório](#organização-do-repositório)

## 🚀 Tecnologias Utilizadas

- **Next.js 15.2.4** - Framework React para produção
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript 5** - Tipagem estática para JavaScript
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **Radix UI** - Biblioteca de componentes acessíveis
- **Lucide React** - Ícones modernos e consistentes
- **Jest + React Testing Library** - Framework de testes
- **pnpm** - Gerenciador de pacotes (recomendado)

## 📁 Estrutura do Projeto

```
desafio-cassi/
├── app/                          # Diretório principal do Next.js 15 (App Router)
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página inicial (home)
│   ├── confirmacao/             # Página de confirmação de dados
│   ├── confirmacao-final/       # Página de confirmação final
│   ├── confirmacao-reconhecido/ # Página para usuários reconhecidos
│   ├── nao-reconheco/          # Página para usuários não reconhecidos
│   ├── verificar-contato/       # Página de verificação de contato
│   └── verificar-contato-sim/   # Página pós-verificação de contato
├── components/                   # Componentes reutilizáveis
│   ├── ui/                      # Componentes de interface
│   │   ├── Header.tsx           # Cabeçalho principal
│   │   ├── Footer.tsx           # Rodapé principal
│   │   ├── MainLayout.tsx       # Layout principal das páginas
│   │   ├── PageHeader.tsx       # Cabeçalho de páginas internas
│   │   ├── NipConfirmationCard.tsx  # Card de confirmação NIP
│   │   ├── NipDataCard.tsx      # Card de dados do NIP
│   │   ├── InfoSidebar.tsx      # Barra lateral informativa
│   │   ├── ContactVerificationModal.tsx # Modal de verificação
│   │   └── [outros componentes Radix UI]
│   ├── AppIcon.tsx              # Componente de ícone da aplicação
│   └── theme-provider.tsx       # Provedor de tema
├── __tests__/                   # Testes automatizados
│   ├── components/              # Testes de componentes
│   ├── pages/                   # Testes de páginas
│   └── utils/                   # Utilitários de teste
├── hooks/                       # Custom hooks
├── lib/                         # Utilitários e configurações
├── public/                      # Arquivos estáticos
│   └── images/                  # Imagens do projeto
├── styles/                      # Estilos adicionais
├── jest.config.js               # Configuração do Jest
├── jest.setup.js                # Setup dos testes
├── tailwind.config.ts           # Configuração do Tailwind
└── components.json              # Configuração do shadcn/ui
```

## 🖥️ Como Rodar o Projeto

### 1. Usando pnpm (recomendado)
```bash
# Instalar dependências
pnpm install

# Rodar em modo desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Rodar em modo produção
pnpm start
```

### 2. Usando Docker
```bash
# Build e execução com Docker Compose
docker-compose up --build

# Ou apenas com Docker
docker build -t desafio-cassi .
docker run -p 3000:3000 desafio-cassi
```

### 3. Usando npm
```bash
npm install
npm run dev
```

**Acesse:** http://localhost:3000

### 4. Demo Online
**Acesse:** https://desafio-front-end-cassi.vercel.app/

## 🧩 Componentes Principais

### MainLayout
Layout principal que encapsula Header e Footer em todas as páginas.

```tsx
import MainLayout from '@/components/ui/MainLayout'

export default function MinhaPage() {
  return (
    <MainLayout>
      <div>Conteúdo da página</div>
    </MainLayout>
  )
}
```

### NipConfirmationCard
Componente para exibir e confirmar dados do NIP.

```tsx
import NipConfirmationCard from '@/components/ui/NipConfirmationCard'

<NipConfirmationCard
  title="Confirmação de NIP"
  data={{
    beneficiario: "Nome do Beneficiário",
    interlocutor: "Nome do Interlocutor",
    dataAbertura: "29/01/2022"
  }}
  showConfirmation={true}
  confirmationMessage="Dados confirmados com sucesso!"
  showQuestionButtons={true}
  questionText="Os dados estão corretos?"
  onYes={() => console.log('Sim clicado')}
  onNo={() => console.log('Não clicado')}
/>
```

### PageHeader
Cabeçalho padronizado para páginas internas.

```tsx
import PageHeader from '@/components/ui/PageHeader'

<PageHeader
  title="Título da Página"
  subtitle="Subtítulo explicativo"
  titleClassName="text-[#002d4b]"
  subtitleClassName="text-[#2d2d2d]"
/>
```

### InfoSidebar
Barra lateral com informações complementares.

```tsx
import InfoSidebar from '@/components/ui/InfoSidebar'

<InfoSidebar>
  <p>Informações importantes sobre o processo...</p>
</InfoSidebar>
```

### Header e Footer
Componentes globais automaticamente incluídos no MainLayout.
- **Header**: Logo, busca, navegação, redes sociais e login
- **Footer**: Links institucionais, redes sociais e informações corporativas

## 🧪 Testes

O projeto possui uma suíte completa de testes automatizados com **Jest** e **React Testing Library**.

### Executar Testes
```bash
# Executar todos os testes
pnpm test

# Modo watch (desenvolvimento)
pnpm test:watch

# Relatório de cobertura
pnpm test:coverage

# Modo CI/CD
pnpm test:ci
```

### Cobertura de Testes
- **37 testes** implementados
- Cobertura de componentes principais
- Testes de interação do usuário
- Validação de renderização e props
- Testes de integração entre componentes

### Estrutura de Testes
```
__tests__/
├── components/
│   ├── Header.test.tsx
│   ├── Footer.test.tsx
│   ├── NipConfirmationCard.test.tsx
│   └── ...
├── pages/
│   ├── HomePage.test.tsx
│   ├── ConfirmacaoPage.test.tsx
│   └── ...
└── utils/
    ├── test-utils.tsx
    └── setup.d.ts
```

## 📜 Scripts Disponíveis

```json
{
  "dev": "next dev",                    // Desenvolvimento
  "build": "next build",                // Build produção
  "start": "next start",                // Servidor produção
  "lint": "next lint",                  // Linting
  "test": "jest",                       // Executar testes
  "test:watch": "jest --watch",         // Testes em modo watch
  "test:coverage": "jest --coverage",   // Relatório de cobertura
  "test:ci": "jest --ci --coverage --watchAll=false"  // Testes CI/CD
}
```

## 📂 Organização do Repositório

### Principais Diretórios

1. **`/app`** - Pages e layouts do Next.js 15 (App Router)
2. **`/components`** - Componentes reutilizáveis organizados por categoria
3. **`/__tests__`** - Testes automatizados espelhando a estrutura do projeto
4. **`/public`** - Assets estáticos (imagens, ícones)
5. **`/lib`** - Utilitários e configurações
6. **`/hooks`** - Custom hooks do React

### Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: `NipConfirmationCard.tsx`)
- **Páginas**: Snake-case para rotas (ex: `confirmacao-final/`)
- **Utilitários**: camelCase (ex: `utils.ts`)
- **Testes**: `[ComponentName].test.tsx`

### Padrões de Código

- **TypeScript**: Tipagem rigorosa em todos os componentes
- **ESLint**: Configuração padrão do Next.js
- **Tailwind**: Classes utilitárias para estilização
- **Responsivo**: Design mobile-first
- **Acessibilidade**: Componentes Radix UI para garantir acessibilidade

### Estrutura de Componentes

```tsx
// Exemplo de estrutura padrão de componente
interface ComponentProps {
  // Props tipadas
}

export default function Component({ ...props }: ComponentProps) {
  // Lógica do componente
  return (
    // JSX com Tailwind CSS
  )
}
```

## 🔧 Configurações

- **Next.js**: Configurado para App Router e otimizações de produção
- **TypeScript**: Configuração rigorosa com path mapping
- **Tailwind**: Tema customizado com cores da CASSI
- **Jest**: Configurado para Next.js com jsdom
- **ESLint**: Regras padrão do Next.js

## 📋 Funcionalidades Implementadas

- ✅ Sistema de navegação consistente
- ✅ Fluxo completo de confirmação NIP
- ✅ Componentes reutilizáveis e modulares
- ✅ Design responsivo e acessível
- ✅ Testes automatizados abrangentes
- ✅ Integração com APIs mockadas
- ✅ Estados de loading e erro
- ✅ Validação de formulários
- ✅ Tema visual consistente da CASSI

---

**Desenvolvido com ❤️ por Luan para o desafio CASSI**
