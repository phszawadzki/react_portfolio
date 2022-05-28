import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <IconContext.Provider value={{ size: 30 }}>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/piotr-zawadzki-177042135/"><BsLinkedin /></a>
            <a href="https://github.com/phszawadzki"><FaGithub/></a>
            <a href="https://www.dribbble.com/"><FaDribbble/></a>
        </div>
        </IconContext.Provider>
    </footer>
  )
}

export default Footer