import { Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
  <form>
  
  <Grid container spacing={2}>
  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Nombre completo'
      type="text"
      placeholder="Nombre completo"
      fullWidth
    />
  </Grid>


  <Grid container spacing={2}>
  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Correo'
      type="email"
      placeholder="correo@google.com"
      fullWidth
    />
  </Grid>

  <Grid item size={{ xs: 12, sx: { mt: 2 } }}>
    <TextField
      label='Contraseña'
      type="password"
      placeholder="contraseña"
      fullWidth
    />
  </Grid>

  <Grid container spacing={2} size={{ xs: 12, sx: { mt: 2 } }}>
    <Grid size={{ xs: 6 }} >
      <Button variant="contained"  fullWidth>
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
