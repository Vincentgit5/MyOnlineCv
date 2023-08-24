import React from 'react'
import { BsPatchCheck } from "react-icons/bs";
import './experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h5>TThe skils i have</h5>
      <h2>May experience</h2>

      <div className='container experience__container'>
        <div className="expreience__bfrontend">
          <h3>Frontend Development</h3>
          <div className="experience__containt">
            <article className='experience__details'>
            <BsPatchCheck  className='experience__details_icons'/>
            <div>
                <h4>React.js</h4>
                <small className='text-light'>Pending (GDT Yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck  className='experience__details_icons'/>
            <div>
                <h4>React Native</h4>
                <small className='text-light'>Pending (GDT Yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>HTML</h4>
                <small className='text-light'>experience (FreeLance)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>CSS</h4>
                <small className='text-light'>experience (FreeLance)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
               <h4>Boostrap</h4>
               <small className='text-light'>experience (FreeLance)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>Reac-Native</h4>
                <small className='text-light'>Pending (GDT Younde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>Flutter</h4>
                <small className='text-light'>Pending (ITS Yaounde)</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__containt">
          <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Pending (FreeLance)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/> 
            <div>
                <h4>Odoo</h4>
                <small className='text-light'>Intermediate: (ITS yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>Node.js</h4>
                <small className='text-light'>experience (GDT Yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>Symfony </h4>
                <small className='text-light'>experience (GDT Yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>Python</h4>
                <small className='text-light'>Pending (ITS Yaounde)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>DevOps</h4>
                <small className='text-light'>Pending (FreeLance)</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basique </small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheck className='experience__details_icons'/>
            <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate (ITS Yaounde)</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience