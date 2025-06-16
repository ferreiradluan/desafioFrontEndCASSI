import { render, screen } from '../utils/test-utils'
import ConfirmacaoPage from '../../app/confirmacao/page'

describe('Confirmacao Page', () => {  it('renders the main layout with header and footer', () => {
    render(<ConfirmacaoPage />)
    
    // Check for header elements (use getAllByAltText since there are multiple logos)
    const logos = screen.getAllByAltText('CASSI')
    expect(logos.length).toBeGreaterThan(0)
    
    // Check for footer elements - just check if footer exists
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('renders the page header with correct title and subtitle', () => {
    render(<ConfirmacaoPage />)
    
    expect(screen.getByText('Olá, Leandro Henrique')).toBeInTheDocument()
    expect(screen.getByText(/Foi realizada a abertura de uma Notificação de Intermediação Preliminar/)).toBeInTheDocument()
  })
  it('renders the NIP confirmation card with beneficiary data', () => {
    render(<ConfirmacaoPage />)
    
    // Use getAllByText since the name appears twice (beneficiary and interlocutor)
    const nameElements = screen.getAllByText('Leandro Henrique')
    expect(nameElements.length).toBe(2) // Should appear twice
    expect(screen.getByText('29/01/2022')).toBeInTheDocument()
  })

  it('renders the info sidebar with explanatory text', () => {
    render(<ConfirmacaoPage />)
    
    expect(screen.getByText(/Na CASSI, buscamos aprimorar continuamente/)).toBeInTheDocument()
    expect(screen.getByText(/acelerar o processo de análise/)).toBeInTheDocument()
  })

  it('has proper grid layout structure', () => {
    const { container } = render(<ConfirmacaoPage />)
      const gridContainer = container.querySelector('.grid')
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass('grid-cols-1')
    expect(gridContainer).toHaveClass('lg:grid-cols-3')
  })

  it('renders with MainLayout wrapper', () => {
    const { container } = render(<ConfirmacaoPage />)
    
    // MainLayout should provide the overall structure
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
