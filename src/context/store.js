import { useContext } from 'react';

import { UserContext } from './user';

export const useUserStore = () => useContext(UserContext);
