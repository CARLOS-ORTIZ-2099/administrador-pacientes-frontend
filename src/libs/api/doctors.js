export const getDoctorsFetch = async(/* setDoctors */) => {
   
        console.log('consultando...');
        const response = await fetch(`http://localhost:5000/api/doctor/get-doctors`, { 
        method : 'GET',
        credentials: 'include'
        })
        //console.log(response);
        if(!response.ok) {
           let error = await response.json()  
           throw error
        }
        const data = await response.json()
        return data
    
}




export const updateDoctorFetch = async (formData, id) => {
        const response = await fetch(`http://localhost:5000/api/doctor/update-doctor/${id}`,{
                method : 'PUT',
                credentials: 'include',
                body: formData,              
        })
        console.log(response);
        if(!response.ok) {
                let error = await response.json()  
                throw error
        }
        const data = await response.json()
        console.log(data);
        return data

}
  



