import React, { createContext, useEffect, useReducer } from 'react';
import { user } from './reducer';
import { node } from 'prop-types';

export const UserContext = createContext();

const initialState = {
  selectedUser: { id: 0, name: '' },
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user, initialState, () => {
    const lastState = sessionStorage.getItem('context-user');
    return lastState ? JSON.parse(sessionStorage.getItem('context-user')) : {};
  });
  useEffect(() => {
    sessionStorage.setItem('context-user', JSON.stringify(state));
  });
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: node,
};
