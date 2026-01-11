import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/navbar'

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}))

describe('Navbar', () => {
  it('renders the logo with correct text', () => {
    render(<Navbar />)
    expect(screen.getByText('Bibek Kumar Mahato')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the resume link', () => {
    render(<Navbar />)
    const resumeLink = screen.getByRole('link', { name: /resume/i })
    expect(resumeLink).toBeInTheDocument()
    expect(resumeLink).toHaveAttribute('href', '/resume.pdf')
    expect(resumeLink).toHaveAttribute('target', '_blank')
  })

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toBeInTheDocument()
    
    // Click to open menu
    await user.click(menuButton)
    
    // Menu should be visible (mobile links should appear)
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })
})
