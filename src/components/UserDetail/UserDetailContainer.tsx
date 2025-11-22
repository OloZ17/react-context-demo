import React from 'react'
import UserDetail from './UserDetail'
import { useUserStore } from '../../context/store'

const UserDetailContainer: React.FC = () => {
  const { state } = useUserStore()
  return <UserDetail activeUser={state} />
}

export default UserDetailContainer
