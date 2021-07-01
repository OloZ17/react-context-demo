import React from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { UserProvider } from './context/store';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <UserList />
      <UserDetail />
    </UserProvider>
  );
};

export default App;
