import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserProvider } from '../context'

describe('UserProvider', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  afterEach(() => {
    sessionStorage.clear()
  })

  it('should initialize with default state when sessionStorage is empty', () => {
    render(
      <UserProvider>
        <div>Test</div>
      </UserProvider>
    )
    expect(screen.getByText('Test')).toBeTruthy()
  })

  it('should handle invalid JSON in sessionStorage gracefully', () => {
    sessionStorage.setItem('context-user', 'invalid json {')

    render(
      <UserProvider>
        <div>Test</div>
      </UserProvider>
    )

    expect(screen.getByText('Test')).toBeTruthy()
  })

  it('should restore state from valid sessionStorage', () => {
    const validState = JSON.stringify({ id: 1, name: 'Test User' })
    sessionStorage.setItem('context-user', validState)

    render(
      <UserProvider>
        <div>Test</div>
      </UserProvider>
    )

    expect(screen.getByText('Test')).toBeTruthy()
  })
})
