import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ScrambledText from './ScrambledText'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Piotr Zawadzki</h1>
            <h5 className="text-light"><ScrambledText/></h5>
            {/* <CTA/> */}
            <HeaderSocials/>
            <a href="#portfolio" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  ) 
}

export default Header