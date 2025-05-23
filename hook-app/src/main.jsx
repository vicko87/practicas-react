import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
import './index.css'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<FormWithCustomHook />
 // </StrictMode>,
 //<MultipleCustomHooks />,
 //<FocusScreen/>
 //<Layout />
 //<Memorize/>
 //<MemoHook/>
  //<CallbackHook/>
  //<Padre/>
  
  <BrowserRouter>
 
  <MainApp/>

  </BrowserRouter>

)
