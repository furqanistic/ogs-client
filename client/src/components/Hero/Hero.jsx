import React from 'react'
import Footer from '../Footer'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className='container'>
        <div className='content'>
          <h1 className='title'>Greetings, I'm Waqas</h1>
          <p className='description'>
            Dear Students, Parents, and Educators ! It is with immense joy and
            pride that I extend a warm welcome to each of you to The Orion
            School. As the RECTOR, I am honored to lead this institution into a
            realm of boundless possibilities. The Orion School stands as a
            beacon of excellence, committed to fostering not just academic
            achievement but also the holistic development of every individual
            who passes through our doors.
            <br></br>
            <br></br>
            Our dedicated team of educators is passionately devoted to
            cultivating an environment where curiosity, creativity, and critical
            thinking thrive. Here, we aim to nurture not just bright minds but
            also compassionate hearts and resilient spirits. At The Orion
            School, we believe in the power of collaboration, innovation, and a
            deep-rooted commitment to lifelong learning. Together, let us embark
            on a journey where dreams are nurtured, talents are honed, and
            aspirations are realized.I invite you all to be an integral part of
            this exciting chapter in education, where we shall strive to make a
            positive impact
            <br></br>
            <br></br>
            on the world through knowledge, integrity, and empathy.Welcome
            aboard, and let us chart a path to success and fulfillment together.
            <br></br>
            <br></br>
            Warm regards <br></br>
            <br></br>Waqas Zaheer<br></br> Rector, The Orion School
          </p>
        </div>
        <img
          src='https://github.com/furqanistic/ogs-client/blob/main/client/src/img/img.png?raw=true'
          alt='Hero image of me'
          className='heroImg'
        />
        <div className='topBlur' />
        <div className='bottomBlur' />
      </section>
      <Footer />
    </>
  )
}

export default Hero
