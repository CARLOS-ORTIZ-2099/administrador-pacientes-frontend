/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"


export const PatientsContext = createContext()

export const PatientsProvider = ({children}) => {

  const [patients, setPatients] = useState([])
  const [errors, setErrors]  = useState({})
   
  
  const getPatients = async (url = '', id ='') => {  
    try{ 
        const response = await fetch(`http://localhost:5000/api/patient/get-patients`+url+id, {  
          method : 'GET',
          credentials: 'include'
        })
        //console.log(response);
        if(!response.ok) {
          let error = await response.json() 
          //console.log(error);  
          throw error
        }
        const data = await response.json()
        console.log(data);
        setPatients(data)
    }
    catch(error) {
      console.log(error); 
    }

  } 

  const deletePatient = async (id) => {
    try{
      const response = await fetch(`http://localhost:5000/api/patient/delete-patient/${id}`, {  
        method : 'DELETE',
        credentials: 'include'
      })
      //console.log(response);
      if(!response.ok) {
        let error = await response.json()  
        //console.log(error);  
        throw error
      }
      const data = await response.json()
      console.log(data);
      const patientsFilter = patients.filter(patient => patient._id !== data._id)
      setPatients(patientsFilter)
  }
  catch(error) {
    console.log(error); 
  }
    
  }

  const createPatient = async (fields) => {
    try{
      const response = await fetch(`http://localhost:5000/api/patient/create-patient/`, { 
        method : 'POST', 
        credentials: 'include',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(fields)
      })
      //console.log(response);
      if(!response.ok) {
        let error = await response.json() 
        //console.log(error);  
        throw error
      }
      const data = await response.json()
      console.log(data);
      //setPatients(data)
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
        const response = await fetch(`http://localhost:5000/api/patient/update-patient/${fields._id}`, { 
          method : 'PUT', 
          credentials: 'include',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify(fields)
        })
        //console.log(response);
        if(!response.ok) {
          let error = await response.json() 
          //console.log(error);  
          throw error
        }
        const data = await response.json()
        console.log(data);
        setPatients((prev) => prev.map(patient => patient._id === data._id ? {...data} : patient))
      }
      catch(error) { 
        console.log(error); 
      }  
  }
 
  const data = {patients, setPatients, getPatients, deletePatient, createPatient, errors, editPatient} 

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

