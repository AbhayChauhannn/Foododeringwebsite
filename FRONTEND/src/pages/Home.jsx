// import React from 'react'
import About from '../compoents/About'
import Footer from '../compoents/Footer'
import HeroSection  from '../compoents/HeroSection'
import Menu from '../compoents/Menu'
import Qualities from '../compoents/Qualities'
import Reservation from '../compoents/Reservation'
import Team from '../compoents/Team'
import WhoAreWe from '../compoents/WhoAreWe'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default Home
