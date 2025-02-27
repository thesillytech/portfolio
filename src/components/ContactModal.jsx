import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

function ContactModal ({ isOpen, isClose}) {
    return (
        <Box>
            <Modal
                open={isOpen}
                onClose={isClose}
            >
                <Box sx={css.Modal}>
                    <Box>Name: <TextField id="filled-basic" label="Name" variant="outlined" size="small" sx={css.TextBox} /></Box>
                    <Button variant="outlined" onClick={isClose} sx={css.CloseButton}>Close</Button>
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
        border: '1px solid #c3c39a',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    CloseButton: {
        color: '#c3c39a',
        border: '1px solid #c3c39a',
        marginTop: '16px',
        '& .MuiButtonBase-root': {
            textTransform: 'initial'
        },
        '&:hover': {
            background: '#c3c39a', 
            color: '#4d4d33', 
            fontWeight: '500', 
            boxShadow: '0 0 3px #c3c39a, 0 0 3px #c3c39a', 
            borderColor: '#c3c39a', 
        }
    }, 

    TextBox: {
        '& .MuiFormLabel-root': {
            color: '#c3c39a',   // Text color of placeholder label within TextField
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#c3c39a',   // Label color when focused
        },
        '& .MuiOutlinedInput-root': {
            color: '#c3c39a',
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #c3c39a',    // Border color of the TextField
            },
            '&:hover:not(.Mui-focused)': {
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid #c3c39a', // Color for outlined state hover 
                },
            },
            '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #c3c39a',    // Border color when hovered over the TextField
                    color: '#c3c39a'
                },
            },
        }
    }
}