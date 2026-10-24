import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'

import { useInView } from 'react-intersection-observer';

const Nav = () => {
  return (
    <nav>
        <a href="#" className='active'><AiOutlineHome/></a>
        <a href="#portfolio"><BiBookContent/></a>
        {/* <a href="#about"><AiOutlineUser/></a> */}
        <a href="#testimonials"><RiServiceLine/></a>
        {/* <a href="#"><AiOutlineMessage/></a> */}
    </nav>
  )
}

export default Nav