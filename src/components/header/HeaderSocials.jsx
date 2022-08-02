import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/piotr-zawadzki-177042135/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/phszawadzki" target="_blank"><FaGithub/></a>



        {/* <a href="https://www.dribbble.com/" target="_blank"><FaDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials