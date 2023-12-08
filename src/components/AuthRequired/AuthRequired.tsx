import { useAuth } from '@hooks/useAuth'
import { Navigate } from 'react-router-dom'
export function AuthRequired({ children }: { children: () => React.ReactNode }) {
  const { user, loading } = useAuth()
  console.log(user)

  if (loading) {
    return <div> Loading ...</div>
  }

  if (!user.id) {
    return <Navigate to="/login" replace />
  }

  return <>{children()}</>
}
