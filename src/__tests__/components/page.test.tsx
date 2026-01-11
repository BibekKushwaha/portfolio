import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock all the heavy components to speed up tests
vi.mock('@/components/hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>,
}))

vi.mock('@/components/tech_stack', () => ({
  default: () => <div data-testid="tech-stack">TechStack Component</div>,
}))

vi.mock('@/components/skill', () => ({
  default: () => <div data-testid="skills">Skills Component</div>,
}))

vi.mock('@/components/project', () => ({
  default: () => <div data-testid="projects">Projects Component</div>,
}))

vi.mock('@/components/experience', () => ({
  default: () => <div data-testid="experience">Experience Component</div>,
}))

vi.mock('@/components/ContactSection', () => ({
  default: () => <div data-testid="contact">Contact Component</div>,
}))

describe('HomePage', () => {
  it('renders all main sections', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('tech-stack')).toBeInTheDocument()
    expect(screen.getByTestId('skills')).toBeInTheDocument()
    expect(screen.getByTestId('projects')).toBeInTheDocument()
    expect(screen.getByTestId('experience')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    const { container } = render(<HomePage />)
    
    const sections = container.querySelectorAll('[data-testid]')
    const sectionIds = Array.from(sections).map(s => s.getAttribute('data-testid'))
    
    expect(sectionIds).toEqual([
      'hero',
      'tech-stack',
      'skills',
      'projects',
      'experience',
      'contact',
    ])
  })
})
