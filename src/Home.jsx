import Container from '@mui/material/Container';
import Header from './components/Header';
import Homepage from './components/Homepage';
import * as React from 'react';
import { useState } from 'react'

function Home () {
  const [count, setCount] = useState(0)

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
