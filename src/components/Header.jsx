import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react'; 

function Header () {
    return (
        <Box sx={css.Box}>
            <Button sx={css.Button}>Projects</Button>
            <Button sx={css.Button}>About</Button>
            <Button sx={css.Button}>Contact</Button>
        </Box>
        // <AppBar position="sticky" conmponent="nav" sx={css.Appbar}>
        //     <Toolbar>
        //     <Typography
        //         variant="h6"
        //         component="div"
        //         sx={{ flexGrow: 1, display: { sm: 'block' } }}
        //     >
        //         Porfolio
        //     </Typography>
        //     <Box sx={css.Box}>
        //         <Button sx={css.Button}>
        //             Projects
        //         </Button>

        //         <Button sx={css.Button}>
        //             About
        //         </Button>

        //         <Button sx={css.Button}>
        //             Contact
        //         </Button>
        //     </Box>
        //     </Toolbar>
        // </AppBar>
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
        display: 'flex',
        justifyContent: 'center',
    }, 

    Button: {
        color: '#B0B0B0',
        minWidth: '100',
        margin: '20px'
    }
}