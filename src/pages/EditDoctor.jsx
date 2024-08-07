import { Box, Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useEditForm } from "../hooks/useEditForm"
import { useDoctor } from "../context/DoctorProvider"


export const EditDoctor = () => { 

  const {updateDoctor, errors}  = useDoctor()
  const {fieldsActive, handlerFieldsActive} = useEditForm()

  const sendData = async (e) => { 
    e.preventDefault() 
    try{
     const data = await updateDoctor(fieldsActive)
     if(data) {
      e.target.reset()
      alert('se edito el perfil')
     }
    }catch(error){
      console.log(error);
      
    }
   
  }

  return (
    <>
        <Container  mt={'4rem'}>
          <Text>crear paciente</Text>
          <Box onSubmit={sendData} as="form" noValidate>
                <FormControl>
                    <FormLabel>name</FormLabel>
                    <Input type="text" placeholder='name' name="name"
                        onChange={handlerFieldsActive}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input type="text" placeholder='Last name' name="lastName" 
                        onChange={handlerFieldsActive}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>email</FormLabel>
                    <Input type="email" placeholder='email' name="email"
                        onChange={handlerFieldsActive}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>password</FormLabel>
                    <Input type="email" placeholder='password' name="password"
                        onChange={handlerFieldsActive}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>file</FormLabel>
                    <Input type="file" placeholder='file' name="file"
                        onChange={handlerFieldsActive}
                    />
                </FormControl>


                {
                  errors.message && <Text fontSize={'xs'} color={'tomato'}>{errors.message}</Text>
                }
                <Button display={'block'} type="submit" colorScheme="blue"  m={'2rem auto'}
                      h={'35px'} w={{base : '90%', md  : '50%'}}    
                      >
                        send data
                </Button>

          </Box>
          
        </Container>
    </>
  )
}
