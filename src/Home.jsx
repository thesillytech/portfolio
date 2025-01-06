import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Appbar from './components/Appbar';
import * as React from 'react';
import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Appbar  />
    </Container>
  )
}

export default Home
