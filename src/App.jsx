import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App