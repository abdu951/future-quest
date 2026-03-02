import React from 'react'
import HeroLayout from '../components/HeroLayout'
import bgImage from '../assets/oip22.jpg'
import Card from '../components/Card'
import { useAppContext } from '../context/AppContext'

const WorkOpportunity = () => {

   /** const {opportunities} = useAppContext()
    console.log(opportunities)**/

  return (
    <div>
        <div className=''>
        <HeroLayout
            title="Explore The World with " 
            spanText="Future Quest"
            description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore." 
            buttonText="Book Now"
            bgImage={bgImage}
        />
        </div>

        <div className='flex items-center justify-between m-30'>
            <Card />
            <Card />
            <Card />
        </div>
        
    </div>
  )
}

export default WorkOpportunity