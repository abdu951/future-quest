import React from 'react'
import HeroLayout from '../components/HeroLayout'
import bgImage from '../assets/slider2.png'
import { useEffect, useState } from 'react'
import { useAppContext } from "../context/AppContext";
import OpportunityCard from '../components/OpportunityCard'

const WorkOpportunity = () => {

  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { axios } = useAppContext();
  
  
      useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            "/api/opportunities?category=work"
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
              title="Opportunities for "
              spanText="Work"
              description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy."
              buttonText="Book Now"
              bgImage={bgImage}
          />
          <div className="grid md:grid-cols-3 gap-y-16 ml-24 py-28">
               {opportunities.map((opportunity) => (
                 <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                ))}
          </div>
      </div>
    )
  }
export default WorkOpportunity