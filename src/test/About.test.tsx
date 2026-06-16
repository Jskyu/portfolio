import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../components/About'
import { portfolio } from '../data/portfolio'

describe('About', () => {
  it('renders section label', () => {
    render(<About />)
    expect(screen.getByText(/ABOUT/)).toBeInTheDocument()
  })

  it('renders all expertise titles', () => {
    render(<About />)
    portfolio.expertise.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('renders about paragraphs', () => {
    render(<About />)
    expect(screen.getByText(portfolio.about[0])).toBeInTheDocument()
  })
})
