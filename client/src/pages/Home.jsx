import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Subscribe from '../components/Subscribe'
import Services from '../components/Services'


const Home = () => {
  return (
    <div>
        <Hero   />
        <About />
        <Team />
        <Services />
        <Testimonials />
        <Subscribe />
        <Contact />
    </div>
  )
}

export default Home