import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../components/Hero'
import { portfolio } from '../data/portfolio'

describe('Hero', () => {
  it('renders tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/데이터를 모르면/)).toBeInTheDocument()
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

  it('renders all stats', () => {
    render(<Hero />)
    portfolio.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })
})
