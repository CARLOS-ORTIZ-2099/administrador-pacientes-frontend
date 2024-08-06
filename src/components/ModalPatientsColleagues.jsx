/* eslint-disable react/prop-types */
import { Avatar, Box, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"


export const ModalPatientsColleagues = ({isOpen, onClose, patients}) => {
    

    return (
        <>    
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                    {
                        patients?.length > 0 ? (
                            patients?.map((patient) => (<Flex key={patient._id} flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={`${patient.name+ ' '+patient.lastName}`}/>
                                <Box>
                                    <Heading size='sm'>
                                        paciente
                                        <Text>
                                            {`${patient?.name+' '+ patient?.lastName+' - '+ patient?.email}`}
                                        </Text>
                                        
                                    </Heading>
                                    
                                </Box>
                            </Flex>))
                        ) : 
                        <Text>este colega no tiene pacientes</Text>
                    }
              </ModalBody>
    
              <ModalFooter>
                
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )
}
