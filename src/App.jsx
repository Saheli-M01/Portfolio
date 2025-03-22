import React from 'react';
import Hero from './Components/Hero';
import CustomNavbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <About />
      <Project />
    </div>
  )
}

export default App
