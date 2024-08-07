/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react"
import { usePatients } from "../context/PatientsProvider"
import { ModalEditPatient } from "./ModalEditPatient"
import { useEditForm } from "../hooks/useEditForm"

 
export const CardPatient = ({patient}) => { 

  const {deletePatient} = usePatients() 
 /*  const sendDeletepatient = (id) => deletePatient(id) */
  const {fieldsActive, setFieldsActive, handlerFieldsActive} =  useEditForm()

  const showModal = (data) => {
      console.log(data);
      setFieldsActive(data)
      onOpen()
  } 


  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
    <Card maxW='md'>
        
        <CardHeader>
            <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={`${patient.name+ ' '+patient.lastName}`}/>
            
                    <Box>
                        <Heading size='sm'>
                            paciente
                            <Text>{`${patient?.name+' '+patient?.lastName}`}</Text>
                            
                        </Heading>
                        
                    </Box>
                </Flex>
            </Flex>
        </CardHeader>

        <CardBody>
          <Text>sintomas : {patient.symptoms}</Text>
          <Text>email : {patient.email}</Text>
          <Text>cedula : {patient.cedula}</Text>
        </CardBody>

        <CardFooter
            justify='space-around'
            flexWrap='wrap'
            sx={{
                '& > button': {
                minW: '40px',
                },
            }}
            gap={'10px'}
        >
            <Button onClick={() => deletePatient(patient._id)} flex='1' colorScheme="red">
                delete
            </Button>
            <Button onClick={() => showModal(patient)} flex='1' colorScheme="blue">
                edit
            </Button>
          
        </CardFooter>
    </Card>
    {
      isOpen && <ModalEditPatient isOpen={isOpen} onClose={onClose} 
      fields={fieldsActive} handlerFields={handlerFieldsActive} 
    />
    }
    </>
  )
}

