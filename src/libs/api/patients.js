export const getPatientsFecth = async (url = '', id ='') => {  
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
        //console.log(data);
        return data
}


export const deletePatientFetch = async (id) => {
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
      //console.log(data);
      return data
    
}



export const createPatientFetch = async (fields) => {
      const response = await fetch(`http://localhost:5000/api/patient/create-patient/`, { 
        method : 'POST', 
        credentials: 'include',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(fields)
      })
      console.log(response);
      if(!response.ok) {
        let error = await response.json() 
        //console.log(error);  
        throw error
      }
      const data = await response.json()
      //console.log(data);
      return data
    
}



export const editPatientFetch = async (fields) => { 
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
      //console.log(data);
      return data
}




   
