import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Call, Email, Facebook, Instagram } from '@mui/icons-material/'
const Nav = styled.div`
  height: 50px;
  background-color: #013701;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 6;
`
const Options = styled.ul`
  display: flex;
  flex: 4;
  cursor: pointer;
  justify-content: flex-end;
  text-decoration: none;
`
const SubOptions = styled.li`
  list-style: none;
  margin-right: 2rem;
  font-size: 1.2em;
  padding: 0.5rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  @media (max-width: 800px) {
    font-size: 1em;
    margin-right: 0.9rem;
  }
  @media (max-width: 420px) {
    font-size: 0.8em;
    margin-right: 0.2rem;
  }
  &:hover {
    scale: 1.2;
    color: #0e970e;
  }
`
const Logo = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  font-weight: 600;
  color: white;
  flex: 1;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 420px) {
    font-size: 1.2em;
  }
`
const Social = styled.div`
  display: flex;
  flex: 1;
  color: white;
  font-size: 1.2rem;
  justify-content: flex-end;
  padding-right: 1rem;
  @media (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`
const Icon = styled.div`
  display: flex;
  margin-right: 0.7rem;
  cursor: pointer;
  &:hover {
    color: #044104;
  }
`
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>ORION</Logo>
        <Options>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <SubOptions>Home</SubOptions>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/admissions'>
            <SubOptions>Admissions</SubOptions>
          </Link>
          {/* <Link to='/gallery' style={{ textDecoration: 'none' }}>
            <SubOptions>Gallery</SubOptions>
          </Link> */}
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <SubOptions>About</SubOptions>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/contact'>
            <SubOptions>Contact</SubOptions>
          </Link>
          {/* <Link style={{ textDecoration: 'none' }} to='/register'>
            <SubOptions>Register</SubOptions>
          </Link> */}
          <Link style={{ textDecoration: 'none' }} to='/jobs'>
            <SubOptions>Jobs</SubOptions>
          </Link>
        </Options>
        <Social>
          <Icon>
            <Instagram />
          </Icon>
          <Icon>
            <Facebook />
          </Icon>
          <Icon>
            <Email />
          </Icon>
          <Icon>
            <Call />
          </Icon>
        </Social>
      </Nav>
    </>
  )
}

export default Navbar
