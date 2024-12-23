/* eslint-disable react/prop-types */
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { usePatients } from "../context/PatientsProvider"
 

export const ModalEditPatient = ({isOpen, onClose, fields, handlerFields}) => {

    const {editPatient} = usePatients()
    const initialRef = useRef(null)
    const finalRef = useRef(null)  
    
    const [error , setError] = useState(null)
    const saveChange = async() => {
        try { 
           await editPatient(fields) 
           alert('editado correctamente')   
           onClose()
        }catch(error) {
            console.log(error);
            setError(error.message)
        } 
    }

  return (
    <>
        <Modal 
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
        <ModalOverlay />
            <ModalContent> 
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>name</FormLabel>
                    <Input ref={initialRef} placeholder='name' 
                        defaultValue={fields.name} name="name"
                        onChange={handlerFields}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' 
                        defaultValue={fields.lastName} name="lastName"
                        onChange={handlerFields}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>email</FormLabel>
                    <Input placeholder='email' 
                        defaultValue={fields.email} name="email"
                        onChange={handlerFields}
                    />
                    {
                        error && <Text color={'tomato'}>{error}</Text>
                    }
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>symptoms</FormLabel>
                    <Input placeholder='symptoms' 
                        defaultValue={fields.symptoms} name="symptoms"
                        onChange={handlerFields}
                    />
                </FormControl>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}
                        onClick={saveChange} >
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
  </>
  )
}
