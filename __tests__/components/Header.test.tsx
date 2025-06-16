import { render, screen } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Header from '../../components/ui/Header'

describe('Header Component', () => {
  it('renders the CASSI logo', () => {
    render(<Header />)
    
    const logo = screen.getByAltText('CASSI')
    expect(logo).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Header />)
    
    const searchInput = screen.getByPlaceholderText('Faça sua busca aqui')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Header />)
    
    const socialText = screen.getByText('Siga a CASSI nas redes sociais:')
    expect(socialText).toBeInTheDocument()
  })

  it('renders user section with Lorem Ipsum', () => {
    render(<Header />)
    
    const userText = screen.getByText('Lorem Ipsum')
    expect(userText).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Header />)
    
    const loginButton = screen.getByRole('button', { name: /fazer login/i })
    expect(loginButton).toBeInTheDocument()
  })

  it('renders navigation menu', () => {
    render(<Header />)
    
    const homeLink = screen.getByRole('link', { name: /home/i })
    const conhecaButton = screen.getByRole('button', { name: /conheça a cassi/i })
    const planosButton = screen.getByRole('button', { name: /nossos planos/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(conhecaButton).toBeInTheDocument()
    expect(planosButton).toBeInTheDocument()
  })
  it('toggles dropdown when clicking on navigation items', async () => {
    const user = userEvent.setup()
    
    render(<Header />)
    
    const conhecaButton = screen.getByRole('button', { name: /conheça a cassi/i })
    
    // Click to open dropdown
    await user.click(conhecaButton)
    
    // Check if dropdown items are visible
    const institucionalLink = screen.getByRole('link', { name: /institucional/i })
    expect(institucionalLink).toBeInTheDocument()
  })
})
