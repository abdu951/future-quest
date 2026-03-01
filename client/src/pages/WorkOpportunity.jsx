import React from 'react'
import HeroLayout from '../components/HeroLayout'
import bgImage from '../assets/oip22.jpg'
import Card from '../components/Card'
import Cardd from '../components/Cardd'
import { useAppContext } from '../context/AppContext'

const WorkOpportunity = () => {

    const {opportunities} = useAppContext()


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
            {opportunities.map((opportunity) => {
                return <Cardd key={opportunity._id} {...opportunity} />
            })}
        </div>
    </div>
  )
}

export default WorkOpportunity