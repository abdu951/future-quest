import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Form from './components/Form'

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero   />
        <About />
        <Team />
        <Testimonials />
        <Form />
        <Footer />
    </div>
  )
}

export default App