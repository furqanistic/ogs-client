import React from 'react'
import styled from 'styled-components'
import School from '../img/front_11zon.png'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 510px) {
    height: 40vh;
  }
  @media only screen and (max-width: 410px) {
    height: 30vh;
  }
`
const Image = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
  background-color: #024002;
  position: relative;
  background-position: center bottom; /* Add this line */
  @media only screen and (max-width: 510px) {
    height: 40vh;
  }
  @media only screen and (max-width: 410px) {
    height: 30vh;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  padding: 1rem;
  text-align: center;
`
const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 780px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 510px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 410px) {
    font-size: 1.5rem;
  }
`
const Button = styled.button`
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  font-size: 17px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 0px solid white;
  transition: color 0.5s;
  z-index: 1;
  border-radius: 10px;
  font-weight: 500;
  color: #ffffff;
  background-color: #03043f;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    background: white;
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  &:hover::before {
    top: -30px;
    left: -30px;
  }
  &:hover {
    color: green;
  }
  &active:before {
    background: green;
    transition: background 0s;
  }
  @media only screen and (max-width: 510px) {
    width: 6em;
    height: 2.5em;
    line-height: 2em;
    font-size: 14px;
  }
`
const Slogan = styled.p`
  font-size: 2rem;
  color: white;
  font-weight: 300;
  @media only screen and (max-width: 780px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 510px) {
    font-size: 1rem;
  }
`
const Imp = styled.div`
  height: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #25265f;
  font-weight: 600;
`
const ContactData = () => {
  return (
    <>
      <Imp>Get in Touch 🤙</Imp>
      <Container>
        <Image src='https://lh3.googleusercontent.com/fife/AGXqzDlz5GcGKM6Vc_Mlv0e2Jez69Pe506I4xFhh1c_elswz7KjLMBkROdFRzJIHAYqVPwczieU1fASdNzS2fqF8PopHtw1JKMDOLTqNmGpe9iqZtJl_LC4IJi7t_INGtn7fNygAzjzej7rT7l2ifzUgUXx5M9ql2m48ONMqEx4a9cf3UsVPMwQ4yMYINEaXPb3N_wZW6ClIkUlXZiuZvqG3MuIYHWkIZhbF1CuWNhfrGQFDq438ZSIODoyTFFcEkMx03spz4YUlGpgaOZZRjHNSB33jD69cXcw0QrEBgUoxSLO0KHHmfN3JvgOP_1j8QL4t4oYSQ9By6cOkhhpeG2rZw-hC3PFozskesU7SXEDjhsTNMCUJ1RzYc2Llzim9VJCLWj4Ve0wtoqTwrXUWUxtA-ktdQ5qti5-TPX9EUDsdDDyUVw3Jnz69fhkCuxirJ6zFJNx-eucFpDUuCJEkGPaMi8pEihaGXiouxh1cB57EUUPM98E1nhAtYWCHVahVKO1vNc7ylT3jROtbyPTjOi6SKOBvch0f_vKHkWnHDdzOATELQlfapRBlKoeHFMwyrPXC9i0ugIPuE_QEPzE0c-QKF_blDe2XfafFvj8gdSdna-5aA1dxSvRrNys4MKNlo8BFX89dw65vRCBUgPrJHJLvSPjRDrZ80ZkieGsvd9TiUa8zI3MEbd6tUnOcAKSPnbdXgtlW_VOvBoz_DTVjZETcf8fvLunyKjbOR_4EueqNO6mC0QBCfcUMmHf9Ch4a3muHQ-JBoxngLpLJu58n-VsFIA8JNt-rhviZ3-JuMvlvVZ-25r68Z7-OqNr6UwKBfhkc_t26RYpvrNlP-Ei_ZgHKLbO0GGlEcfm5vCuOu7g4H2ns79VlGeV4U9R6RCRYPxg4zaPO23ZigPibmTUiIxGpIWit91fWOQIms4Z7xYYiICrxUIw_4bddP_TU6wNWdXtyKvqrTbsOtoQnITjMkTw3Rz8ph-VMNtMQh68lK2FqAKTkFuQnNA_DzJInRRBiTU9VeuGB0WGW-sHTSn8CPqj2BdbAu1EIiyuCbG859_MWTz67FCaY9VMaqYdXmo9BbpSv8W-kuXRlocykilQVHBW7Ix1TWT9zMgMne3SfZuMgqohykHfdTXtiCI-6tRCvxCrtYm_Rcz3d7Br6eUasEfr57eDm5JCYFFr_Fl2zcn2D1eQgfUf08Z9V2tj8tYt-rD1hSfzMT_2Ur7hFgaIlVRGxLc9y9zlstLTj6cpO40niYU4n9ebryQV-_GVSmt4_chPvMKNcQZANtJC_4eHkpjEK-cPqxrfvFXKtYsxdINV3EABgYGqhVvLJmXS_pua9vbHuG8-1UDTmUVhZsp5UbimLYgMS67slzST_sorGPXqVG-vAlspmel2ghtdo7IR8Ube7iIKMZ-Xyp21tifJga_LyGdn3WTtNRp_vaj0H5jc_tBqbRNXBjNEUAUk1-RAuzwzlij5Bw6mw2ZDLkqkjBfR3xhoI4dDDuRoRvrawTv2TUu5k8hRh0yCkMEmwE-Ufz7rgfZR694zDGiZ_wP_KJZgVJumLvPJfG-FVefeFfd_k-3B33GUe_0WHfyDY3g-nYgRF26zDVfXsViTx1TBRqEEu-L5o6MRc6gwA9P1ATw5e1alxCIT9NoFut1ysshWrbgpemWI4hAHaiIIQjF75JwjV0mEs2T9XHDumm8gbMx8pRZG7ngwb8swU6_ht5qUvBJs6LH4Ic_oHfDwgcZlYUI4e2cqmqFn_0CnE0F_YkFk5nGZsYkdgQ94CtmQ=w1270-h947' />
        <Information>
          <Title>Orion Grammer School</Title>
          <a href='tel:+923077879988'>
            <Button>Contact</Button>
          </a>
          <Slogan>Making you proud is our vision!</Slogan>
        </Information>
      </Container>
    </>
  )
}

export default ContactData
