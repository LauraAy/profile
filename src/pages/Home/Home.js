import React from 'react'
import Navbar from '../../components/Navbar'
import AboutCard from'../../components/AboutCard'
import ThreeLinkCards from '../../components/ThreeLinkCards'

const Home = () => {
  return(
    <>
     <Navbar/>
     <AboutCard />
     <ThreeLinkCards />
    </>
  )
}

export default Home