import Box from '@mui/material/Box';  
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'

function Header () {
    return (
      <Box sx={css.Box}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={css.ListButton}>
              <ListItemText><Box sx={css.line}></Box></ListItemText>
              <ListItemText>
                <Link to="/" style={css.Button}>Home</Link>
              </ListItemText>
              <ListItemText>
                <Link to="/projects" style={css.Button}>Projects</Link>
              </ListItemText>  
              <ListItemText>
                <Link to="/about" style={css.Button}>About</Link>
              </ListItemText>
              <ListItemText>  
                <Link to="/contact" style={css.Button}>Contact</Link>
              </ListItemText>
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
      paddingLeft: 0,
      paddingRight: 0
    },

    Button: {
      color: '#c3c39a',
      minWidth: '100',
      margin: '10px',
      fontSize: '15px'
    },

    line: {
      height: '2px',
      backgroundColor: '#c3c39a',
    }
}