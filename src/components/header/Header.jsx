import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/vincent5.png'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>DJAMA VINCENT JEOL.</h1>
        <h5 className='text-light'>Web , Mobile Developer and UX Disigner</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
            <img src={ME} alt="vincent4" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header