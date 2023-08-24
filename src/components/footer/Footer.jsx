import React from 'react'
import './footer.css'
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { LiaSkype } from "react-icons/lia";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vincent</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Conact</a></li>
      </ul>
      <div className="footer__social">
      <a href="https://skype.com"><LiaSkype/></a>
        <a href="https://m.me/njjjoel.djamavincent"><BiLogoFacebook/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; vincentjoeld@gmail.com</small>
      </div>

    </footer>
  )
}

export default Footer