import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import img2 from "../../assets/home2bg.png"
import Herosection from './Herosection';
import Herosection2 from './Herosection2';
import Herosection3 from './Herosection3';
import Footer from '../Footer';


const Home = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Parallax  
  className="min-h-screen bg-primary"
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
   className=' min-h-screen bg-secondary  '
   bgImageStyle={{

    objectFit: 'cover', // Ensures the image fills the container
    backgroundPosition: 'center top',
    opacity:'0.2',
    height: '120%',
    // '@media (min-width: 768px)':
    //  { height: '100%' }, 
    
  }}
    bgImage={img2} 
     strength={500}>

        <Herosection3 />     


    </Parallax>


  <Parallax>

    <Footer />
  </Parallax>
        </>
  )
}

export default Home
