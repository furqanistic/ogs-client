import React from 'react'
import styled from 'styled-components'
import EndCredit from '../EndCredit'

export const Box = styled.div`
  padding: 40px 30px;
  background: #040018;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Row = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 300;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: 600;
`

const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href='#'>Aim</FooterLink>
              <FooterLink href='#'>Vision</FooterLink>
              <FooterLink href='#'>Why Us?</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href='#'>Jobs</FooterLink>
              <FooterLink href='#'>Admissions</FooterLink>
              <FooterLink href='#'>Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href='tel:+923077879988'>0307 787 9988</FooterLink>
              <FooterLink href='tel:+923355854455'>0335 585 4455</FooterLink>
              <FooterLink href='#'>Sargodha, Pakistan</FooterLink>
              <FooterLink href='#'>help@orionedu.net</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href='#'>
                <i className='fab fa-facebook-f'>
                  <span style={{ marginLeft: '10px' }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-instagram'>
                  <span style={{ marginLeft: '10px' }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-twitter'>
                  <span style={{ marginLeft: '10px' }}>Twitter</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
      <EndCredit />
    </>
  )
}
export default Footer
