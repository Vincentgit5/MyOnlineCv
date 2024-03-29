import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blanc'><BsLinkedin/></a>
        <a href="https://github.com" target='_blanc'><FaGithub/></a>
        <a href="https://dribbble.com" target='_blanc'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials