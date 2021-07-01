import * as Actions from '../actions';
import * as Constants from '../constants';
import { user } from '../reducer';

describe('user', () => {
  describe('Actions', () => {
    it('should selectUser action return right type and payload', () => {
      const payload = { name: 'Sarah Croche', id: 1 };
      const expectedAction = {
        type: Constants.SELECT_USER,
        payload: payload,
      };
      expect(Actions.selectUser(payload)).toEqual(expectedAction);
    });

    it('should resetUser action return right type and payload', () => {
      const expectedAction = {
        type: Constants.RESET_USER,
      };
      expect(Actions.resetUser()).toEqual(expectedAction);
    });
  });

  describe('Reducer', () => {
    const initialState = {
      id: 0,
      name: '',
    };
    it('should default case return the initial state', () => {
      expect(user()).toEqual(initialState);
    });

    it('should SELECT_USER return the right state', () => {
      expect(
        user(undefined, Actions.selectUser({ name: 'Sarah Croche', id: 1 }))
      ).toEqual({
        name: 'Sarah Croche',
        id: 1,
      });
    });

    it('should RESET_USER return the right state', () => {
      const state = {
        id: 1,
        name: 'Sarah Croche',
      };
      expect(user(state, Actions.resetUser())).toEqual(initialState);
    });
  });
});
