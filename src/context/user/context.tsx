import React, { createContext, useEffect, useReducer, useMemo, Dispatch } from 'react'
import { user } from './reducer'
import type { User, UserAction } from '../../types'

interface UserContextValue {
  state: User
  dispatch: Dispatch<UserAction>
}

export const UserContext = createContext<UserContextValue | undefined>(undefined)

const initialState: User = {
  id: 0,
  name: '',
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(user, initialState, (): User => {
    const lastState = sessionStorage.getItem('context-user')
    if (lastState) {
      try {
        return JSON.parse(lastState)
      } catch {
        return initialState
      }
    }
    return initialState
  })

  useEffect(() => {
    sessionStorage.setItem('context-user', JSON.stringify(state))
  }, [state])

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
