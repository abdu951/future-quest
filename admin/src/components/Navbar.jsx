import React from 'react'
import logo from "../assets/logo-4.png"

const Navbar = () => {
  return (
    
        <div className="max-h-18 flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <a href="http://localhost:5174/">
                    <img className="w-55 h-45" src={logo} alt="logo" />
                </a>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
        </div>
  )
}

export default Navbar