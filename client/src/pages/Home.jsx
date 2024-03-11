import React from 'react'
import ContactData from '../components/ContactData'
import Footer from '../components/Footer'

import Gallery from '../components/Gallery'

import Navbar from '../components/Navbar'
import News from '../components/News'
import NewsLetter from '../components/NewsLetter'
import Offer from '../components/Offer'
import Rectors from '../components/Rectors'

import PostsSlide from '../components/PostsSlide'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <Navbar />
      <News />
      <Slider />
      <ContactData />
      {/* <PostsSlide /> */}
      <Offer />
      <Gallery />
      <Rectors />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
