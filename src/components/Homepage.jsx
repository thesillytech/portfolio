import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import * as React from 'react';

function Homepage () {
    return (
        <Grid size="auto" sx={css.Grid}>
            <Box>Hello, I'm <span style={css.name}>Sanil Khamkar</span>, a</Box>
            <Box>Web Developer.</Box>
        </Grid>
    )
}

export default Homepage

const css = {
    Grid: {
        fontSize: '5rem',
        padding: '20px',
        '@media screen and (max-width: 600px)': {
            fontSize: '30px'
        }
    },

    name: {
        color: '#29a3a3'
    }
}