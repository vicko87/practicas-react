//import { useEffect } from "react"
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {
 const { onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password:''
});

//const {username, email, password} = formState

  return (
    <>
    <h1>Formulario con custom Hook</h1>
   <hr /> 
   <input 
   type="text" 
   className="form-control"
   placeholder="Username"
   name="username"
   value={username}
   onChange={onInputChange}
   />
   <input 
   type="email" 
   className="form-control mt-2"
   placeholder="victoria@google.com"
   name="email"
   value={email}
   onChange={onInputChange}
   />
    <input 
   type="password" 
   className="form-control mt-2"
   placeholder="contraseña"
   name="password"
   value={password}
   onChange={onInputChange}
   />
    
 <button  onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
