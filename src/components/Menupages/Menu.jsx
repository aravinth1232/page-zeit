import React from 'react'


import m1 from "../../assets/m1.webp"
import m2 from "../../assets/m2.webp"
import m3 from "../../assets/m3.webp"
// import m4 from "../../assets/m4.jpg"
// import m5 from "../../assets/m5.jpg"
// import m6 from "../../assets/m6.jpg"







const classics =[
  {head: "Espresso", image: m1 },
  {head: "Americano", image: m2 },
  {head: "Macchiato", image: m3 },
  // {head: "Espresso", image: m4 },
  // {head: "Americano", image: m5 },
  // {head: "Macchiato", image: m6 },
  // {head: "Vanilla Latte", image: m4 },
  // {head: "Caramel Latte", image: m5 },
  // {head: "Mocha Latte", image: m6 },
]








const Menu = () => {
  return (
  
    <main className='bg-primary  pt-28 w-full px-4 mx-auto  shadow-md'>
      
     
    
       {/* <div className=' grid grid-cols-3 justify-items-center gap-7'>
      {

        classics.map((classic,index) =>
        
          <div key={index} 
          className='flex flex-col justify-start bo items-center bg-primary transition-all lg:duration-300  border-b-2   bo'
          >
            <div className='overflow-hidden  ' >
            <img 
            
            className='w-96 h-96 object-cover lg:hover:scale-125  tt lg:hover:opacity-80  lg:duration-300   cursor-pointer '
            src={classic.image} alt={classic.head} loading='lazy' />
            </div>
            <h1 className='bg-secondary w-full text-center text-primary px-4 py-2 bod text-2xl border-primary font-merriweather '>{classic.head}</h1>


        </div>
        


        )

      }

    </div> */}

      
    </main>
  
  
  )
}

export default Menu
