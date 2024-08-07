/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { useAuth } from "./AuthProvider"
import { getDoctorsFetch , updateDoctorFetch} from "../libs/api/doctors"

const DoctorContext = createContext() 

export const DoctorProvider = ({children}) => {
  
  const {user, setUser} = useAuth()
  const [doctors, setDoctors] = useState([])    
  const [errors, setErrors] = useState({})
    
  const updateDoctor = async (fields) => {
        console.log(fields);
        const formData = new FormData()
        for(let key in fields) {
          formData.append(key , fields[key])  
        }
        try {
          const data = await updateDoctorFetch(formData, user._id)
          console.log(data);
          setUser({...user, ...data})
          return data
        }catch(error) {
          console.log(error);
          setErrors(error)
          setTimeout(() => {
            setErrors({})
          }, 2000)
        }
       
  }  

  const getDoctors = async () => {
      try{
        const data = await getDoctorsFetch()
        //console.log(data);
        setDoctors(data)
      }catch(error){
        console.log(error);
        
      }
  }

  const data = {updateDoctor, getDoctors, doctors, errors, setErrors}  
  return (
    <DoctorContext.Provider value={data}>
        {children}
    </DoctorContext.Provider>
  )

}

export const useDoctor = () => {
    try{
        const doctorShare = useContext(DoctorContext)
        //console.log(doctorShare);
      
        if(!doctorShare) {
            throw new Error('error al obtener el contexto')
        }
        return doctorShare
    }catch(error){
        console.log(error.message);
        
    }
}

