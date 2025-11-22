import { SELECT_USER, RESET_USER } from './constants'
import type { User, UserAction } from '../../types'

const initialState: User = {
  id: 0,
  name: '',
}

export const user = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case SELECT_USER:
      return action.payload
    case RESET_USER:
      return initialState
    default:
      return state
  }
}
