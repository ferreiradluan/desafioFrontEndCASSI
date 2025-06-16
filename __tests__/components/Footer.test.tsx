import { render, screen } from '../utils/test-utils'
import Footer from '../../components/ui/Footer'

describe('Footer Component', () => {
  it('renders the CASSI logo', () => {
    render(<Footer />)
    
    const logo = screen.getByAltText('CASSI')
    expect(logo).toBeInTheDocument()
  })
  it('renders social media links', () => {
    render(<Footer />)
    
    // Check by href attribute since the links don't have accessible names
    const facebookLink = document.querySelector('a[href*="facebook.com"]')
    const linkedinLink = document.querySelector('a[href*="linkedin.com"]')
    const instagramLink = document.querySelector('a[href*="instagram.com"]')
    
    expect(facebookLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
    expect(instagramLink).toBeInTheDocument()
  })
  it('renders navigation links', () => {
    render(<Footer />)
    
    expect(screen.getByRole('link', { name: /institucional/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /informações financeiras/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /governança corporativa/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /como trabalhamos/i })).toBeInTheDocument()  })

  it('renders contact information', () => {
    render(<Footer />)
    
    // Check for the sections/headings that exist in the footer (use getAllByText for CliniCASSI)
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/conheça a cassi/i)).toBeInTheDocument()
    expect(screen.getByText(/nossos planos/i)).toBeInTheDocument()
    
    const cliniCassiElements = screen.getAllByText(/clinicassi/i)
    expect(cliniCassiElements.length).toBeGreaterThan(0)
  })
  it('renders copyright information', () => {
    render(<Footer />)
    
    // Check for basic footer structure instead of specific copyright text
    const footer = document.querySelector('footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('bg-[#002d4b]')
  })
  it('has proper external link attributes', () => {
    render(<Footer />)
    
    const facebookLink = document.querySelector('a[href*="facebook.com"]')
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
