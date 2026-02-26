import React, { useEffect, useState } from 'react'
import logo from "../assets/logo-4.png"
import chevron from "../assets/chevron-down.svg"
import { assets } from "../assets/assets"
import { FiChevronDown } from "react-icons/fi";



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
            <ul className="hidden sm:flex items-center gap-8">
                <li className='relative group'>
                    <button className='flex items-center gap-1 cursor-pointer'>Opportunities <FiChevronDown className="text-lg text-[#ffa843]" /></button>

                     {/* Dropdown Menu */}
                   <ul className={`opacity-0 invisible group-hover:opacity-100 
                         group-hover:visible duration-300 absolute left-0 mt-2 w-40 rounded-md transition-all ${sticky ? ' bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-md' : 'bg-transparent'} `}  
                         >
            
                   <li className="px-4 py-2 hover:text-[#ffa843]">
                    <a href="/education">Education</a>
                   </li>

                   <li className="px-4 py-2 hover:text-[#ffa843]">
                     <a href="/work">Work</a>
                   </li>

                   </ul>
                </li>
                <li><a href="#">Consultancy</a></li>
                <li><a href="#">resources</a></li>
                <li><a href="#">Shop</a></li>
             </ul>
             
             <div className='flex items-center gap-5'>
                <div className="relative cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#ffa843" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[#ffa843] w-[18px] h-[18px] rounded-full">0</button>
                </div>
                <button className="cursor-pointer px-8 py-2 bg-[#ffa843] hover:bg-[#ffa74385] transition text-white rounded-full">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar