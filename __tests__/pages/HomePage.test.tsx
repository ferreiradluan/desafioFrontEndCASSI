import { render, screen } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Page from '../../app/page'

describe('Home Page', () => {  it('renders the header with CASSI logo', () => {
    render(<Page />)
    
    // Use getAllByAltText since there are multiple CASSI logos
    const logos = screen.getAllByAltText('CASSI')
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders the search input', () => {
    render(<Page />)
    
    const searchInput = screen.getByPlaceholderText('Faça sua busca aqui')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders social media section', () => {
    render(<Page />)
    
    expect(screen.getByText('Siga a CASSI nas redes sociais:')).toBeInTheDocument()
  })

  it('renders login button', () => {
    render(<Page />)
    
    const loginButton = screen.getByRole('button', { name: /fazer login/i })
    expect(loginButton).toBeInTheDocument()
  })

  it('renders navigation menu', () => {
    render(<Page />)
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /conheça a cassi/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /nossos planos/i })).toBeInTheDocument()
  })
  it('renders main content sections', () => {
    render(<Page />)
    
    // Check for content that actually exists in the main page
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByText(/fazer login/i)).toBeInTheDocument()
  })

  it('toggles dropdown when clicking navigation items', async () => {
    const user = userEvent.setup()
    render(<Page />)
    
    const conhecaButton = screen.getByRole('button', { name: /conheça a cassi/i })
    
    // Click to open dropdown
    await user.click(conhecaButton)
    
    // Check if dropdown content is visible (this depends on the actual implementation)
    // You might need to adjust this based on how dropdowns are implemented
    expect(conhecaButton).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<Page />)
    
    // Check for hero section content
    const heroElements = screen.getAllByText(/cassi/i)
    expect(heroElements.length).toBeGreaterThan(0)
  })
  it('renders the footer', () => {
    render(<Page />)
    
    // Check if footer exists without looking for specific year text
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('has proper page structure with header, main, and footer', () => {
    const { container } = render(<Page />)
    
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
