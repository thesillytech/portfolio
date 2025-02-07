import Container from '@mui/material/Container';
import Header from './components/Header';
import Homepage from './components/Homepage';

function Home () {
  return (
    <Container maxWidth="lg" sx={css.Container}>
      <Header />
      <Homepage />
    </Container>
  )
}
 
export default Home
 
const css = {
  Container: {
    '&.MuiContainer-root': {
      padding: '0px'
    }
  }
}
