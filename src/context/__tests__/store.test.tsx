import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useUserStore } from '../store'

describe('useUserStore', () => {
  it('should throw error when used outside of UserProvider', () => {
    expect(() => {
      renderHook(() => useUserStore())
    }).toThrow('useUserStore must be used within a UserProvider')
  })
})
