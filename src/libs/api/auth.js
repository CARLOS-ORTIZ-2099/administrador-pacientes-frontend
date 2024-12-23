export  const loginRegisterFetch = async (fields, url, setAuthState, setErrors, setLoading = null, setUser = null) => { 
    setLoading && setLoading(true)
      try{ 
          //throw new Error('error al hacer peticion')
          const response = await fetch(`http://localhost:5000/api/${url}`, { 
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(fields),
            credentials: 'include'
          })
          console.log(response);
          if(!response.ok) {
            let error = await response.json()
            //console.log(error);  
            throw error
          }
          const data = await response.json()
          console.log(data);
          setUser && setUser(data)
          setAuthState(true)
          setLoading && setLoading(false)
      }
      catch(error) {
        console.log(error); 
        setErrors(error)
         setTimeout(() => {
            setErrors({})
         }, 4000)
         setLoading && setLoading(false)
      }
  
}


export async function logoutFetch (setIsAuth, setUser) {
    try {
        const response = await fetch('http://localhost:5000/api/auth/logout', {
          method : 'GET', 
          credentials: 'include'
        })
        console.log(response);
        
        if( response.statusText === 'OK') {
          setIsAuth(false) // aqui mi estado cambia
          setUser({})
        }
      }catch(error) {
        console.log(error);
        
      }
}


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
        //console.log(data);
        setIsAuth(true)
        setUser(data)
        setLoading(false)
      }
      catch(error) {
        console.log(error); 
        setLoading(false)
      }
}


  