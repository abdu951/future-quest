import React from 'react'
import HeroLayout from '../components/HeroLayout'
import bgImage from '../assets/oip6.jpg'
import axios from "axios";
import { useEffect, useState } from "react";
import OpportunityCard from '../components/OpportunityCard';

const EducationOpportunity = () => {

    const [opportunities, setOpportunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/opportunities?category=education"
        )

        setOpportunities(data);
      } catch (err) {
        setError("Failed to load opportunities");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [opportunities]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
 
   console.log(opportunities)

  return (
    <div>
        <HeroLayout
            title="Explore The World with "
            spanText="Future Quest"
            description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore."
            buttonText="Book Now"
            bgImage={bgImage}
        />
        <div className="grid md:grid-cols-3 gap-6 p-10 m-auto">
             {opportunities.map((opportunity) => (
               <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
        </div>
    </div>
  )
}

export default EducationOpportunity


