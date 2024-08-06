
export const updateDoctorFetch = async (formData, setUser, user) => {
  try{ 
        const response = await fetch(`http://localhost:5000/api/doctor/update-doctor/${user._id}`,{
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
        // si todo salio bien actualizar el estado global de user
        setUser(
          {...user, ...data
          }
        )
  }
  catch(error) {
    console.log(error); 
  }
}
