import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Career from '../components/Career'
import { portfolio } from '../data/portfolio'

describe('Career', () => {
  it('renders section heading', () => {
    render(<Career />)
    expect(screen.getByText('이력')).toBeInTheDocument()
  })

  it('renders all company names', () => {
    render(<Career />)
    portfolio.career.forEach((entry) => {
      expect(screen.getByText(entry.company)).toBeInTheDocument()
    })
  })

  it('renders education in career section', () => {
    render(<Career />)
    expect(screen.getByText('목원대학교')).toBeInTheDocument()
    expect(screen.getByText('IT융합전자공학과')).toBeInTheDocument()
  })

  it('toggles project list on button click', () => {
    render(<Career />)
    const toggleBtn = screen.getByRole('button', { name: /프로젝트 9개/i })
    fireEvent.click(toggleBtn)
    expect(screen.getByText('제주대학교병원 홈페이지 구축')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /접기/i }))
    expect(screen.queryByText('제주대학교병원 홈페이지 구축')).not.toBeInTheDocument()
  })
})
