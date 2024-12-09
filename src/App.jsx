import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import Project from './Components/Project'
import Projectss from './Components/Projectss'
import Footer from './Components/Footer'

function App() {
  
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar />
    <Home />
    {/* <Projects /> */}
    <About />
    <Project />
    <Projectss />
    <Footer />
    </div>
  )
}

export default App
