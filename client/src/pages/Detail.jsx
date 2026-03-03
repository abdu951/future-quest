import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import bgImage from '../assets/oip6.jpg'
import HeroLayout from '../components/HeroLayout';


const Detail = () => {

     const { id } = useParams();
     const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/opportunities/${id}`)
      .then((response) => {
        setOpportunity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

   if (!opportunity) return <p>Loading...</p>;

   return (
       <div>
          <HeroLayout
             title="Explore The World with "
             spanText="Future Quest"
             description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore."
             buttonText="Book Now"
             bgImage={bgImage}
                  />
        <div className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-full h-fit m-50">
            <img className="rounded-md max-h-80 w-full object-cover" src={opportunity.image_url} alt={opportunity.title} />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                {opportunity.title}
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-2">
                {opportunity.description}
            </p>
            <a href={opportunity.form_link}>
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">
                Apply Now
            </button>
            </a>
        </div>
        </div>
    );
}

export default Detail