/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton , Text, useDisclosure } from "@chakra-ui/react"
import { ModalPatientsColleagues } from "./ModalPatientsColleagues";
import { usePatients } from "../context/PatientsProvider";


export const CardColleague = ({colleague}) => {
    console.log(colleague); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {getPatients, patients} = usePatients()
    
  return (
    <>
        <Card maxW='md' border={'solid blue 2px'}>
            
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={`${colleague.name+ ' '+colleague.lastName}`} src='https://bit.ly/sage-adebayo' />
                
                        <Box>
                            <Heading size='sm'>
                                {colleague.name} {colleague.lastName}
                                <Text>cedula : {colleague.cedula}</Text>
                                <Text>email : {colleague.email}</Text>
                            </Heading>
                            
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                    />
                </Flex>
            </CardHeader>

            <CardBody>
            <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
            </Text>
            </CardBody>
        
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                    minW: '136px',
                    },
                }}
            >
                <Button flex='1' colorScheme="blue"
                    onClick={() => {
                        getPatients('?iddoctor=',colleague._id)
                        onOpen()
                    }}
                >
                    view patients
                </Button>
            
            </CardFooter>
        </Card>
        {
            isOpen && 
            <ModalPatientsColleagues isOpen={isOpen} onClose={onClose}
            patients={patients}
            />
        }
    </>
    
    
  )
}
