import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { fontSize } from '@mui/system';
import * as React from 'react';

function Homepage () {
    return (
        <Grid container spacing={2}>
            <Grid size="auto" sx={css.Grid}>
                <Box>Hello, I'm Sanil Khamkar, a</Box>
                <Box>Web Developer</Box>
            </Grid>
        </Grid>
    )
}

export default Homepage

const css = {
    Grid: {
        fontSize: '56px',
        border: '1px solid white',
        fontweight: 800
    }
}