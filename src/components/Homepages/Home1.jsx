import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"




const Home1 = () => {
  return (
    <>

    <div className="w-full h-screen">
      <Parallax pages={2} className="h-screen">
        {/* Background Layer with Imported Image */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="bg-contain bg-center"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <ParallaxLayer
          offset={1}
          speed={0.5}
          className="bg-cover bg-right-top"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        ></ParallaxLayer>
         
        </ParallaxLayer>

        
      </Parallax>
    </div>
    
    </>
  )
}

export default Home1
