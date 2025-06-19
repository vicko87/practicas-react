
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'


export const NavBar = (drawerWidth = 240) => {
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
                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
