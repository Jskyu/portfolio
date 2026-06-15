import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../components/About'
import { portfolio } from '../data/portfolio'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<About />)
    portfolio.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })

  it('renders about paragraphs', () => {
    render(<About />)
    expect(screen.getByText(portfolio.about[0])).toBeInTheDocument()
  })
})
