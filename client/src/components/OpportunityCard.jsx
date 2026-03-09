 import React from 'react'
 
 const OpportunityCard = ({opportunity}) => {
   return (
        <div className="p-4 bg-white hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <img className="rounded-md max-h-40 w-full object-cover" src={opportunity.image_url} alt={opportunity.title} />
            <p className="text-gray-900 text-xl font-semibold ml-2 mt-4">
                {opportunity.title}
            </p>
            <p className="text-gray-600 text-sm/6 mt-2 ml-2 mb-2">
                {opportunity.description.length > 100
                 ? opportunity.description.slice(0, 100) + "..."
                 : opportunity.description}
            </p>
            <a href={`/opportunities/${opportunity.category}/${opportunity.id}`}>
            <button type="button" className="bg-[#ffa843] hover:bg-[#ffa743c0] transition cursor-pointer mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded-md text-white text-sm">
                Learn More
            </button>
            </a>
            <a href={opportunity.form_link} target="_blank" rel="noopener noreferrer"></a>
        </div>
    );
 }
 
 export default OpportunityCard;



    
