import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { axiosInstance } from '../../config'
import { loginStart, loginSuccess } from '../../redux/userSlice'
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideIn = keyframes`
  0% {
    transform: translate(-50%, -55%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`

const labelAnimation = keyframes`
  0% {
    top: 0;
    left: 0;
    color: #fff;
    font-size: 16px;
  }
  100% {
    top: -20px;
    left: 0;
    color: #fff;
    font-size: 12px;
  }
`

const btnAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`

const LoginCardWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  transform: translate(-50%, -55%);
  background: #1d2acc;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  animation: ${slideIn} 0.5s ease-in-out, ${fadeIn} 1s ease; /* added fadeIn here */
  @media (max-width: 400px) {
    width: 320px;
    padding: 25px;
  }
`

const Title = styled.p`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`

const UserBox = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  border-radius: 0;
  -webkit-appearance: none;

  &:focus ~ label,
  &:valid ~ label {
    animation: ${labelAnimation} 0.5s forwards;
  }
`

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`

const SubmitButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 3px;
  background-color: #0e19bf;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #272727;
    border-radius: 5px;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #fff);
    animation: ${btnAnimation} 1.5s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #fff);
    animation: ${btnAnimation} 1.5s linear infinite;
    animation-delay: 0.375s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #fff);
    animation: ${btnAnimation} 1.5s linear infinite;
    animation-delay: 0.75s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #fff);
    animation: ${btnAnimation} 1.5s linear infinite;
    animation-delay: 1.125s;
  }
`

const SignUpText = styled.p`
  color: #aaa;
  font-size: 14px;
`

const SignUpLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    background: transparent;
    color: #aaa;
    border-radius: 5px;
  }
`
const Wrap = styled.div`
  height: 100vh;
  object-fit: cover;
  background-color: #0b0a45;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%231d2acc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232c23aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%230062f2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%230051ca' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23007ee4' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230068bd' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%230091b1' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23007691' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2300a070' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23008158' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2316aa34' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%230f8822' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  background-position: center;
`
const Message = styled.p`
  color: #ff1c1c;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  font-style: italic;
`
const LoginCard = () => {
  const [setError, showSetError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleLogin()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [setError])

  const handleLogin = async () => {
    dispatch(loginStart())
    try {
      const res = await axiosInstance.post('/auth/signin', {
        email,
        password,
      })
      dispatch(loginSuccess(res.data))
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    } finally {
      showSetError(true)
    }
  }

  return (
    <Wrap>
      <LoginCardWrap>
        <Title>Faculty Portal</Title>
        <UserBox>
          <Input
            required
            type='text'
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            autoComplete='off'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
          />
          <Label>Email</Label>
        </UserBox>
        <UserBox>
          <Input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
          />
          <Label>Password</Label>
        </UserBox>
        {setError && (
          <Message>Oops! Wrong password. Verify and retry...</Message>
        )}
        <SubmitButton onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </SubmitButton>
      </LoginCardWrap>
    </Wrap>
  )
}

export default LoginCard
