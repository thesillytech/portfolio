import Box from '@mui/material/Box';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

function Header () {
    return (
      <Box sx={css.Box}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={css.ListButton}>
              <ListItemText><Box sx={css.line}></Box></ListItemText>
              <ListItemText primary="Home" sx={css.Button}/>
              <ListItemText primary="Projects"sx={css.Button} />
              <Link to="/about"><ListItemText primary="About" sx={css.Button}/></Link>
              <ListItemText primary="Contact" sx={css.Button}/>
              <ListItemText><Box sx={css.line}></Box></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    )
}

export default Header

const css = {
    Appbar: {
        '&.MuiAppBar-root': {
            backgroundColor: '#242424',
            padding: '20px'
        },
    },

    Box: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    ListButton: {
      textAlign: 'center',
      '&.MuiListItemButton-root': {
        paddingLeft: 0,
        paddingRight: 0
      }
    },

    Button: {
        color: '#adad85',
        minWidth: '100',
        margin: '10px',
        fontSize: '15px'
    },

    line: {
        height: '2px',
        backgroundColor: '#adad85',
    }
}