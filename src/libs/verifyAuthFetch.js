export async function  veryfyFetch(setIsAuth, setUser, setLoading) {
    try{
        const response = await fetch(`http://localhost:5000/api/auth/verifyToken`, {
          method : 'GET',
          credentials: 'include'
        })
        //console.log(response);
        if(!response.ok) {
          let error = await response.json()  
          throw error
        }
        const data = await response.json()
        console.log(data);
        setIsAuth(true)
        setUser(data)
        setLoading(false)
      }
      catch(error) {
        console.log(error); 
        setLoading(false)
      }
}