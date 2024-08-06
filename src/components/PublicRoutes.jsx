import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export const PublicRoutes = () => {

  const {isAuth} = useAuth()
  console.log(isAuth);

  if(isAuth) return <Navigate to={'/home'}/>
  

  return (
    <div>
        <Outlet/>
    </div>
  )


}
