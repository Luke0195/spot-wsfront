import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const storagedUser = JSON.parse(localStorage.getItem('aircnc@user') as any)
  return storagedUser !== null ? <Outlet /> : <Navigate to="/" replace />
}
