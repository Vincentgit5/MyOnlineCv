import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_jrlevo1', 'template_rsrvfgg', form.current, 'z-SFmYjCa6lfeJKB6')
    e.target.reset();
      
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vincentjoeld@gmail.com</h5>
            <a href="mailto:vincentjoeld@gmail.com" target="bank">Send your message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+237</h5>
            <a href="https://api.whatsapp.com/send?phone+237691678665" target="bank">Send your message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Vincent joel</h5>
            <a href="https://m.me/njjjoel.djamavincent" target="bank">Send your message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name= 'email' placeholder= 'Your Email' required/>
          <textarea name="message" rows="10" placeholder= 'Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact