import { SELECT_USER, RESET_USER } from './constants'
import type { User, UserAction } from '../../types'

export const selectUser = (payload: User): UserAction => ({
  type: SELECT_USER,
  payload,
})

export const resetUser = (): UserAction => ({
  type: RESET_USER,
})
