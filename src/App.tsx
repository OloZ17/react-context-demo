import React from 'react'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
import { UserProvider } from './context/user'
import './App.css'

const App: React.FC = () => {
  return (
    <UserProvider>
      <UserList />
      <UserDetail />
    </UserProvider>
  )
}

export default App
