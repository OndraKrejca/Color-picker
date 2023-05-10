import React from 'react'
import styled from 'styled-components'
import { Navbar, Colors, Alert } from './components'

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Alert />
      <Colors />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.main`
  background-color: #c8edf3;
  width: 100%;
  min-height: 100vh;
`
