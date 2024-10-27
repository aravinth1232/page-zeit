import React from 'react'
import { Parallax, Background } from 'react-parallax';
import img2 from "../../assets/2.png"
import Herosection from './Herosection';


const Home = () => {
  return (
    <>
    <Parallax  
  className="h-screen bg-primary"
  // bgImage={img1}
  strength={500}
  bgImageStyle={{
    height: '100%',
    // Adjust background position as needed
    objectFit: 'cover', // Ensures the image covers the container
  }}
>
  <Herosection />

</Parallax>
    <Parallax  
   className='h-screen '
   bgImageStyle={{
    
    height: '100%',
     backgroundPosition: '0% 90%',
    objectFit: 'cover', // Ensures the image covers the container
  }}
    bgImage={img2} 
     strength={500}>
       <div className='flex flex-row h-[500px] '>
        
        {/* <img 
        className='flex-1 w-[400px] h-[700px]  object-contain'
        src={img1} alt="" /> */}

       </div>
    </Parallax>

    
    </>
  )
}

export default Home
