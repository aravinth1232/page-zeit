import React from 'react'


import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m3 from "../../assets/m3.png"
import m4 from "../../assets/m4.png"
import m5 from "../../assets/m5.png"
import m6 from "../../assets/m6.png"




const Menus2 = () => {



    
const bests = [
    
    {id:1,name: "Iced Latte", img: m6 },
    {id:2,name: "Iced Mocha", img: m4 },
    {id:3,name: "Cold Brew", img: m1 },
    {id:4,name: "Spiced  Latte", img: m6 },
    {id:5,name: "Matcha Latte", img: m2 },
    {id:6,name: "Vanilla Latte", img: m3 },
    
  ]

  

  return (
    <div className='bg-secondary text-primary grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
      {

        bests.map((best) =>
        
          <div key={best.id} 
          className='flex flex-col justify-start items-center  bg-primary opacity-70 transition-all lg:duration-300  border-b-2   bod'
          >
            <div className='overflow-hidden bod ' >
            <img 
            loading='lazy'
            className= 'w-28 h-28 lg:w-96 lg:h-96 object-cover lg:object-contain lg:hover:scale-125  lg:hover:opacity-80  lg:duration-300   cursor-pointer'
            src={best.img} alt={best.name} />
            </div>
            <h1 className='bg-secondary w-full lg:text-center px-4 py-2 bod lg:text-2xl border-primary font-merriweather'>{best.name}</h1>


        </div>
        


        )

      }

    </div>
  )
}

export default Menus2
