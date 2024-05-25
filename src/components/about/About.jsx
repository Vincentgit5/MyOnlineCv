import React from 'react'
import './about.css'
import ME from '../../assets/vincent3.jpg'
import { FaAward } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="vincent1" />
          </div>
        </div>

          <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
             <FaAward className='about__icon'/> 
              <h5>experiences</h5>
              <small> 2 year</small>
            </article>
          
            <article className='about__card'>
             <FiUsers className='about__icon'/> 
              <h5>clients</h5>
              <small> 03 clients wordwide</small>
            </article>

            <article className='about__card'>
             <AiOutlineFundProjectionScreen className='about__icon'/> 
              <h5>projects</h5>
              <small> 5 completed </small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ab facere 
             velit reiciendis ex vel temporibus quaerat modi  dolores sequi nesciunt saepe minima 
             repellendus aperiam deleniti non quam pariatur. Officia.
          </p>

          <a href="#contact" className='btn btn-primary'> Contact me</a>
        </div>
        </div>
    </section>
  )
}

export default About