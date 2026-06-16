import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '../components/Contact'
import { portfolio } from '../data/portfolio'

describe('Contact', () => {
  it('renders section label', () => {
    render(<Contact />)
    expect(screen.getByText(/CONTACT/)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<Contact />)
    expect(screen.getByText(portfolio.email)).toBeInTheDocument()
  })

  it('renders GitHub link with correct href', () => {
    render(<Contact />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', portfolio.github)
  })
})
