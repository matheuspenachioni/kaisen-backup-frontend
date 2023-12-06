import { useEffect, useState } from 'react'
import { AuthContext, AUTH_CONTEXT_INITIAL_STATE } from './AuthContext'
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState(AUTH_CONTEXT_INITIAL_STATE.user)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setContext({ id: 'sdfasd', name: 'fasdf' })
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <AuthContext.Provider value={{ user: { ...context }, setUser: setContext, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
