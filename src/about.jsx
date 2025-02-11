import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';

function About () {
    return (
    <Container maxWidth="lg" sx={css.Container}>
        <Header />

        <Grid size="auto" sx={css.About}>
            <Paper elevation={24} sx={css.Paper}> 
                {/* about section */}
                <Box><span style={css.Headers}>ABOUT</span></Box>
                <Box sx={css.Text}>
                    <span style={css.Highlight}>Greetings!</span> I'm Sanil, a Full Stack Web Developer based in United States.
                </Box>

                <Box sx={css.Text}>
                    I love crafting intuitive and engaging  web applications and websites designs for the front end while ensuring the back end is built for performance and usability.
                </Box>

                 {/* experience section */}
                <Box sx={{ marginTop: '20px' }}><span style={css.Headers}>EXPERIENCE</span></Box>

                <Grid container spacing={2}>
                    <Grid size={{ md: 3 }}>
                        <Box sx={css.Year}>2019 - 2021</Box>
                    </Grid>

                    <Grid size={{ md: 6 }}>
                        <Box sx={css.Text}>Web Developer</Box>
                        <Box sx={css.Text}>Worked with the development team to build and maintain websites and web applications for the school</Box>
                        <Box><Chip label="HTML" color="warning" sx={css.Chip}/></Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid size={{ md: 4 }}>
                        <Box sx={css.Year}>2021 - PRESENT</Box>
                    </Grid> 

                    <Grid size={{ md: 4 }}>
                        <Box sx={css.Year}></Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        
     
    </Container>
    )
}

export default About

const css = {
    Container: {
      '&.MuiContainer-root': {
        padding: '0px'
      },
      fontSize: '30px'
    }, 

    About: {
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
        fontSize: '30px',
        fontWeight: '400'
    },

    Text: {
        fontSize: '20px',
        marginTop: '10px',
    }, 

    Highlight: {
        color: '#c3c39a',
        fontWeight: '400'
    }, 

    Year: {
        color: '#c3c39a',
        fontSize: '20px',
        marginTop: '10px',
        fontWeight: '400'
    }, 

    // Chip: {
    //     background: '#c3c39a',
    //     color: '#8f8f56',
    //     fontWeight: '500'
    // }

    Chip: {
        background: '#c3c39a', // Subtle neon background color
        color: '#4d4d33', // Darker color for text contrast
        fontWeight: '500', // Slightly bold for emphasis
        boxShadow: '0 0 5px #c3c39a, 0 0 5px #c3c39a', // Subtle neon glow effect
        border: '1px solid #c3c39a', // Defines the chip with a soft border
        padding: '0 10px', // Adjust internal spacing
        borderRadius: '16px', // Ensure rounded corners
        textTransform: 'uppercase', // Optional: make the text stand out
    }
  }