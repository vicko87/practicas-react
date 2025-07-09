import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useMemo } from "react"

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: 'victoria@google.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    //console.log({email, password})

    dispatch(startLoginWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
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
            />
          </Grid>

          <Grid
            container
            display={!!errorMessage ? '' : 'none'}
            spacing={2} size={{ xs: 12, sx: { mt: 2 } }}
          >
            <Grid
              item
              size={{ xs: 6 }}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>

          </Grid>

          <Grid container spacing={2} size={{ xs: 12, sx: { mt: 2 } }}>
            <Grid size={{ xs: 6 }} >
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                sx={{ px: 11 }} fullWidth>
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 6 }}  >
              <Button
                disabled={isAuthenticating}
                variant="contained"
                sx={{ px: 11 }}
                fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container size={12} sx={{ justifyContent: "flex-end" }}>
            <Link component={RouterLink} color="inherit" to='/auth/register'>
              Crear una cuenta
            </Link>


          </Grid>
        </Grid>

      </form>
    </AuthLayout>


  )
}
