
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'

function App() {

 const {counter} = useSelector(state => state.counter )
 const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is: {counter}</h1>
      <div className="card">
        <button type='butyon' onClick={( ) => dispatch (increment())}>
       Increment
        </button>
        <button type='butyon' onClick={( ) => dispatch (decrement())}>
       Decrement
        </button>
        <button type='butyon' onClick={( ) => dispatch (incrementBy(2))}>
       Increment by 2
        </button>
        <p>
         
        </p>
      </div>
      
    </>
  )
}

export default App
