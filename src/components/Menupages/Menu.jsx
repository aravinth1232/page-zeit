import React, { useState,  useEffect } from 'react'


import Menus1 from './Menus1'
import Menus2 from './Menus2';
import Menus3 from './Menus3';
// import Footer from '../Footer';
// import m4 from "../../assets/m4.jpg"
// import m5 from "../../assets/m5.jpg"
// import m6 from "../../assets/m6.jpg"










const Menu = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);


  const tabs = [
    { id: 0, label: 'Coffee Classics', content: <Menus1 /> },
    { id: 1, label: 'Signature Drinks', content: <Menus2 /> },
    { id: 2, label: 'Non-Coffee Options', content: <Menus3 /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
  
   <>
      <main className='bg-secondary'>
      <div className="w-full px-2 py-4 bg-secondary text-primary  ">
      {/* Tab headers */}
      <div className="flex lg:gap-8 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-1 px-2 text-base font-semibold ${
              activeTab === tab.id
                ? ' border-2 border-secondary bg-primary text-secondary '
                : 'text-primary hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="p-4">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
      

    


    </main>
      
    
  
    </>
  )
}

export default Menu
