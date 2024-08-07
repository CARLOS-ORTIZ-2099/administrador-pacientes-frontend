/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthProvider"

export const Navbar = () => {

  const [openNavbar, setOpenNavbar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  
  const {logout, user} = useAuth()  
    
  const changeShowModal = () => {
    console.log('cambiando'); 
    setOpenNavbar(!openNavbar)
  }

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
     windowWidth >= 768 && setOpenNavbar(false) 
   }, [windowWidth]);

  return (
    <Box as="nav" /* border={'solid blue 2px'} */ display={'flex'} minH={'10vh'}
        alignItems={'center'} justifyContent={'end'} bg={'#233d4d'}
        position={{base : openNavbar && 'fixed', md  : 'static' } }
        top={'0'} w={'100%'} zIndex={'999'}
    >
        <Box /* border={'solid violet 2px'} */ p={'7px'} as="span" display={{base :'block', md : 'none'}} marginRight={'20px'}
        cursor={'pointer'}
        >
            <FontAwesomeIcon icon={faBars} size="2xl" 
                onClick={changeShowModal}
            />
        </Box>

        <Box textAlign={'center'} display={{base :'none', md : 'block'}} as="span" w={'10%'}  /* border={'solid red 2px'} */>
            <Avatar  /* border={'solid orange 1px'} */ size={'lg'} 
                name={`${user.name + ' '+ user.lastName}`}
                src={`http://localhost:5000/image/${user.file}`}
            >
            </Avatar>
        </Box>
        
        <Box as="ul"  /* border={'solid green 3px'} */  
            display={{base : openNavbar ? 'flex' : 'none' , md : 'flex'}}
            position={{base : openNavbar && 'fixed', md  : 'static' } } 
            top={openNavbar && '10vh'}
            justifyContent={'space-around'} alignItems={'center'}
            listStyleType={'none'}
            w={{ md : '90%'}}
            h={{base : '100%'}}
            left={0}
            right={0}
            zIndex={'999'}
            bg={{base : 'rgba(0,0,0,0.7)', md : 'none'}}
            color={'aliceblue'}
            flexDirection={{base : openNavbar ? 'column' : 'auto' , md : 'flex'}}
            
        >
            <Box as="li">
                <Link to={'/home'}>home</Link>
            </Box> 
            <Box as="li">
                <Link to={'/create/patient'}>crear paciente</Link> 
            </Box>
            <Box as="li">
                <Link to={'/colleagues'}>colegas</Link>
            </Box>
            <Box as="li">
                <Text onClick={logout} cursor={'pointer'} >cerrar sesion</Text> 
            </Box>
            <Box as="li">
                <Link to={'/profile-doctor/edit/'+user._id}>editar perfil</Link>
            </Box>
        
        </Box>

    </Box>
  )
}
