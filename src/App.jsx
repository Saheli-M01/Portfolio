import React from 'react';
import Hero from './Components/Hero';
import CustomNavbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default App
