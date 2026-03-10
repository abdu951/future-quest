import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex max-h-18 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-all ${
        sticky
          ? "bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="logo" className="h-45 w-auto" />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-white">
        <li className="relative group">
          <button className="flex items-center gap-1 cursor-pointer">
            Opportunities
            <FiChevronDown className="text-lg text-[#ffa843]" />
          </button>

          {/* Dropdown */}
          <ul
            className={`opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 absolute left-0 mt-3 w-40 rounded-md transition-all ${
              sticky
                ? "bg-white/90 text-gray-700 shadow-md"
                : "bg-black/70 backdrop-blur-md"
            }`}
          >
            <li className="px-4 py-2 hover:text-[#ffa843]">
              <a href="/opportunities/education">Education</a>
            </li>

            <li className="px-4 py-2 hover:text-[#ffa843]">
              <a href="/opportunities/work">Work</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" className="hover:text-[#ffa843]">
            Consultancy
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#ffa843]">
            Resources
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#ffa843]">
            Shop
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-3">
        {/* Cart */}
        <div className="p-2 relative cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5"
              stroke="#ffa843"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="absolute -top-0.5 -right-1 text-xs text-white bg-[#ffa843] w-[18px] h-[18px] rounded-full flex items-center justify-center">
            0
          </span>
        </div>

        <button className="cursor-pointer px-8 py-2 bg-[#ffa843] hover:bg-[#ffa743c0] transition text-white rounded-full">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex gap-5">

        {/* Cart */}
        <div className="pt-2 relative cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5"
              stroke="#ffa843"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="absolute -top-0.5 -right-3 text-xs text-white bg-[#ffa843] w-[18px] h-[18px] rounded-full flex items-center justify-center">
            0
          </span>
        </div>

      <button
        className="text-white text-2xl"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 md:hidden ${
          mobileMenu ? "max-h-[500px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-700">

          {/* Opportunities dropdown */}
          <li>
            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex items-center justify-between w-full"
            >
              Opportunities
              <FiChevronDown
                className={`transition ${
                  mobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileDropdown && (
              <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                <li>
                  <a href="/opportunities/education">Education</a>
                </li>
                <li>
                  <a href="/opportunities/work">Work</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#">Consultancy</a>
          </li>

          <li>
            <a href="#">Resources</a>
          </li>

          <li>
            <a href="#">Shop</a>
          </li>

          <button className="mt-4 bg-[#ffa843] text-white py-2 rounded-full">
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;