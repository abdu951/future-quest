import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div>
        <Hero   />
        <About />
        <Team />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Home