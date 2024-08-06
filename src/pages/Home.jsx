import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useAuth } from "../context/AuthProvider"
import { CardPatient } from "../components/CardPatient"
import { usePatients } from "../context/PatientsProvider"



export const Home = () => {

  const {user} = useAuth()
  const {patients, getPatients} = usePatients()
  console.log(patients);
  

  useEffect(() => {
    getPatients()
  }, []) 


  return (
    <Box textAlign={'center'}> 
          <Text mt={'1rem'}>welcome {user.name} {user.lastName}</Text>
          <SimpleGrid p={'2rem'} spacing={4} templateColumns='repeat(auto-fill, minmax(270px, 1fr))' >
            {
              patients.length > 0 ? (
                patients.map(patient => (
                    <CardPatient key={patient._id} patient={patient}/>
                ))
              ) 
              : <Text>no hay pacientes</Text>
            }
          </SimpleGrid>

    </Box>
  )
}
