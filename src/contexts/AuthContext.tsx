import { createContext } from 'react'

interface IUser {
  id: string
  name: string
}

interface IAuthContextState {
  user: IUser
  loading: boolean
  setUser: (user: IUser) => void
}

export const AUTH_CONTEXT_INITIAL_STATE: IAuthContextState = {
  user: { id: '', name: '' },
  loading: true,
  setUser: () => {}
}

export const AuthContext = createContext(AUTH_CONTEXT_INITIAL_STATE)
