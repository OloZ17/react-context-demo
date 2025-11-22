import React from 'react'
import type { User } from '../../types'

interface UserDetailProps {
  activeUser: User
}

const UserDetail: React.FC<UserDetailProps> = ({ activeUser }) => {
  if (activeUser.id === 0) {
    return <div>Sélectionner un utilisateur </div>
  }

  return (
    <div>
      <h3>Détail de {activeUser.name}</h3>
      <ul>
        <li>Id : {activeUser.id}</li>
      </ul>
    </div>
  )
}

export default UserDetail