import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react'; 

function Header () {
    return (
        <AppBar position="sticky" conmponent="nav" sx={css.Appbar}>
            <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { sm: 'block' } }}
            >
                Porfolio
            </Typography>
            <Box sx={{ display: { sm: 'block' } }}>
                <Button sx={{ color: '#fff' }}>
                    Projects
                </Button>

                <Button sx={{ color: '#fff' }}>
                    About
                </Button>

                <Button sx={{ color: '#fff' }}>
                    Contact
                </Button>
            </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header

const css = {
    Appbar: {
        '&.MuiAppBar-root': {
            backgroundColor: '#242424',
            padding: '20px'
        },
    },

    Box: {
        display: 'flex'
    }
}