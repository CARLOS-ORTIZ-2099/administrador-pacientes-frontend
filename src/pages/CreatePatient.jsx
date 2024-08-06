import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react"
import { usePatients } from "../context/PatientsProvider"
import { useFormFields } from "../hooks/useFormFields"


export const CreatePatient = () => { 

    const {createPatient, errors} = usePatients()
    const {fields, changeFields} = useFormFields()
    
    const sendData = (e) => { 
        e.preventDefault()
        createPatient(fields) 
    }
    

  return (
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
                          <Text>crear paciente</Text>
                  </Box>

                <Box  onSubmit={sendData} as="form" noValidate  border={'solid blue 3px'} w={'80%'}  h={'70%'} 
                  display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'}
                >
                      <Input onChange={changeFields}  
                      h={'30px'} w={{base : '90%', md  : '70%'}}   name="email" type="email" placeholder="email"/>
                      {
                        errors?.email && <Text fontSize={'xs'} color={'tomato'}>{errors.email}</Text>
                      }
   
                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="cedula" type="number" placeholder="cedula"/>
                      
                      {
                        errors?.cedula && <Text fontSize={'xs'} color={'tomato'}>{errors.cedula}</Text>
                      }

                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} name="lastName" type="text" placeholder="lastName"/>

                      {
                        errors?.lastName && <Text fontSize={'xs'} color={'tomato'}>{errors.lastName}</Text>
                      }

                      <Input onChange={changeFields}
                      h={'30px'} w={{base : '90%', md  : '70%'}} 
                      name="name" type="text" placeholder="name"
                      />

                      {
                        errors?.name && <Text fontSize={'xs'} color={'tomato'}>{errors.name}</Text>
                      }
                      <Textarea  onChange={changeFields} w={{base : '90%', md  : '70%'}} 
                        placeholder="symptoms" name="symptoms"
                      >
                      </Textarea>

                      {
                        errors?.symptoms
                        && <Text fontSize={'xs'} color={'tomato'}>{errors.symptoms}</Text>
                      }

                      <Button type="submit" colorScheme="blue"
                        h={'35px'} w={{base : '90%', md  : '70%'}}
                        
                      >
                        send data
                      </Button>
                </Box>
                   
                  
            </Box>

          </Box>
          
    </Box>
  )
}
