import { SELECT_USER, RESET_USER } from './constants';

const initialState = {
  id: 0,
  name: '',
};

export const user = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_USER:
      return payload;
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};
