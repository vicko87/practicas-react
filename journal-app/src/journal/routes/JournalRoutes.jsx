import { Navigate, Route, Routes } from 'react-router-dom'
import {JornalPage} from '../pages/JornalPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <JornalPage/>} />
        <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
