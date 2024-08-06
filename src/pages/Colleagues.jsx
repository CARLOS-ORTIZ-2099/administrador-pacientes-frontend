import { Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { CardColleague } from "../components/CardColleague"
import { useDoctor } from "../context/DoctorProvider"


export const Colleagues = () => {

  const {getDoctors, doctors} = useDoctor()
  console.log(doctors);
  
  useEffect(() => {
    getDoctors()
  }, [])


  return (
    <Box textAlign={'center'}>
           <Text mt={'1rem'} fontSize={'x-large'}>colegas</Text> 
           <Box display={'flex'} flexWrap={'wrap'} gap={{base : '3rem', md : '1rem'}}
            p={'1rem'}
            justifyContent={'space-evenly'}
            border={'solid green 2px'}
           >
              {
                doctors.map((colleague) => (
                  <CardColleague key={colleague._id}
                      colleague={colleague}
                      />
                  ))
              }
           </Box>
    </Box>
  )
}
