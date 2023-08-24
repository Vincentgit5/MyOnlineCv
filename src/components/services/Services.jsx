import React from 'react'
import './service.css'
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offert</h5>
      <h2>My service</h2>
      <div className="container service__container">
        <article className='service'>
          <div className="service__header">
            <h3>UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Web Interfaces conception</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Mobile interface conception</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Invitation ticket</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Flyers</p>
            </li>
          </ul>
        </article>
        {/* End of UX desing */}
        
        <article className='service'>
          <div className="service__header">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Web application Developement</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Mobile application developement</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Update Web application</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>website hosting</p>
            </li>
          </ul>
        </article>

        {/* End of Web Developement */}

        <article className='service'>
          <div className="service__header">
            <h3>Contain creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Web Interfaces conception</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Mobile interface conception</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Invitation ticket</p>
            </li>
            <li>
              <BsCheck className="service__list__icon"/>
              <p>Flyers</p>
            </li>
          </ul>
        </article>
        </div>
    </section>
  )
}

export default Services