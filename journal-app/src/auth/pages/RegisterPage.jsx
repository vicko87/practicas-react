import { Link as RouterLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { Alert } from '@mui/material'

const formData = {
  email: 'victoria@google.com',
  password: '123456',
  displayName: 'Victoria Kolomytseva'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">

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

              <Grid
                item
                size={{ xs: 6 }}
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>


              <Grid container spacing={2} size={{ xs: 12, sx: { mt: 2 } }}>
                <Grid size={{ xs: 6 }} >
                  <Button
                    disabled={isCheckingAuthentication}
                    type="submit"
                    variant="contained"
                    fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>

            </Grid>

            <Grid container size={12} sx={{ justifyContent: "flex-end" }}>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to='/auth/login'>
                ingresar
              </Link>
            </Grid>
          </Grid>
        </Grid>

      </form>
    </AuthLayout>


  )
}
