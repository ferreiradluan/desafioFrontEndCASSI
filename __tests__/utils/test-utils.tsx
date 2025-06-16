import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

// Mock do tema provider se necessário
const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

// Utility para criar dados de teste
export const createMockNipData = () => ({
  beneficiario: 'João Silva',
  interlocutor: 'Maria Santos',
  dataAbertura: '01/01/2024'
})

// Utility para esperar por elementos assíncronos
export const waitForElementToBeRemoved = async (element: HTMLElement) => {
  const { waitForElementToBeRemoved } = await import('@testing-library/react')
  return waitForElementToBeRemoved(element)
}

// Utility para simular cliques
export const clickElement = async (element: HTMLElement) => {
  const { userEvent } = await import('@testing-library/user-event')
  const user = userEvent.setup()
  await user.click(element)
}
