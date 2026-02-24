import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-secondary bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat relative'>
        <Navbar />
        <Hero   />
    </div>
  )
}

export default App