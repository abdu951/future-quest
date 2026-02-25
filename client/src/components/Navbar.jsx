import React, { useEffect, useState } from 'react'
import logo from "../assets/logo-4.png"
import { assets } from "../assets/assets"


const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 max-h-18 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-white transition-all ${sticky ? ' bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>

            <a href="https://prebuiltui.com">
                <img src={logo} alt="logo" className='w-55 h-45'/>
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="#">Opportunity</a>
                <a href="#">Consultancy</a>
                <a href="#">resources</a>
                <a href="#">Shop</a>
             </div>
             
             <div className='flex items-center gap-5'>
                <img src={assets.cart} alt="cart" className="bg-white w-6 opacity-80" />
                
                <button className="cursor-pointer px-8 py-2 bg-white hover:bg-gray-100 transition text-black rounded-full">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar