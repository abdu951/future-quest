import React from 'react'
import HeroLayout from '../components/HeroLayout'
import bgImage from '../assets/oip6.jpg'
import Cardd from '../components/Cardd'

const EducationOpportunity = () => {
  return (
    <div>
        <HeroLayout
            title="Explore The World with "
            spanText="Future Quest"
            description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore."
            buttonText="Book Now"
            bgImage={bgImage}
        />
        <div className='flex items-center justify-between m-30'>
            <Cardd />
            <Cardd />
            <Cardd />
        </div>
        <div className='flex items-center justify-between m-30'>
            <Cardd />
            <Cardd />
            <Cardd />
        </div>
        <div className='flex items-center justify-between m-30'>
            <Cardd />
            <Cardd />
            <Cardd />
        </div>
    </div>
  )
}

export default EducationOpportunity