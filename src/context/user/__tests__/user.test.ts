import { describe, it, expect } from 'vitest'
import * as Actions from '../actions'
import * as Constants from '../constants'
import { user } from '../reducer'
import type { User } from '../../../types'

describe('user', () => {
  describe('Actions', () => {
    it('should selectUser action return right type and payload', () => {
      const payload: User = { name: 'Sarah Croche', id: 1 }
      const expectedAction = {
        type: Constants.SELECT_USER,
        payload: payload,
      }
      expect(Actions.selectUser(payload)).toEqual(expectedAction)
    })

    it('should resetUser action return right type and payload', () => {
      const expectedAction = {
        type: Constants.RESET_USER,
      }
      expect(Actions.resetUser()).toEqual(expectedAction)
    })
  })

  describe('Reducer', () => {
    const initialState: User = {
      id: 0,
      name: '',
    }

    it('should SELECT_USER return the right state', () => {
      expect(
        user(initialState, Actions.selectUser({ name: 'Sarah Croche', id: 1 }))
      ).toEqual({
        name: 'Sarah Croche',
        id: 1,
      })
    })

    it('should RESET_USER return the right state', () => {
      const state: User = {
        id: 1,
        name: 'Sarah Croche',
      }
      expect(user(state, Actions.resetUser())).toEqual(initialState)
    })

    it('should return current state for unknown action type', () => {
      const state: User = {
        id: 1,
        name: 'Sarah Croche',
      }
      // @ts-expect-error - testing default case with unknown action
      expect(user(state, { type: 'UNKNOWN_ACTION' })).toEqual(state)
    })
  })
})
