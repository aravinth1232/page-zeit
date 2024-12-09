import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScrolled,setIsScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (

    <>
    
    <nav 
     className={`sticky w-full top-0 z-40 transition-all duration-300  grid grid-cols-3 place-items-center  gap-1 lg:gap-0 text-lg lg:text-2xl px-2   ${
      isScrolled ? 'scale-95 lg:scale-90 bg-primary   shadow-lg rounded-2xl  ' : 'border-b border-secondary scale-100 bg-primary backdrop-blur-lg'
    }`} 
    >
    

        <div className={ `flex flex-row  justify-around  transition-all duration-300 
          ${isScrolled ? 'lg:gap-14 gap-3' : 'gap-3 lg:gap-10' }
            `}>
            <NavLink
          to="/"
          className={`new ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }`}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/menu"
          className={`new  ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }`}
        >
          Menu
        </NavLink> */}
        </div>

        
        <div className=" justify-self-center">
            <img
            className="w-20 h-20 lg:w-24 lg:h-24 one"
            src={logo} alt="logo"  />
        </div>
        
        <div className=" justify-self-center">

        <NavLink
          to="/menu"
          className={`new  ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }`}
        >
          Menu
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={`new  ({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }`}
        >
          Contact
        </NavLink> */}
        </div>
  </nav>
    </>

  )
}



export default NavBar
