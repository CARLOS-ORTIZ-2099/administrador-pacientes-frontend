import { Box, Button, Container, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { usePatients } from "../context/PatientsProvider"
import { useFormFields } from "../hooks/useFormFields"


export const CreatePatient = () => { 

    const {createPatient, errors} = usePatients() 
    const {fields, changeFields} = useFormFields()
    
    const sendData = async(e) => { 
        e.preventDefault()
        try {
            const res = await createPatient(fields)
            if(res){
                e.target.reset()
                alert('creado correctamente')
            }    
        }catch(error) {
            console.log(error);      
        }       
    }
    

  return (
    <Container  mt={'4rem'}>
      <Text>crear paciente</Text>
          <Box onSubmit={sendData} as="form" noValidate>
                <FormControl>
                    <FormLabel>name</FormLabel>
                    <Input type="text" placeholder='name' name="name"
                        onChange={changeFields}
                    />
                    {
                        errors?.name && <Text fontSize={'xs'} color={'tomato'}>{errors.name}</Text>
                    }
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input type="text" placeholder='Last name' name="lastName" 
                        onChange={changeFields}
                    />
                    {
                        errors?.lastName && <Text fontSize={'xs'} color={'tomato'}>{errors.lastName}</Text>
                    }
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>email</FormLabel>
                    <Input type="email" placeholder='email' name="email"
                        onChange={changeFields}
                    />
                    {
                        errors?.email && <Text fontSize={'xs'} color={'tomato'}>{errors.email}</Text>
                    }
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>cedula</FormLabel>
                    <Input type="number" placeholder='cedula' name="cedula" 
                        onChange={changeFields}
                    />
                    {
                        errors?.cedula && <Text fontSize={'xs'} color={'tomato'}>{errors.cedula}</Text>
                    }
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>symptoms</FormLabel>
                    <Input type="text" placeholder='symptoms' name="symptoms"
                        onChange={changeFields}
                    />
                    {
                        errors?.symptoms && <Text fontSize={'xs'} color={'tomato'}>{errors.symptoms}</Text>
                    }
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
  )
}
