import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '../components/Education'

describe('Education', () => {
  it('renders section heading', () => {
    render(<Education />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders university name', () => {
    render(<Education />)
    expect(screen.getByText('목원대학교')).toBeInTheDocument()
  })

  it('renders major', () => {
    render(<Education />)
    expect(screen.getByText('IT융합전자공학과')).toBeInTheDocument()
  })
})
