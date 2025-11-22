import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../../services'
import UserList from './UserList'
import { useUserStore } from '../../context/store'
import { selectUser } from '../../context/user'
import type { User } from '../../types'

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const { dispatch } = useUserStore()

  useEffect(() => {
    setUsers(fetchUsers())
  }, [])

  const handleSelectUser = (user: User) => {
    dispatch(selectUser(user))
  }

  return <UserList users={users} selectedUser={handleSelectUser} />
}

export default UserListContainer
