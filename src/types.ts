export interface User {
  id: number
  name: string
}

export interface UserState {
  selectedUser: User
}

export type UserAction =
  | { type: 'SELECT_USER'; payload: User }
  | { type: 'RESET_USER' }
