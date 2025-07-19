import {Route, Routes} from 'react-router-dom';
import { LogiPage } from '../auth';
import { CalendarPage } from '../calendar/pages/CalendarPage';

export const AppRouter = () => {

    const authStatus = 'not-authenticated'

  return (
  <Routes>
    {
        (authStatus === 'not-authenticated')
        ?<Route path='/auth/*' element={<LogiPage/>}/>
        :  <Route path='/*' element={<CalendarPage/>}/>
        
    } 
    
 
     <Route path='/*' element={<Navigate to='/auth/login'/>}/>


  </Routes>
  )
}
