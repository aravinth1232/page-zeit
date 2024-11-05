import React, { useState, useRef, useEffect } from 'react';
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import { TypeAnimation } from 'react-type-animation';
import TextTransition, { presets } from 'react-text-transition';
 
const Heading = () => {

  


  return (
    <>
    
    <TypeAnimation
      sequence={[
        'Welcome to Coftiek',
        1000, 
        'Welcome to ',
        1000, 
        
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='text-3xl  md:text-5xl text-secondary font-cinzel inline-block
       font-bold '
      // style={{
      //    fontSize: '3rem', display: 'inline-block', 
      //     fontFamily : 'cinzel',
      //     fontWeight: 700,
      //   }}
    />
   
    </>
  );
};

const TEXTS = [ 
  'Brewed to Perfection', 
  'Awaken Your Senses',
  'Served with Love', 
  ];

const Heading1 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500, // every 1.5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 
    className=' text-2xl md:text-3xl font-medium  font-poppins opacity-80  text-secondary '
    >
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
};


const Herosection = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      // const { width } = imageRef.current;
      
      // let mouseX = 0 ;
      // if(mousePosition.x < 10){
      //   mouseX = -200
      // }
      // else 
      const mouseX = mousePosition.x

     const horizontalOffset =  (mouseX / window.innerWidth) * 1 * 100 
    
    //  console.log(horizontalOffset)
      

      imageRef.current.style.transform = `translateX(${horizontalOffset}px)`;
    }
  }, [mousePosition]);


  return (
   
    <>

    <div className='   h-svg md:h-screen flex flex-col md:flex-row  justify-center md:justify-start md:items-center pt-28 md:pt-0  '>
    <div className='  flex-1 px-4  md:px-8 flex flex-col gap-5 ' >
    
    <div className=' flex flex-col gap-10 ' >
    <div className='flex flex-col gap-5'>
    <Heading />
    <Heading1  />
    </div>
    <div className='self-end md:self-start'>
    <button className="  px-6 relative inline-block py-3 font-bold text-primary lg:hover:text-secondary bg-secondary border-2 border-secondary  overflow-hidden group   ">
      <span className="relative z-10 ">Grab your Drink</span>
     
      {/* Background */}
      <span className="absolute inset-0 w-full h-full bg-primary transform scale-y-0 lg:group-hover:scale-100 transition-transform duration-300 ease-out "></span>
    </button>
    </div>
    </div>
    
   
      {/* <h1 className=' flex flex-col gap-3 items-center ' >
        <span className='text-4xl font-merriweather  capitalize' >Welcome to <span className='text-secondary font-bold'>Coftiek</span> </span> 
         <span className='text-3xl font-merriweather' >Where Coffee Meets Comfort</span></h1> */}
    </div>
   

    
   <div className=" flex-1  relative  overflow-hidden h-full   ">
    {/* <h1 className="text-4xl font-bold">Coftiek</h1> */}
    <img 
     ref={imageRef}
      className="hidden md:block w-full  object-cover h-full transition-all duration-100 ease-in"
      src={img1} 
      alt="" 
    />
    <img 
      className=" md:hidden w-full  object-cover h-full"
      src={img1} 
      alt="" 
    />
  
  </div>
  
  <div className='absolute     w-full h-full'>
        <img className='cbg w-full md:w-[80%] h-full opacity-20 object-fill md:object-cover' src={img2} alt="bg" />
        
      </div>
  </div>
      
     

  </>
  )
}

export default Herosection
