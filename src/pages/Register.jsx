/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useFormFields } from "../hooks/useFormFields"


export const Register = () => {

    const { register, errorsRegister, isAuthRegister} = useAuth()
    const {changeFields, fields}  = useFormFields()
    const navigate = useNavigate()

    const sendData = (e) => {
        e.preventDefault()
        register(fields) 
       // en este punto si todo salio bien entonces el estado de isAuth cambia a true
        // pero a tener en cuenta es que los cambios de estados son asincronos, es decir no cambian inmediatamente
        // para detectar el cambio usamos useEffect 
    }

    
    useEffect(() => {
        // la logica del efecto se ejecutara cada que isAuth cambie ahi corroboramos si es true
        // si es true lo redirigimos al home
        if(isAuthRegister) {
            navigate('/login')
        }
    }, [isAuthRegister])


  return (
    <>
      <Box display='flex' justifyContent='center' border={'solid green 3px'}
      minH={'100vh'} alignItems={'center'}
      >
          <Box display={'flex'}  border={'solid red 4px'} width={{base : '100%', sm  : '350px'}}
          h={{base : '100vh', sm : '750px'}}
          >

            <Box  
                  border={'solid cyan 3px'} flex={'1 1 0'}       
                  display={'flex'} flexDirection={'column'} alignItems={'center'}
                  justifyContent={'space-evenly'}
              >
                  <Box  border={'solid orange 3px'}>
                          <Text>registrate</Text>
                  </Box>

                <Box  onSubmit={sendData} as="form" noValidate  border={'solid blue 3px'} w={'80%'}  h={'70%'} 
                  display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}
                >
                      <Input onChange={changeFields}  
                      h={'30px'} w={{base : '90%', md  : '70%'}}   name="email" type="email" placeholder="email"/>
                      {
                        errorsRegister?.email && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.email}</Text>
                      }
                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="password" type="text" placeholder="password"/>
                      
                      {
                        errorsRegister?.password && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.password}</Text>
                      }

                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="cedula" type="number" placeholder="cedula"/>
                      
                      {
                        errorsRegister?.cedula && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.cedula}</Text>
                      }

                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="lastName" type="text" placeholder="lastName"/>

                      {
                        errorsRegister?.lastName && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.lastName}</Text>
                      }

                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} 
                      name="name" type="text" placeholder="name"
                      />

                      {
                        errorsRegister?.name && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.name}</Text>
                      }
                      
                      <Button type="submit" colorScheme="blue"
                        h={'35px'} w={{base : '90%', md  : '70%'}}
                      >
                        send data
                      </Button>
                      <Link to={'/login'}>login</Link>
                      {
                        errorsRegister?.message && <Text fontSize={'xs'} color={'tomato'}>{errorsRegister.message}</Text>
                      }
                </Box>
                   
                  
            </Box>

          </Box>
          
      </Box>
    </>
  )
}
