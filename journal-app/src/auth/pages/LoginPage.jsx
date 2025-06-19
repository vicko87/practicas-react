import { Link as RouterLink} from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
  <form>
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
      <Button variant="contained" sx={{ px: 11 }} fullWidth>
        Login
      </Button>
    </Grid>

    <Grid size={{ xs: 6 }}  >
      <Button variant="contained" sx={{ px: 11 }} fullWidth>
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
