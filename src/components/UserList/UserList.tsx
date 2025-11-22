import React from 'react'
import type { User } from '../../types'

interface UserListProps {
  users: User[]
  selectedUser: (user: User) => void
}

const UserList: React.FC<UserListProps> = ({ users, selectedUser }) => {
  return (
    <div>
      <ul className="col-md-4">
        {users.map((user) => (
          <li
            className="list-group-item"
            key={user.id}
            onClick={() => selectedUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList