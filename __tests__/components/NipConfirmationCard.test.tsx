import { render, screen } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import NipConfirmationCard from '../../components/ui/NipConfirmationCard'

const mockNipData = {
  beneficiario: 'João Silva',
  interlocutor: 'Maria Santos',
  dataAbertura: '01/01/2024'
}

describe('NipConfirmationCard Component', () => {
  it('renders the title and NIP data', () => {
    render(
      <NipConfirmationCard 
        title="Confirmação de NIP"
        data={mockNipData}
      />
    )
    
    expect(screen.getByText('Confirmação de NIP')).toBeInTheDocument()
    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('01/01/2024')).toBeInTheDocument()
  })

  it('renders confirmation message when showConfirmation is true', () => {
    render(
      <NipConfirmationCard 
        data={mockNipData}
        showConfirmation={true}
        confirmationMessage="Dados confirmados com sucesso!"
      />
    )
    
    expect(screen.getByText('Dados confirmados com sucesso!')).toBeInTheDocument()
  })

  it('does not render confirmation message by default', () => {
    render(
      <NipConfirmationCard 
        data={mockNipData}
        confirmationMessage="Dados confirmados com sucesso!"
      />
    )
    
    expect(screen.queryByText('Dados confirmados com sucesso!')).not.toBeInTheDocument()
  })

  it('renders question buttons when showQuestionButtons is true', () => {
    render(
      <NipConfirmationCard 
        data={mockNipData}
        showQuestionButtons={true}
        questionText="Os dados estão corretos?"
      />
    )
    
    expect(screen.getByText('Os dados estão corretos?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sim/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /não/i })).toBeInTheDocument()
  })

  it('calls onYes callback when Yes button is clicked', async () => {
    const user = userEvent.setup()
    const onYesMock = jest.fn()
    
    render(
      <NipConfirmationCard 
        data={mockNipData}
        showQuestionButtons={true}
        questionText="Os dados estão corretos?"
        onYes={onYesMock}
      />
    )
    
    const yesButton = screen.getByRole('button', { name: /sim/i })
    await user.click(yesButton)
    
    expect(onYesMock).toHaveBeenCalledTimes(1)
  })

  it('calls onNo callback when No button is clicked', async () => {
    const user = userEvent.setup()
    const onNoMock = jest.fn()
    
    render(
      <NipConfirmationCard 
        data={mockNipData}
        showQuestionButtons={true}
        questionText="Os dados estão corretos?"
        onNo={onNoMock}
      />
    )
    
    const noButton = screen.getByRole('button', { name: /não/i })
    await user.click(noButton)
    
    expect(onNoMock).toHaveBeenCalledTimes(1)
  })

  it('renders interlocutor question when showInterlocutorQuestion is true', () => {
    render(
      <NipConfirmationCard 
        data={mockNipData}
        showInterlocutorQuestion={true}
        interlocutorQuestionText="Você é o interlocutor?"
      />
    )
    
    expect(screen.getByText('Você é o interlocutor?')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <NipConfirmationCard 
        data={mockNipData}
        className="custom-class"
      />
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
