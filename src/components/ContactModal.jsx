import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function ContactModal ({ isOpen, isClose}) {
    return (
        <Box>
            <Modal
                open={isOpen}
                onClose={isClose}
            >
                <Box sx={css.Modal}>
                    Text in a modal
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    <Button 
                        variant="outlined" 
                        onClick={isClose}
                        sx={css.CloseButton}
                    >
                    Close
                </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default ContactModal

const css = {
    Modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#242424',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }, 

    CloseButton: {
        color: '#c3c39a',
        border: '1px solid #c3c39a',
        marginTop: '16px',
        '&.MuiButtonBase-root': {
            textTransform: 'initial'
        },
        '&:hover': {
            background: '#c3c39a', 
            color: '#4d4d33', 
            fontWeight: '500', 
            boxShadow: '0 0 3px #c3c39a, 0 0 3px #c3c39a', 
            borderColor: '#c3c39a', 
        }
    }
}