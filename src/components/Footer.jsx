import React from 'react'
// import logo from "../assets/logo.png"
// import { Link } from 'react-router-dom'
// import { BsX } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {


  // const links = [
  //   {path : "/", name : "Home"},
  //   {path: "/menu", name : "Menu"}
  // ]

  const icons =[
    {id:1, icon: FaFacebookF},
    {id:2, icon : FaXTwitter},
    {id:3, icon: FaInstagram }
  ]

  return (
   <footer className=' bg-primary px-4 py-4  flex flex-row items-center justify-center  gap-5 font-cinzel'>
        
      <h1 className='text-lg font-bold font-merriweather' >Follow us @</h1>
    <div className='flex flex-row gap-3 lg:gap-6' >
      {
      icons.map(({id,icon:Icon })=>(
        <Icon size={20}  key={id} className='hover:text-gray-700 cursor-pointer lg:hover:scale-125 duration-300 transition-all' />


      ))

      }
    </div>
    

   </footer>
  )
}

export default Footer





// <footer className=' px-4 py-4 grid grid-cols-2  lg:grid-cols-3  gap-9 font-merriweather'>
//     <div className=' flex flex-col gap-4'>
//       <img
//       className='w-14 h-14'
//       loading='lazy'
//       src={logo} alt="logo" />
//       <h1 className='hidden lg:flex'>Find Your Moment at Coftiek</h1>
//     </div>

//     <div className='flex flex-col gap-3'>
//       <h1 className='text-secondary font-bold text-lg'>Quick Links</h1>
    
//     <nav className='flex flex-col gap-2'>
//       {
//       links.map((link,index)=>(
//         <Link to={link.path} >{link.name}</Link>

//       ))

//       }
//     </nav>
//     </div>
    

//     <div className='col-start-1 col-end-4  items-center  flex flex-row lg:flex-col gap-3'> 
//       <h1>Follow us @</h1>
//     <div className='flex flex-row gap-3' >
//       {
//       icons.map(({id,icon:Icon })=>(
//         <Icon key={id}  />


//       ))

//       }
//     </div>
//     </div>

//    </footer>