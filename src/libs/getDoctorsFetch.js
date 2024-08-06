

export const getDoctorsFetch = async(setDoctors) => {
    try{
        const response = await fetch(`http://localhost:5000/api/doctor/get-doctors`, { 
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
        setDoctors(data)
    }
    catch(error) {
    console.log(error); 
    }
}
