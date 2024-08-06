/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { useAuth } from "./AuthProvider"
import { updateDoctorFetch } from "../libs/updateDoctorFetch"
import { getDoctorsFetch } from "../libs/getDoctorsFetch"

const DoctorContext = createContext() 

export const DoctorProvider = ({children}) => {
  
  const {user, setUser} = useAuth()
  const [doctors, setDoctors] = useState([])    

    
  const updateDoctor = async (fields) => {
        console.log(fields);
        const formData = new FormData()
        for(let key in fields) {
          formData.append(key , fields[key])  
        }
        updateDoctorFetch(formData, setUser, user)
  }  

  const getDoctors = async () => getDoctorsFetch(setDoctors)

  const data = {updateDoctor, getDoctors, doctors}  
  return (
    <DoctorContext.Provider value={data}>
        {children}
    </DoctorContext.Provider>
  )

}

export const useDoctor = () => {
    try{
        const doctorShare = useContext(DoctorContext)
        console.log(doctorShare);
        
        if(!doctorShare) {
            throw new Error('error al obtener el contexto')
        }
        return doctorShare
    }catch(error){
        console.log(error.message);
        
    }
}

