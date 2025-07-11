
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth';


export const NavBar = ({drawerWidth = 240}) => {

    const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }


    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar fullWidth>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >

                    <MenuOutlined />
                </IconButton>
                <Grid  container spacing={12} sx={{
                    justifyContent: "space-between",
                    width: '100%'
                }}>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                    <IconButton color='error'
                    onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
