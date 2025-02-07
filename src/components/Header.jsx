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
                <Link to="/" sx={css.Button}>Home</Link>
              </ListItemText>
              <ListItemText primary="Projects" sx={css.Button} />
              <ListItemText >
                <Link to="/about" sx={css.Button}>About</Link>
              </ListItemText>
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