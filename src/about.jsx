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
                <Box sx={css.Headers}>ABOUT</Box>
                <Box sx={css.Text}>
                    <span style={css.Highlight}>Greetings!</span> I'm Sanil, a Full Stack Web Developer based in United States.
                </Box>

                <Box sx={css.Text}>
                    I love crafting intuitive and engaging  web applications and websites designs for the front end while ensuring the back end is built for performance and usability.
                </Box>

                {/* experience section */}
                <Box sx={{ ...css.Headers, marginTop: '40px' }}>EXPERIENCE</Box>

                <Grid container spacing={2}>
                    <Grid size={{ md: 3 }}><Box sx={css.Year}>2019 - 2021</Box></Grid>

                    <Grid size={{ md: 6 }}>
                        <Box sx={css.Title}>Web Developer · South Dakota State University</Box>
                        <Box sx={css.Text}>Worked with the development team to build and maintain websites and web applications for the school</Box>
                        <Box sx={{ marginTop: '5px' }}>
                            <Chip label="Html & Css" color="warning" sx={css.Chip}/>
                            <Chip label="Sql" color="warning" sx={css.Chip}/>
                            <Chip label="Asp.net" color="warning" sx={css.Chip}/>
                            <Chip label="C#" color="warning" sx={css.Chip}/>    
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '40px' }}>
                    <Grid size={{ md: 3 }}><Box sx={css.Year}>2021 - PRESENT</Box></Grid> 

                    <Grid size={{ md: 6 }}>
                        <Box sx={css.Title}>Web Developer · JDS Industries </Box>
                        <Box sx={css.Text}>Build and maintain websites, web applications, manage development platform, across the whole company. Work closely with cross-functional teams, including developers, designers and managers, to implement best practices in web development.</Box>
                        <Box sx={{ marginTop: '5px' }}>
                            <Chip label="Html & Css" color="warning" sx={css.Chip}/>
                            <Chip label="Sql" color="warning" sx={css.Chip}/>
                            <Chip label="Php" color="warning" sx={css.Chip}/>
                            <Chip label="Javascript" color="warning" sx={css.Chip}/>  
                            <Chip label="React" color="warning" sx={css.Chip}/>    
                            <Chip label="Next.js" color="warning" sx={css.Chip}/>    
                            <Chip label="Node.js" color="warning" sx={css.Chip}/>    
                        </Box>
                    </Grid>
                </Grid>

                {/* interest section */}
                <Box sx={{ ...css.Headers, marginTop: '40px' }}>INTERESTS</Box>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, s: 3, md: 3 }}>
                        <Box sx={css.Year}>Development</Box>
                        <Box sx={css.Text}>Working on Projects</Box>
                        <Box sx={css.Text}>Reading</Box>
                    </Grid>

                    <Grid size={{ xs: 6, s: 3, md: 3 }}>
                        <Box sx={css.Year}>Watching</Box>
                        <Box sx={css.Text}>Mr. Robot</Box>
                        <Box sx={css.Text}>Blade Runner 2049</Box>
                    </Grid>

                    <Grid size={{ xs: 6, s: 3, md: 3 }}>
                        <Box sx={css.Year}>Gaming</Box>
                        <Box sx={css.Text}>Counter-Strike 2</Box>
                        <Box sx={css.Text}>God of War</Box>
                        <Box sx={css.Text}>Uncharted Series</Box>
                    </Grid>

                    <Grid size={{ xs: 6, s: 3, md: 3 }}>
                        <Box sx={css.Year}>Sports</Box>
                        <Box sx={css.Text}>Formula 1</Box>
                        <Box sx={css.Text}>e-Sports</Box>
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
        fontSize: '25px',
        fontWeight: '400',
        marginBottom: '20px'
    },

    Title: {
        fontSize: '20px',
        color: '#c3c39a',
        fontWeight: '400',
    },

    Text: {
        fontSize: '20px',
    }, 

    Highlight: {
        color: '#c3c39a',
        fontWeight: '400',
    }, 

    Year: {
        color: '#c3c39a',
        fontSize: '20px',
        // marginTop: '10px',
        fontWeight: '400',
    }, 

    Chip: {
        background: '#c3c39a', 
        color: '#4d4d33', 
        fontWeight: '500', 
        boxShadow: '0 0 3px #c3c39a, 0 0 3px #c3c39a', 
        border: '1px solid #c3c39a', 
        borderRadius: '16px', 
        marginRight: '10px'
    }
  }