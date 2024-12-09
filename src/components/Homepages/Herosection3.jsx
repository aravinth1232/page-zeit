import React from 'react'
import { FaCoffee } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineRocket } from "react-icons/ai";

import drinks1 from "../../assets/drinks1.png"
import drinks2 from "../../assets/drinks2.png"
import drinks3 from "../../assets/drinks3.png"

import story1 from "../../assets/story_1.jpg"
import story2 from "../../assets/story_2.png"


const motos = [
{id:1, name: 'Quality', icon:  FaCoffee  },
{id:2, name: 'Customer-Centric', icon: MdPeopleOutline  },
{id:3, name: 'Community', icon: FaHandsHelping  },
{id:4, name: 'Innovation', icon: AiOutlineRocket  },

]


const bests = [
  {id:1,name: "Classic Cold Brew", img: drinks1},
  {id:2,name: "Caramel Hazelnut Latte", img: drinks2},
  {id:3,name: "Matcha Vanilla Iced Latte", img: drinks3},
]


const storys = [
  { 
    id:1, 
    img: story1 , 
    description :"Coftiek began as a dream fueled by the love of coffee and the desire to bring people together. Our founder, a coffee enthusiast who spent years exploring coffee cultures around the world, wanted to create a space where people could gather, connect, and share memorable experiences over a perfect cup of coffee." 
  },
  {   
      id:2, 
      img: story2 , 
      description :"From the very beginning, Coftiek has been committed to quality and craftsmanship. We source our coffee beans from sustainable farms where each bean is nurtured and harvested with care. Every drink served at Coftiek is a testament to our dedication to bringing out the best flavors, from the rich notes of our signature espresso to the refreshing taste of our cold brews." 
    },
]



const Herosection3 = () => {
  
  return (
  <> 
    <section className='px-2 lg:px-8  py-4 text-primary'>
    
    
    <div className='py-4 flex flex-col lg:flex-row gap-4'>
    
    <h1 
    className=' text-base lg:text-3xl py-4 px-4 backdrop-brightness-75 lg:hover:backdrop-brightness-110 rounded-md shadow-md font-cinzel  opacity-80  transition-all duration-200 flex-1'>
    <span className='opacity-100 first-letter:text-4xl' > At Coftiek</span>, our mission is simple: to craft the perfect coffee experience. We're passionate about serving high-quality, sustainably-sourced beans and creating a warm, welcoming environment that feels like home. Our team works hard to provide you with coffee that's rich in flavor, whether it's a classic brew or one of our seasonal specials.
    </h1>
    <div
    className=' flex-1  grid grid-cols-2  content-center gap-6 font-merriweather  '
    >
      {
      motos.map(({id,name,icon:Icon}) =>

        <div 
        className=' lg:hover:scale-110 transition-all duration-200 hover:cursor-pointer flex flex-col justify-start items-center py-4 px-4 bod  shadow-md backdrop-brightness-75 lg:hover:backdrop-brightness-110 gap-3'
        key={id}
        >
        <Icon size={50} className='opacity-80 text-none' />
        <h1 className='text-sm  lg:text-xl' >{name}</h1>

          
        </div>

      
      
      )}


    </div>




    </div>

    <div className='py-4 lg:py-4 lg:px-4  rounded-md w-full flex flex-col bo gap-5'>
    
    <h1 className=' px-4 py-2 rounded-md bg-primary text-secondary text-2xl lg:text-4xl font-cinzel opacity-70' >The Story of Coftiek: A Passion for Coffee</h1>

    <div className='flex flex-col gap-4 '>
      {
        storys.map((story)=>
       
          <div key={story.id}
          className= {`flex  flex-col lg:flex-row  justify-start items-center gap-5 bo 

            ${story.id % 2 !=0 ? "lg:flex-row" : "lg:flex-row-reverse" }
          
          `}
          >

            <div className='w-72 h-72  lg:w-96 lg:h-96 overflow-hidden rounded-md flex-1 bo ' >
              <img
              className='w-full h-full object-cover lg:hover:scale-105  bod opacity-90   lg:duration-300   cursor-pointer'
              src={story.img} alt="coffee image" />
            </div>
            <div className='flex-1'>
              <h1  
              className='px-4 font-merriweather text-base lg:text-2xl opacity-80 text-primary'
              >{story.description}</h1>
            </div>




          </div>
      
        
        )
      }
    </div>


    </div>
    
    <div className='py-4    flex flex-col border-primary gap-5 '>
      
      <h1 className=' px-4 py-2 rounded-md text-center bg-primary text-secondary text-4xl font-cinzel opacity-70'>Top Picks</h1>

    <div className=' grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4'>
      {

        bests.map((best) =>
        
          <div key={best.id} 
          className='flex flex-col justify-start items-center  bg-primary opacity-70 transition-all lg:duration-300  border-b-2   bod'
          >
            <div className='overflow-hidden bod ' >
            <img 
            loading='lazy'
            className= 'w-72 h-72 lg:w-96 lg:h-96 object-contain lg:hover:scale-125  lg:hover:opacity-80  lg:duration-300   cursor-pointer'
            src={best.img} alt={best.name} />
            </div>
            <h1 className='bg-secondary w-full text-center px-4 py-2 bod text-2xl border-primary font-merriweather'>{best.name}</h1>


        </div>
        


        )

      }

    </div>
    </div>

    </section>
      

  </>
  )
}

export default Herosection3
