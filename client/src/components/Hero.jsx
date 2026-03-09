{/*import React from 'react'
import bgImage from "../assets/oip7.jpg";

const Hero = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className="pt-40 flex flex-col items-center justify-center px-4 pb-48 text-center text-sm text-white max-md:px-2 bg-cover bg-center h-screen rounded-bl-[30vh] relative" style={{ backgroundImage: `linear-gradient(rgba(1, 0, 3, 0.65), rgba(1, 0, 7, 0.65)), url(${bgImage})` }}>
            <div>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Explore The World with <span className='text-[#ffa843]'>Future Quest</span></h1>
                <p className="mx-auto max-w-2xl dark:text-body-color-dark mb-6 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore.</p>
                <button type="button" className="cursor-pointer w-50 py-4 text-md font-bold text-white rounded-full bg-[#ffa843] hover:bg-[#ffa743c0]">Book Now</button>
            </div>
            
        </div>
    )
}


export default Hero */}



import React from "react";
import bgImage from "../assets/oip7.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Explore the World with{" "}
          <span className="text-[#ffa843]">Future Quest</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl">
          Discover breathtaking destinations, unforgettable adventures,
          and seamless travel experiences designed for explorers like you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-8 py-4 font-semibold rounded-full bg-[#ffa843] hover:bg-[#ff9820] transition duration-300">
            Book Now
          </button>

          <button className="px-8 py-4 font-semibold rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
            Explore Tours
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;