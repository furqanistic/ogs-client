import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #0b0a45;
  padding-top: 1.5rem;
`
const bannermove = keyframes`
  from {
    left: 0px;
  }
  to {
    left: -2700px;
  }
`
const PhotoBanner = styled.div`
  position: relative;
  height: 380px;
  margin-bottom: 30px;
  display: flex;
  width: 100%;
  animation: ${bannermove} 50s linear infinite alternate-reverse;

  @media only screen and (max-width: 540px) {
    height: 300px;
    animation: ${bannermove} 50s linear infinite alternate-reverse;
  }
  @media only screen and (max-width: 420px) {
    height: 220px;
  }
`

const Photo = styled.img`
  margin: 0px 25px;
`

const PostsSlide = () => {
  return (
    <Wrapper>
      <PhotoBanner>
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/426307523_122107373426201093_2980450659573351155_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ts3XSJMTIHkAX8KCLH4&_nc_ht=scontent.fisb1-2.fna&oh=00_AfDtitnx1g5EJWpzBvVEmqDjI6P8M7Mv54NJh8GG-mw5XA&oe=65DEE622'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/426289502_122107379192201093_3833743251024103483_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UKqAetWVw3MAX_7VztW&_nc_ht=scontent.fisb1-2.fna&oh=00_AfB8PGUhafC3Sl_Ko1JsKxCwG8xe28_tLL2kj7Zdie-fag&oe=65DDCC97'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/425840910_122107383092201093_5450682240384658726_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Qnfm7ZfsWL8AX8o8Kd7&_nc_ht=scontent.fisb1-2.fna&oh=00_AfAouZHDnq9gnHe28dqzEGY5wvnfsplGsBMl64oSC6DW0w&oe=65DDE032'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428357276_122116183634201093_210875983273347003_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=p-jMV7WjuUEAX_G_sG8&_nc_ht=scontent.fisb1-2.fna&oh=00_AfCS9IqfjXdxe29CIinugR7wtiW0fDQbu2pmpq71EuAV6g&oe=65DD22EC'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428358394_122116187144201093_8473813952393205823_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=crCxx-rxxvsAX8YsX8h&_nc_ht=scontent.fisb1-2.fna&oh=00_AfC04BDr-BIo_5iRbErH8susBVNn9B4cthUjZmN3zvDV9A&oe=65DE01B7'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428442106_122116188380201093_4667769834375530980_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=_ySOETyF-IAAX_96PEh&_nc_ht=scontent.fisb1-2.fna&oh=00_AfCmpdYpS-J8Aq7Veb7hzIUoRY5PxfeOqIM3PDDg5lRMVw&oe=65DE8335'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428395580_122116190258201093_6279419641940793761_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=GCbOzEKB__QAX8xbjqE&_nc_ht=scontent.fisb1-2.fna&oh=00_AfDl9X6dIG_adWmlZ0dWS4VzfA-ngJN6BV1agGEl2rGIrw&oe=65DD9E24'
          alt=''
        />

        <Photo
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428353319_122116191056201093_1406214252179804362_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8Zx2utaTITcAX9C2-rx&_nc_ht=scontent.fisb1-2.fna&oh=00_AfAQ0ooNBWb2vN1sf-WctuivPDCtpTTrVrRJ5gnHfJodUg&oe=65DE7B0C'
          alt=''
        />
        <Photo
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428599052_122118510074201093_4927315071263186079_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1M148Od9hVAAX_m_5Ts&_nc_ht=scontent.fisb1-2.fna&oh=00_AfCAjGSLmn-7G-RJHCfIBA6jURjMP_51TumOXRW2nRGBHg&oe=65DD7A12'
          alt=''
        />
        <Photo
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428610905_122118510674201093_2918713631607290057_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=y-Fsq9HND2cAX-QdmrD&_nc_ht=scontent.fisb1-2.fna&oh=00_AfClPyLjyr0n2DFesC_LNmUCVFXzlOTGFtVzUzsXbjTrYA&oe=65DE0D8E'
          alt=''
        />
        <Photo
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428615574_122118511526201093_3054764171149893689_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=IxQBr_54Az4AX-7DDCv&_nc_ht=scontent.fisb1-2.fna&oh=00_AfCa7cbArj4vvORsK4T9lkFAyBg7Io5EPizDWJT2yIux7Q&oe=65DF0110'
          alt=''
        />
        <Photo
          className='first'
          src='https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/428610818_122118512198201093_3887979851232780431_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Q7ldBnLA558AX81vnmq&_nc_ht=scontent.fisb1-2.fna&oh=00_AfB9JjD9LEuESucnQllIjSGHQr_TTSmTCwtK8cfR2NS9Sg&oe=65DD9972'
          alt=''
        />
      </PhotoBanner>
    </Wrapper>
  )
}

export default PostsSlide
