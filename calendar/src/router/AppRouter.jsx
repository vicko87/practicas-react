import {Route, Routes, Navigate} from 'react-router-dom';
import {LoginPage} from '../auth';
import { CalendarPage } from '../calendar/pages/CalendarPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';

export const AppRouter = () => {

 const {status, checkAuthToken} = useAuthStore();

    //const authStatus = 'not-authenticated'

    useEffect(() =>{
      checkAuthToken();
    }, [])

    if(status === 'ckecking') {
      return(
        <h3>Cargando...</h3>
      )
    }

  return (
  <Routes>
    {
        (status === 'not-authenticated')
        ?<Route path='/auth/*' element={<LoginPage/>}/>
        : <Route path='/*' element={<CalendarPage/>}/>
        
    } 
    
 
     <Route path='/*' element={<Navigate to='/auth/login'/>}/>


  </Routes>
  )
}
