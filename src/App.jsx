import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { AuthProvider } from './context/AuthProvider'
import { Home } from './pages/home'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { PublicRoutes } from './components/PublicRoutes'
import { PatientsProvider } from './context/PatientsProvider'
import { CreatePatient } from './pages/CreatePatient'
import { Colleagues } from './pages/Colleagues'
import { EditDoctor } from './pages/EditDoctor'
import { DoctorProvider } from './context/DoctorProvider'

function App() {
  

  return (
    <>
      <AuthProvider> 
        <DoctorProvider>    
          <PatientsProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicRoutes/>}>
                      <Route path='/' element={<Register/>}/>
                      <Route path='/login' element={<Login/>}/>
                    </Route>

                    <Route element={<ProtectedRoutes/>}>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/create/patient' element={<CreatePatient/>}/>
                        <Route path='/profile-doctor/edit/:id' element={<EditDoctor/>}/>
                        <Route path='/colleagues' element={<Colleagues/>}/>
                        <Route path='*' element={<h1>not found</h1>}/>
                    </Route>
                    
                </Routes>
            </BrowserRouter>
          </PatientsProvider> 
        </DoctorProvider>  
      </AuthProvider>  
    </>
  )
}

export default App
