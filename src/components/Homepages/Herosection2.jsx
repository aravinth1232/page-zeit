import React from 'react'
import img1 from "../../assets/blob(2).svg"
import { FaCoffee } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineRocket } from "react-icons/ai";



const motos = [
{id:1, name: 'Quality', icon:  FaCoffee  },
{id:2, name: 'Customer-Centric', icon: MdPeopleOutline  },
{id:3, name: 'Community', icon: FaHandsHelping  },
{id:4, name: 'Innovation', icon: AiOutlineRocket  },

]



const Herosection2 = () => {
  return (
  <> 
    <section className='px-8  pt-24  grid grid-cols-2 gap-6 justify-items-center text-primary' >
    <div 
    className='text-3xl py-4 px-4 backdrop-blur-sm font-cinzel lg:hover:backdrop-blur opacity-80  transition-all duration-200'>
    At Coftiek, our mission is simple: to craft the perfect coffee experience. We're passionate about serving high-quality, sustainably-sourced beans and creating a warm, welcoming environment that feels like home. Our team works hard to provide you with coffee that's rich in flavor, whether it's a classic brew or one of our seasonal specials.
    </div>
    
    <div
    className='  grid grid-cols-2  content-center gap-6 font-merriweather  '
    >
      {
      motos.map(({id,name,icon:Icon}) =>

        <div 
        className=' lg:hover:scale-110 transition-all duration-200 hover:cursor-pointer flex flex-col justify-center items-center py-4 px-4 rounded-full shadow-md backdrop-blur-sm lg:hover:backdrop-blur gap-3'
        key={id}
        >
        <Icon size={50} className='opacity-80 text-none' />
        <h1 className='text-xl' >{name}</h1>

          
        </div>

      
      
      )}


    </div>




    </section>


  </>
  )
}

export default Herosection2
