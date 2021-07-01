import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../services';
import UserList from './UserList';
import { useUserStore } from '../../context/store';
import { selectUser } from '../../context/user';

const UserListContainer = () => {
  const [users, setUsers] = useState([]);
  const [, dispatch] = useUserStore();
  useEffect(() => {
    setUsers(fetchUsers());
  }, []);
  const selectedUser = (user) => dispatch(selectUser(user));

  return <UserList users={users} selectedUser={selectedUser} />;
};

export default UserListContainer;
