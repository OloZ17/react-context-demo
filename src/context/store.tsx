import { useContext } from 'react'
import { UserContext } from './user'

export const useUserStore = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserStore must be used within a UserProvider')
  }
  return context
}
