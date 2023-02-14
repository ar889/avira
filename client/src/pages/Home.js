import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero_section'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home