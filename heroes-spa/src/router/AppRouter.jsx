import {Route, Routes} from 'react-router-dom'
import {HeroesRoutes} from '../heroes'
import {LoginPage} from '../auth'
import { PrivetRoute } from './PrivetRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>


    <Routes>
  
    <Route path='login/*' element={
      <PublicRoute>
            <Routes>
     <Route path='/*' element={<LoginPage />} /> 
     </Routes>
      </PublicRoute>
    } /> 

      <Route path='/*' element={
        <PrivetRoute>
          <HeroesRoutes />
        </PrivetRoute>
      } />
      
   {/* <Route path='login' element={<LoginPage />} /> */}
     {/* <Route path='/*' element={<HeroesRoutes />} />
       */}
    
    </Routes>
    
    
    </>
  )
}
