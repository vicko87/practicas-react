import { Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useState } from "react"

const formData = {
email:'victoria@google.com',
password: '123456',
displayName: 'Victoria Kolomytseva'
}  

const formValidations = {
  email:[(value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

 const [formSubmitted, setFormSubmitted] = useState()

   const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
   } = useForm(formData, formValidations);
   

   const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    console.log(formState)
   }
  

  return (
    <AuthLayout title='Crear cuenta'>
  <form onSubmit={onSubmit}>
  
  <Grid container spacing={2}>
  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Nombre completo'
      type="text"
      placeholder="Nombre completo"
      fullWidth
      name="displayName"
      value={displayName}
      onChange={onInputChange}
      error={!!displayNameValid && formSubmitted}
      helperText='displayNameValid'
    />
  </Grid>


  <Grid container spacing={2}>
  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Correo'
      type="email"
      placeholder="correo@google.com"
      fullWidth
      name="email"
      value={email}
      onChange={onInputChange}
       error={!!emailValid && formSubmitted}
      helperText='emailValid'
    />
  </Grid>

  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Contraseña'
      type="password"
      placeholder="contraseña"
      fullWidth
      name="password"
      value={password}
      onChange={onInputChange}
       error={!!passwordValid && formSubmitted}
      helperText='passwordValid'
    />
  </Grid>

  <Grid container spacing={2} size={{ xs: 12, sx: { mt: 2 } }}>
    <Grid size={{ xs: 6 }} >
      <Button type="submit" variant="contained"  fullWidth>
        Crear cuenta
      </Button>
    </Grid>
    </Grid>
   
  </Grid>

  <Grid container size={12} sx={{ justifyContent: "flex-end" }}>
    <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
    <Link component={RouterLink} color="inherit" to='/auth/login'>
      ingresar
    </Link>
  </Grid>
</Grid>

</form>
    </AuthLayout>

      
  )
}
