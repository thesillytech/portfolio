import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'

function Contact () {
    return (
        <Container maxWidth="lg" sx={css.Container}>
            <Header />

            <Grid size="auto" sx={css.Contact}>
                <Paper elevation={24} sx={css.Paper}> 
                    <Box sx={css.Headers}>CONTACT ME</Box>

                </Paper>
            </Grid>
        </Container>
    )
}

export default Contact

const css = {
    Container: {
        '&.MuiContainer-root': {
          padding: '0px'
        },
        fontSize: '30px'
    }, 

    Contact: {
    '@media screen and (max-width: 600px)': {
        fontSize: '25px',
        padding: '15px'
        }
    },

    Paper: {
        background: '#242424',
        color: '#fff',
        padding: '20px'
    }, 

    Headers: {
        color: '#c3c39a',
        fontSize: '25px',
        fontWeight: '400',
        marginBottom: '20px'
    },
}