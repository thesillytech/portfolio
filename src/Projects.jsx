import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'

function Projects () {
    return (
        <Container maxWidth="lg" sx={css.Container}>
            <Header />

            <Grid size="auto" sx={css.Projects}>
                <Paper elevation={24} sx={css.Paper}>
                    <Box sx={css.Headers}>PROJECTS</Box>

                    {/* Portfolio */}
                    <Grid container spacing={3} sx={{ marginBottom: '10px' }}>
                        <Grid>
                            <img src="/assets/portfolio.png" style={css.Img}></img>
                        </Grid>
                        <Grid>
                            <Box sx={{ marginTop: '-10px', color: '#c3c39a'}}>Portfolio</Box>
                            <Box sx={{ fontSize: '20px' }}>Portfolio Website built with Vite and React</Box>
                            <Box>
                                <Link to="https://github.com/SanilKhamkar/portfolio" style={css.Link} target="_blank"><i className="ph-light ph-github-logo"></i>Source</Link>
                                <Link to="https:sanilk.com" style={css.Link} target="_blank"><i className="ph-light ph-browser"></i>Live</Link>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* <Box sx={{ borderBottom: '1px solid #c3c39a' }}></Box> */}

                    {/* <Grid container spacing={3} sx={{ marginTop: '25px'}}>
                        <Grid>
                            <img src="./src/assets/portfolio.png" style={css.Img}></img>
                        </Grid>
                        <Grid>
                            <Box sx={{ marginTop: '-10px', color: '#c3c39a'}}>Portfolio</Box>
                            <Box sx={{ fontSize: '20px' }}>Portfolio Website built with Vite and React</Box>
                            <Box>
                                <Link to="https://github.com/SanilKhamkar/portfolio" style={css.Link} target="_blank"><i className="ph-light ph-github-logo"></i>Source</Link>
                                <Link to="https://github.com/SanilKhamkar/portfolio" style={css.Link} target="_blank"><i className="ph-light ph-browser"></i>Live</Link>
                            </Box>
                        </Grid>
                    </Grid> */}

                </Paper>
            </Grid>

        </Container>
    )
}

export default Projects

const css = {
    Container: {
        '&.MuiContainer-root': {
          padding: '0px'
        },
        fontSize: '30px'
    },

    Projects: {
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

    Button: {
        color: '#4d4d33',
    },

    Img: {
        width: '280px',
        height: '150px',
        border: '1px solid #c3c39a'
    },

    Link: {
        color: '#c3c39a',
        fontSize: '20px',
        marginRight: '20px'
    },
}