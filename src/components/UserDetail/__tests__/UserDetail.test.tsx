import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserDetail from '../UserDetail'
import type { User } from '../../../types'

describe('Testing UserDetail() Component', () => {
  it('should show selection prompt when no user is selected', () => {
    const activeUser: User = { id: 0, name: '' }
    render(<UserDetail activeUser={activeUser} />)
    expect(screen.getByText('Sélectionner un utilisateur')).toBeTruthy()
  })

  it('should display user details when a user is selected', () => {
    const activeUser: User = { id: 2, name: 'Eléonore  Labanquise' }
    render(<UserDetail activeUser={activeUser} />)
    const detailTitle = screen.getByRole('heading', { level: 3 })
    expect(detailTitle.textContent).toContain('Eléonore')
    expect(detailTitle.textContent).toContain('Labanquise')
  })
})
