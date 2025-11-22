import { describe, it, expect, vi } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import UserList from '../UserList'
import type { User } from '../../../types'

describe('Testing UserList() Component', () => {
  const users: User[] = [
    { name: 'Sarah Croche', id: 1 },
    { name: 'Eléonore  Labanquise', id: 2 },
    { name: 'Emma Karena', id: 3 },
    { name: 'Jean Bonnot', id: 4 },
  ]

  it('should render all items', () => {
    const selectedUser = vi.fn()
    render(<UserList users={users} selectedUser={selectedUser} />)
    const list = screen.getByRole('list')
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')
    expect(items.length).toBe(4)
  })

  it('should call selectedUser when clicking on a user', () => {
    const selectedUser = vi.fn()
    render(<UserList users={users} selectedUser={selectedUser} />)
    const toClick = screen.getByText('Sarah Croche')
    fireEvent.click(toClick)
    expect(selectedUser).toHaveBeenCalled()
  })
})
