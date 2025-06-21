import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Social from './Components/Social/Social'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Projects />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App