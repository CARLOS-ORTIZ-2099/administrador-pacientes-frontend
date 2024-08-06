import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useEditForm } from "../hooks/useEditForm"
import { useDoctor } from "../context/DoctorProvider"


export const EditDoctor = () => { 

  const {updateDoctor}  = useDoctor()
  const {fieldsActive, handlerFieldsActive} = useEditForm()

  function sendData  (e) { 
    e.preventDefault() 
    updateDoctor(fieldsActive) 
  }

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
                          <Text>editar doctor</Text>
                  </Box>
 
                <Box  onSubmit={sendData} as="form" noValidate  border={'solid blue 3px'} w={'80%'}  h={'70%'} 
                  display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}
                >
                      <Input onChange={handlerFieldsActive}  
                      h={'30px'} w={{base : '90%', md  : '70%'}}   name="email" type="email" placeholder="email"/>
                      {
                        //errors?.email && <Text fontSize={'xs'} color={'tomato'}>{errors.email}</Text>
                      }

                     <Input onChange={handlerFieldsActive}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="password" type="text" placeholder="password"
                      />
                      
                      {
                        /* errors?.password && <Text fontSize={'xs'} color={'tomato'}>{errors.password}</Text> */
                      }
   

                      <Input onChange={handlerFieldsActive}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="lastName" type="text" placeholder="lastName"/>

                      {
                        //errors?.lastName && <Text fontSize={'xs'} color={'tomato'}>{errors.lastName}</Text>
                      }

                      <Input onChange={handlerFieldsActive}
                      h={'30px'} w={{base : '90%', md  : '70%'}} 
                      name="name" type="text" placeholder="name"
                      />

                      {
                        //errors?.name && <Text fontSize={'xs'} color={'tomato'}>{errors.name}</Text>
                      }


                      <Input onChange={handlerFieldsActive} type="file" w={{base : '90%', md  : '70%'}} 
                        name="file"
                      />
                  

                      <Button type="submit" colorScheme="blue"
                        h={'35px'} w={{base : '90%', md  : '70%'}}
                        
                      >
                        send data
                      </Button>
                </Box>
                   
                  
            </Box>

          </Box>
          
    </Box>
    </>
  )
}
