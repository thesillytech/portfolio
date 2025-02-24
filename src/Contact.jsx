import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ContactModal from './components/ContactModal';


function Contact () {

    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <Container maxWidth="lg" sx={css.Container}>
            <Header />
            <Grid size="auto" sx={css.Contact}>
                <Paper elevation={24} sx={css.Paper}> 
                    <Box sx={css.Headers}>CONTACT ME</Box>
                    <Box sx={{ ...css.Text, marginBottom: '20px' }}>You can reach me at <Link onClick={handleOpen} style={css.ModalButton}>khamkarsanil@gmail.com</Link></Box>
                    <Box sx={css.Text}>Other Platforms where you can find me:</Box>
                    <Box sx={{ marginTop: '20px'}}>
                        <ListItemText>
                            <Link to="https://github.com/SanilKhamkar" style={css.Link} target="_blank">
                            <i className="ph-light ph-github-logo" style={css.Link}></i>Github</Link>
                        </ListItemText>
                        <ListItemText>
                            <Link to="https://www.linkedin.com/in/sanil-khamkar-b65857164/" style={css.Link} target="_blank">
                            <i className="ph-light ph-linkedin-logo" style={css.Link}></i>LinkedIn</Link>
                        </ListItemText>
                    </Box>
                </Paper>
            </Grid>

            {/* ContactModal */}
            <ContactModal isOpen={isModalOpen} isClose={handleClose} />
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

    Text: {
        fontSize: '20px'
    },

    Link: {
        color: '#c3c39a',
        fontSize: '20px',
        fontWeight: '300',
        marginRight: '4px'
    },

    ModalButton: {
        color: '#c3c39a',
    }
}