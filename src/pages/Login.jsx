/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import medico from '../assets/images/medico.avif'
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../context/AuthProvider"
import { useFormFields } from "../hooks/useFormFields"

export const Login = () => {

    const {login,  errorsLogin, isAuth} = useAuth()
    const {changeFields, fields}  = useFormFields()
    const navigate = useNavigate()

    const sendData = (e) => {
        e.preventDefault()
        login(fields)
         // en este punto si todo salio bien entonces el estado de isAuth cambia a true
        // pero a tener en cuenta es que los cambios de estados son asincronos, es decir no cambian inmediatamente
        // para detectar el cambio usamos useEffect 
    }

    useEffect(() => {
        // la logica del efecto se ejecutara cada que isAuth cambie ahi corroboramos si es true
        // si es true lo redirigimos al home
        if(isAuth) {
            navigate('/home')
        }
    }, [isAuth])


  return (
    <Box display='flex' justifyContent='center' /* border={'solid green 3px'} */
    minH={'100vh'} alignItems={'center'}
    >
        <Box display={'flex'} boxShadow={'15px 15px 15px rgba(0,0,0,.5)'} width={{base : '100%', sm  : 'auto'}}
        h={{base : '100vh', sm : 'auto'}}
        >
            
            <Box /* border={'solid green 3px'} */ display={{base : 'none', sm : 'block'}} flex={'1 1 0'}>
                <Image src={medico}  boxSize='600px'
                    objectFit='contain'/>
                
            </Box>

            <Box  
                /* border={'solid cyan 3px'} */ flex={'1 1 0'}       
                display={'flex'} flexDirection={'column'} alignItems={'center'}
                justifyContent={'space-evenly'}
            >
                <Box  /* border={'solid orange 3px'} */>
                        <Text fontWeight={'bolder'}>logueate</Text>
                </Box>

               <Box onSubmit={sendData} as="form" noValidate  /* border={'solid blue 3px'} */ w={'80%'}  h={'70%'} 
                display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}
               >
                    <Input onChange={changeFields}  h={'30px'} 
                        w={{base : '90%', md  : '70%'}}   name="email" type="email" placeholder="email"
                    />

                    <Input onChange={changeFields} h={'30px'} w={{base : '90%', md  : '70%'}} name="password" 
                        type="text" placeholder="emapasswordl"
                    />
                    <Button type="submit" colorScheme="blue"
                        h={'35px'} w={{base : '90%', md  : '70%'}}
                      >
                        send data
                    </Button>
                    <Link to={'/'}>registrate</Link>
                    {
                        errorsLogin?.message && <Text fontSize={'xs'} color={'tomato'}>{errorsLogin.message}</Text>
                    }
               </Box>
                          
                
            </Box>

        </Box>
        
    </Box>
  )
}
