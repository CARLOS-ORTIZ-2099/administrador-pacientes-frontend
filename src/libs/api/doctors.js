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
  
/* fetch si el dato a enviar es cualquiera menos FormData si tenemos que establecer encabezados
   indicando el tipo de dato, si es un Form data no hace falta el navegador gestiona eso por mi,
   en axios no hace falta establecer encabezados indicando el tipo de dato exios lo detecta 
   automáticamente 
   
   Fetch: Necesitas establecer manualmente los encabezados Content-Type para datos que no sean FormData
   Axios: Detecta automáticamente el tipo de datos y establece los encabezados Content-Type adecuados, 
   sin necesidad de intervención manual.
*/



