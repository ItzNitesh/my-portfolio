import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Skills from '../Components/Skills'
import MyProject from '../Components/MyProject'
import Contact from '../Components/Contact'

const Layout = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Skills/>
      <MyProject/>
      <Contact/>
    </>
  )
}

export default Layout