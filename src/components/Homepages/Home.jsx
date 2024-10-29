import React from 'react'
import { Parallax, Background } from 'react-parallax';
import img2 from "../../assets/4.png"
import Herosection from './Herosection';
import Herosection2 from './Herosection2';
import Footer from '../Footer';


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
    
     backgroundPosition: '100% 100%',
    objectFit: 'cover', // Ensures the image covers the container
  }}
    bgImage={img2} 
     strength={500}>

        <Herosection2 />     


    </Parallax>

    <Footer />
    </>
  )
}

export default Home
