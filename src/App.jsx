import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Homepages/Home'
import Menu from './components/Menupages/Menu'
import NavBar from './components/NavBar'
import Contact from './components/Contactpages/Contact'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
   <>
   
    <Router>
    <NavBar />
      <Routes>
      
      <Route path='/' element= { <Home /> } />
      <Route path='/menu' element= { <Menu /> } />
      <Route path='/contact' element= { <Contact /> } />
      
      
      
      </Routes>
    </Router>
   
   </>
  )
}

export default App
