/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react"
import {  deletePatientFetch, getPatientsFecth, createPatientFetch, editPatientFetch } from "../libs/api/patients"



export const PatientsContext = createContext()

export const PatientsProvider = ({children}) => {

  const [patients, setPatients] = useState([])
  const [errors, setErrors]  = useState({})
   
  
  const getPatients = async (url = '', id ='') => {  
    try{ 
      const response = await getPatientsFecth(url, id)
      console.log(response);
      setPatients(response)
    }
    catch(error) {
      console.log(error);
    }

  } 

  const deletePatient = async (id) => {
    try{
      const data = await deletePatientFetch(id)
      const patientsFilter = patients.filter(patient => patient._id !== data._id)
      setPatients(patientsFilter)
  }
  catch(error) {
    console.log(error); 
  }
    
  }

  const createPatient = async (fields) => {
    try{
      const data = await createPatientFetch(fields)
      console.log(data);
      return data
    } 
    catch(error) {
      console.log(error);
      setErrors(error)
      setTimeout(() => {
        setErrors({})
      }, 2000) 
    }
    
  }
 
  const editPatient = async (fields) => { 
      try{
        const data = await editPatientFetch(fields)  
        console.log(data);
        setPatients((prev) => prev.map(patient => patient._id === data._id ? {...data} : patient))
      }
      catch(error) { 
        console.log(error); 
        throw error  
      }  
  }
 
  const data = {patients, setPatients, getPatients, deletePatient, createPatient, errors, editPatient, setErrors } 

  return (
    <PatientsContext.Provider value={data}>
        {children}
    </PatientsContext.Provider>
  )
}

export const usePatients = () => {
  try{
      const patientsShare = useContext(PatientsContext)
      if(!patientsShare) {
          throw new Error('error al obtener el contexto')
      }
      return patientsShare
  }catch(error){
      console.log(error.message);
      
  }
}

