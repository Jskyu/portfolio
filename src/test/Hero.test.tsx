import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'
import { portfolio } from '../data/portfolio'

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText(portfolio.name)).toBeInTheDocument()
  })

  it('renders GitHub link with correct href', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', portfolio.github)
  })

  it('renders email link', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /이메일/i })
    expect(link).toHaveAttribute('href', `mailto:${portfolio.email}`)
  })
})
