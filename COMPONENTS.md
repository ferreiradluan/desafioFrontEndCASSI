# Componentes CASSI

Este documento descreve todos os componentes criados para o projeto CASSI, organizados por categoria.

## Layout Components

### Header
Cabeçalho principal do site com logo, busca, redes sociais, usuário e botão de login.

### Footer
Rodapé com logo, redes sociais e links organizados por seção.

### Navigation
Navegação horizontal com dropdowns para menus.

### PageLayout
Layout base que envolve Header + conteúdo + Footer.

### MainContent
Container principal para conteúdo de página simples.

### MainContentWithSidebar
Container principal com layout de duas colunas (conteúdo + sidebar).

### Logo
Componente para logo da CASSI com variantes (header/footer).

### SearchBox
Caixa de busca reutilizável.

### SocialLinks
Links para redes sociais da CASSI.

### UserSection
Seção do usuário com ícone e nome.

## UI Components

### NipCard
Card específico para exibir dados de NIP (Notificação de Intermediação Preliminar).
```tsx
<NipCard 
  data={{
    beneficiario: "Nome do Beneficiário",
    interlocutor: "Nome do Interlocutor", 
    dataAbertura: "01/01/2023"
  }}
  buttons={[
    { label: "Não reconheço", href: "/nao-reconheco", variant: "outline" },
    { label: "Sim, foi aberto por mim", href: "/confirmacao" }
  ]}
/>
```

### ConfirmationDialog
Modal de confirmação reutilizável.
```tsx
<ConfirmationDialog
  isOpen={showDialog}
  onClose={() => setShowDialog(false)}
  onConfirm={handleConfirm}
  title="Confirmar Ação"
  message="Tem certeza que deseja continuar?"
/>
```

### StepIndicator
Indicador de progresso em etapas.
```tsx
<StepIndicator
  steps={[
    { id: "1", title: "Início" },
    { id: "2", title: "Dados" },
    { id: "3", title: "Confirmação" }
  ]}
  currentStepId="2"
/>
```

### ModalOverlay
Overlay base para modals.
```tsx
<ModalOverlay isOpen={isOpen} onClose={onClose}>
  <div className="p-6">Conteúdo do modal</div>
</ModalOverlay>
```

### DataCard
Card genérico para exibir dados estruturados.
```tsx
<DataCard
  title="Informações"
  data={[
    { label: "Nome", value: "João Silva" },
    { label: "Email", value: "joao@email.com" }
  ]}
/>
```

### FormSection
Seção de formulário com título e descrição.
```tsx
<FormSection 
  title="Dados Pessoais"
  description="Preencha suas informações"
  required
>
  <Input placeholder="Nome completo" />
</FormSection>
```

### SuccessMessage
Mensagem de sucesso com ícone.
```tsx
<SuccessMessage
  title="Operação realizada!"
  message="Seus dados foram salvos com sucesso."
/>
```

### LoadingSpinner
Componente de carregamento.
```tsx
<LoadingSpinner size="lg" message="Carregando..." />
```

### PageHeader
Cabeçalho de página com título, subtítulo e breadcrumbs.
```tsx
<PageHeader
  title="Minha Página"
  subtitle="Descrição da página"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Página Atual" }
  ]}
/>
```

### QuestionCard
Card para perguntas com opções de resposta.
```tsx
<QuestionCard
  question="Reconhece esta NIP?"
  options={[
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao", variant: "outline" }
  ]}
  onSelect={handleSelect}
/>
```

### StatusBadge
Badge para indicar status.
```tsx
<StatusBadge 
  status="success" 
  label="Aprovado" 
  size="md"
/>
```

### AlertMessage
Mensagem de alerta com diferentes tipos.
```tsx
<AlertMessage
  type="warning"
  title="Atenção"
  message="Verifique os dados antes de continuar."
/>
```

### EmptyState
Estado vazio para listas/tabelas vazias.
```tsx
<EmptyState
  title="Nenhum item encontrado"
  description="Não há dados para exibir no momento."
  actionLabel="Adicionar Item"
  onAction={handleAdd}
/>
```

### NavigationButtons
Botões de navegação (voltar/continuar).
```tsx
<NavigationButtons
  backLabel="Voltar"
  nextLabel="Confirmar"
  onBack={handleBack}
  onNext={handleNext}
/>
```

### NotificationCard
Card para notificações (já existente).

### InfoSidebar
Sidebar informativa (já existente).

### ActionButtons
Botões de ação agrupados (já existente).

### ContactForm
Formulário de contato (já existente).

### DropdownMenu
Menu dropdown (já existente).

## Como Usar

1. Importe os componentes necessários:
```tsx
import { NipCard, ConfirmationDialog, PageHeader } from '@/components'
```

2. Use os componentes com as props apropriadas conforme a documentação acima.

3. Todos os componentes seguem o padrão de design do projeto CASSI com as cores e estilos definidos.

## Padrões de Design

- **Cores principais**: `#002d4b` (azul escuro), `#135b9e` (azul médio)
- **Cores de texto**: `#2d2d2d` (texto principal), `#505251` (texto secundário)
- **Backgrounds**: `#f9f9f9` (fundo claro), `#ffffff` (branco)
- **Bordas**: `#d9d9d9`
- **Espaçamentos**: Usar classes Tailwind padrão (p-4, p-6, mb-4, etc.)
- **Tipografia**: Arial, fonte padrão do projeto
