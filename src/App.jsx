import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import PortfolioDesign from './components/portfolio/PortfolioDesign'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <Portfolio/>
        {/* <PortfolioDesign/> */}
        <Testimonials/>
        <Footer/>
        
    </>
  )
}

export default App