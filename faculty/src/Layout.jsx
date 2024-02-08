import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Layout/Sidebar'
import Topbar from './components/Layout/Topbar'
const Back = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #0b0a45;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%233aa933' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%233aa933' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2336983e' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%2336983e' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23338548' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23338548' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%232f6f50' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%232f6f50' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%232a5358' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%232a5358' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2325265f' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%2325265f' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */
`
const Right = styled.div`
  width: calc(100vw - 15em);
`
const Left = styled.div`
  width: 15em;
`
const Footer = styled.div`
  font-size: 0.8rem;
  background-color: #043301;
  color: white;
  text-align: center;
  padding: 0.2rem;
`
const Links = styled.a`
  color: #22ff00;
  text-decoration: none;
`
const Layout = ({ children }) => {
  return (
    <>
      <Back>
        <Left>
          <Sidebar />
        </Left>
        <Right>{children}</Right>
      </Back>
      <Footer>
        {' '}
        Copyrights © All Rights Reserved 2024 - Proudly created by{' '}
        <Links href='https://www.furqan.cc' alt='_blank'>
          FURQAN
        </Links>
      </Footer>
    </>
  )
}

export default Layout
