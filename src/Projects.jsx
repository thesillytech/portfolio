import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';

function Projects () {
    return (
        <Container maxWidth="lg" sx={css.Container}>
            <Header />

            <Grid size="auto" sx={css.Projects}>
                <Paper elevation={24} sx={css.Paper}> 
                    <Box sx={css.Headers}>PROJECTS</Box>
                    
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="./src/assets/portfolio.png"
                            title="portfolio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
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
}