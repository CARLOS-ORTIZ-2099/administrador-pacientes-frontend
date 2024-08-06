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