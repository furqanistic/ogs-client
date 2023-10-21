import React from 'react'
import PhotoGrid from '../components/PhotoGrid'
import Navbar from '../components/Navbar'
import AboutInfo from '../components/About/AboutInfo'
import Grid from '../components/Grid'

const Gallery = () => {
  const nameOne = 'Grounds'
  const nameTwo = 'Library'
  const nameThree = 'Auditorium'

  return (
    <>
      <Navbar />
      <PhotoGrid />
      <Grid name={nameOne} />
      <Grid name={nameTwo} />
      <Grid name={nameThree} />
    </>
  )
}

export default Gallery
