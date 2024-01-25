import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar'

const RectorMessage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      scrollToTop()
    }, 10)

    return () => clearTimeout(timerId)
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default RectorMessage
