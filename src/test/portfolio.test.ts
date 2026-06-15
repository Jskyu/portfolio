import { describe, it, expect } from 'vitest'
import { portfolio } from '../data/portfolio'

describe('portfolio data', () => {
  it('has required contact fields', () => {
    expect(portfolio.name).toBe('정성규')
    expect(portfolio.email).toBe('hisunggyu@gmail.com')
    expect(portfolio.github).toBe('https://github.com/Jskyu')
  })

  it('has 5 skill categories', () => {
    expect(portfolio.skills).toHaveLength(5)
  })

  it('has 3 career entries', () => {
    expect(portfolio.career).toHaveLength(3)
  })

  it('every career entry has required fields', () => {
    portfolio.career.forEach((entry) => {
      expect(entry.company).toBeTruthy()
      expect(entry.period).toBeTruthy()
      expect(entry.role).toBeTruthy()
    })
  })
})
