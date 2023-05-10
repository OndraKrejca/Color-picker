import React from 'react'
import styled from 'styled-components'
import { Form } from './index'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar__box'>
        <h2 className='navbar__logo'>RGB color</h2>
      </div>

      <div className='navbar__box'>
        <Form />
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  width: 100%;
  height: 50%;
  min-height: 80px;
  background-color: white;
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;

  .navbar__logo {
    font-family: 'arial';
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  @media (max-width: 763px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem;
    padding: 1.5rem 3rem;

    .navbar__logo {
      font-size: 1.6rem;
    }
  }
`
