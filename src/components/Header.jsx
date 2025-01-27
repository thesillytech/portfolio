import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react'; 

function Header () {
    return (
        <Box sx={css.Box}>
            <Box sx={css.line}></Box>
                <Button sx={css.Button}>Home</Button>
                <Button sx={css.Button}>Projects</Button>
                <Button sx={css.Button}>About</Button>
                <Button sx={css.Button}>Contact</Button>
            <Box sx={css.line}></Box>
        </Box>
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
        alignItems: 'center',
    }, 

    Button: {
        color: '#adad85',
        minWidth: '100',
        margin: '20px',
        fontSize: '15px'
    },

    line: {
        height: '2px',
        backgroundColor: '#adad85',
        width: '100%'
    }
}