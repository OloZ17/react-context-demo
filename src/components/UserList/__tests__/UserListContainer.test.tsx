import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import UserListContainer from '../UserListContainer'
import { UserProvider } from '../../../context/user'

describe('UserListContainer', () => {
  it('should render user list and handle user selection', () => {
    render(
      <UserProvider>
        <UserListContainer />
      </UserProvider>
    )

    const list = screen.getByRole('list')
    expect(list).toBeTruthy()

    // Click on a user to trigger handleSelectUser
    const userItem = screen.getByText('Sarah Croche')
    fireEvent.click(userItem)
  })
})
