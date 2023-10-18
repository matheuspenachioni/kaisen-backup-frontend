import { createContext } from 'react'
const USER = {
	id: '',
	name: ''
}
export const AUTH_CONTEXT_INITIAL_STATE = {
	user: USER,
	loading: true,
	setUser: (user: typeof USER) => {}
}

export const AuthContext = createContext(AUTH_CONTEXT_INITIAL_STATE)
