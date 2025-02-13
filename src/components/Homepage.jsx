import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import * as React from 'react';

function Homepage () {
    return (
        <>
            <Grid size="auto" sx={css.intro}>
                <Box>Hello, I'm <span style={css.name}>Sanil Khamkar</span>, a</Box>
                <Box>Web Developer.</Box>
            </Grid>

            <Grid size="auto" sx={css.subintro}>
                <Box>I'm focused on crafting simple, design-driven web experiences with modern technologies.</Box>
            </Grid>
        </>
    )
}

export default Homepage

const css = {
    intro: {
        fontSize: '5rem',
        '@media screen and (max-width: 600px)': {
            fontSize: '25px',
            padding: '15px'
        }
    },

    name: {
        color: '#adad85'
    },

    subintro: {
        fontSize: '40px',
        '@media screen and (max-width: 600px)': {
            fontSize: '25px',
            padding: '15px'
        }
    }
    
}