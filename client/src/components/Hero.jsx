import React from 'react'
import bgImage from "../assets/oip7.jpg";

const Hero = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className="pt-10 flex items-center justify-between px-4 pb-48 text-center text-sm text-white max-md:px-2 bg-cover bg-center h-screen relative" style={{ backgroundImage: `linear-gradient(rgba(1, 0, 3, 0.65), rgba(1, 0, 7, 0.65)), url(${bgImage})` }}>
            <div>
                <h1 className="pb-10 mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Explore The World with <span className='text-[#ffa843]'>Future quest</span></h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">orem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidun dolore.</p>
                <button type="button" className="w-40 py-3 active:scale-95 transition text-sm text-white rounded-full bg-[#ffa843]">book now</button>
            </div>

            <div>

            </div>
            
        </div>
    )
}


export default Hero