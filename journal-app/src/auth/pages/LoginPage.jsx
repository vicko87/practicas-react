import { Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
<Grid
container
spacing={0}
direction='column'
alignItems='center'
justifyContent='center'
sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
>
  <Grid
  className='box-shadow'
  sx={{backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
 <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

 <form>

<Grid sx={{ display: 'grid', gap: 2 }}>
<Grid sx={{ gridColumn: 'span 12' }}>
  <TextField 
  label='Correo' 
  type="email" 
  placeholder="correo@google.com" 
  fullWidth
  />
</Grid>

<Grid>
  <TextField 
  label='Contraseña' 
  type="password" 
  placeholder="contraseña" 
  fullWidth
  />
</Grid>

  </Grid>
 </form>
  </Grid>

</Grid>
  )
}
