/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import { loginRegisterFetch } from "../libs/loginRegisterFetch"
import jsCookie from 'js-cookie'
import { logoutFetch } from "../libs/logoutFetch"
import { veryfyFetch } from "../libs/verifyAuthFetch"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  //autenticacion y error para el login
  const [isAuth, setIsAuth] = useState(false)  
  const [errorsLogin, setErrorsLogin] = useState({})

  //autenticacion y error para el registro
  const [isAuthRegister, setIsAuthRegister] = useState(false)
  const [errorsRegister, setErrorsRegister] = useState({})

  const [loading, setLoading] = useState(true)

  const [user, setUser] = useState({})

  const register = (fields) => {
    loginRegisterFetch(fields, "auth", setIsAuthRegister, setErrorsRegister) 
    setTimeout(() =>{
      setIsAuthRegister(false)
    }, 1000)

  }  
 
  const login = (fields) => {
    loginRegisterFetch(fields, "auth/login", setIsAuth, setErrorsLogin, setLoading, setUser)
  }

  const logout = async () => logoutFetch(setIsAuth, setUser)

  // funcion que se encarga de consultar si el usuario se ha registrado 
  // cada que se recarge la pagina
  // en cada recarga debo enviarle al servidor las cookies con mis credenciales
  // para que el servidor pueda validarlas
  const verifyAuth = async () => {
    const cookie = jsCookie.get('tokenDoctor') 
    //console.log(cookie);
      if(cookie) {
         veryfyFetch(setIsAuth, setUser, setLoading)
      }else {
        setLoading(false)
      }
  }

  
  useEffect(() => {
    verifyAuth()
  }, [])


  const data = {isAuth, isAuthRegister, errorsRegister, errorsLogin,register, login,loading, user, logout, setUser} 

  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
  )

} 


export const useAuth = () => {
    try{
        const authShare = useContext(AuthContext)
        if(!authShare) {
            throw new Error('error al obtener el contexto')
        }
        return authShare
    }catch(error){
        console.log(error.message);
        
    }
}

