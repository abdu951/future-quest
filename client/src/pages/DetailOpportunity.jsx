import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import HeroLayout from "../components/HeroLayout";
import bgImage from '../assets/oip6.jpg'
import { IoArrowBack } from "react-icons/io5";

const DetailOpportunity = () => {
  const { id } = useParams();
  const { axios, navigate } = useAppContext();

  const [opportunity, setOpportunity] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOpportunity = async () => {
    try {
      const { data } = await axios.get(`/api/opportunities/${id}`);
      setOpportunity(data);
    } catch (error) {
      toast.error("Opportunity not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOpportunity();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading opportunity...
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="text-center py-20 text-red-500">
        Opportunity not found
      </div>
    );
  }

  return (
    <div>
        <HeroLayout
                     title="Opportunity "
                     spanText="Details"
                     description="lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy."
                     buttonText="Book Now"
                     bgImage={bgImage}
          />

      

    <div className="max-w-4xl mx-auto px-6 py-24">

        <div onClick={() => navigate(`/opportunities/${opportunity.category}`)} className="flex gap-2 cursor-pointer text-[#ffa843] hover:text-[#ffa743c0] pb-7">
            <IoArrowBack size={20} />
            <p>Back to Opportunities</p> 
        </div>

      {/* Image */}
      <img
        src={opportunity.image_url}
        alt={opportunity.title}
        className="w-full h-[350px] object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-3xl text-slate-700 font-semibold mt-6">
        {opportunity.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-col gap-4 mt-3 text-sm text-[#ffa843]">
        <span className="bg-gray-100 px-3 py-1 rounded w-fit">
          {opportunity.category}
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded w-fit">
          {opportunity.country}
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-zinc-400 leading-relaxed">
        {opportunity.description}
      </p>

      {/* Apply Button */}
      <a
        href={opportunity.form_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-[#ffa843] hover:bg-[#ffa743c0] text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Apply Now
      </a>

    </div>
    </div>
  );
};

export default DetailOpportunity;