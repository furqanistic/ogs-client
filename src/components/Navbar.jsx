import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Container isOpen={isOpen}>
        <Nav>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Logo>
              The Orion School
              {/* <LogoImg src='https://github.com/furqanistic/ogs-client/blob/main/src/img/logo.png?raw=true' /> */}
            </Logo>
          </Link>

          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <MenuLink>Home</MenuLink>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/admissions'>
              <MenuLink>Admissions</MenuLink>
            </Link>
            {/* <Link to='/gallery' style={{ textDecoration: 'none' }}>
            <MenuLink>Gallery</MenuLink>
          </Link> */}
            <Link style={{ textDecoration: 'none' }} to='/contact'>
              <MenuLink>Contact</MenuLink>
            </Link>
            {/* <Link style={{ textDecoration: 'none' }} to='/register'>
            <MenuLink>Register</MenuLink>
          </Link> */}
            <Link style={{ textDecoration: 'none' }} to='/portals'>
              <MenuLink>Portals</MenuLink>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/jobs'>
              <MenuLink>Jobs</MenuLink>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <MenuLink>About</MenuLink>
            </Link>
          </Menu>
        </Nav>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
  height: ${({ isOpen }) => (isOpen ? '380px' : '80px')};
  transition: height 0.3s ease-in;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    font-size: 2rem;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '370px' : '0px')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #f8f8f8;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: 500;
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* background: #013701; */
  background-color: #272763;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`
const LogoImg = styled.img`
  height: 35px;
  /* background-color: red; */
  padding-left: 10px;
  /* object-fit: cover; */
`
const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
