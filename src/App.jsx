import React from 'react';
import Hero from './Components/Hero';
import CustomNavbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Resume />  
      <Contact />
      <Footer />
    </div>
  )
}

export default App
