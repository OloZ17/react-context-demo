import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('Testing App() Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
})
