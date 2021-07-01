import React from 'react';
import UserDetail from './UserDetail';
import { useUserStore } from '../../context/store';

const UserDetailContainer = () => {
  const [selectedUser] = useUserStore();
  return <UserDetail activeUser={selectedUser} />;
};

export default UserDetailContainer;
