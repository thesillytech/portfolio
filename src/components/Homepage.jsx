import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import resume from '../assets/resume/Resume.pdf'

function Homepage () {
    return (
        <>
            <Grid size="auto" sx={css.intro}>
                <Box>I'm <span style={css.name}>Sanil Khamkar</span>, a</Box>
                <Box>Web Developer.</Box>
            </Grid>

            <Grid size="auto" sx={css.subintro}>
                <Box>I'm focused on crafting simple, design-driven web experiences with modern technologies.</Box>
            </Grid>

            <Grid size="auto" sx={css.subintro}>
                <Stack direction="row" spacing={3} sx={css.ButtonStack}>
                    <Link to="/projects" style={{ color: '#c3c39a'}}><Button variant="outlined" size="large" sx={css.Button} startIcon={<i className="ph-light ph-folder-simple"></i>}>My Work</Button></Link>
                    <a href={resume} download="resume.pdf" style={{ color: '#c3c39a'}}><Button variant="outlined" size="large" sx={css.Button} startIcon={<i className="ph-light ph-read-cv-logo"></i>}>View Resume</Button></a>
                </Stack>
            </Grid>
        </>
    )
}

export default Homepage

const css = {
    intro: {
        fontSize: '5rem',
        padding: '0 20px 0 20px',
        '@media screen and (max-width: 600px)': {
            fontSize: '25px',
            padding: '15px'
        }
    },

    name: {
        color: '#c3c39a'
    },

    subintro: {
        fontSize: '40px',
        padding: '0 20px 0 20px',
        '@media screen and (max-width: 600px)': {
            fontSize: '25px',
            padding: '15px'
        }
    }, 

    ButtonStack: {
        marginTop: '30px',
        '@media screen and (max-width: 600px)': {
           margin: 0
        }
    },

    Button: {
        color: '#c3c39a',
        border: '1px solid #c3c39a',
        textTransform: 'initial',
        '&:hover': {
            background: '#c3c39a', 
            color: '#4d4d33', 
            fontWeight: '500', 
            boxShadow: '0 0 3px #c3c39a, 0 0 3px #c3c39a', 
            borderColor: '#c3c39a', 
        }
    }
    
}