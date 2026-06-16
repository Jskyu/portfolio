import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from '../components/Skills'
import { portfolio } from '../data/portfolio'

describe('Skills', () => {
  it('renders section label', () => {
    render(<Skills />)
    expect(screen.getByText(/TECH STACK/)).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    portfolio.skills.forEach((cat) => {
      expect(screen.getByText(cat.category)).toBeInTheDocument()
    })
  })

  it('renders Java badge', () => {
    render(<Skills />)
    expect(screen.getByText('Java')).toBeInTheDocument()
  })
})
