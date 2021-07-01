import { SELECT_USER, RESET_USER } from './constants';

export const selectUser = (payload) => ({
  type: SELECT_USER,
  payload,
});

export const resetUser = () => ({
  type: RESET_USER,
});
