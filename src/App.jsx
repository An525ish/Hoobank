import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import Card from './components/Card'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats/>
      <Business/>
      <Billing/>
      <Card/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App