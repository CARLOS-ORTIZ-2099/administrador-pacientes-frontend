/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthProvider";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const ProtectedRoutes = () => {

    const {isAuth, loading} = useAuth()
    //console.log(isAuth, loading);
 /*    const navigate = useNavigate()
    useEffect(() => {
        console.log('ee');
        
       if(!isAuth) navigate('/')

    }, [isAuth, loading]) */
  
    
    if(!isAuth && loading) return <h1>cargando</h1>
    else if(!isAuth) return <Navigate to='/'/>

  return (
    <Box>
        <Navbar/>
        <Outlet/>
    </Box>
  )
}
