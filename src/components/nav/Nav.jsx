import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href=" # " onClick={()=>setactiveNav(" # ")} className= {activeNav === " # " ? "active" : " "}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactiveNav('#about')} className= {activeNav === "#about" ? "active" : " "}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setactiveNav("#experience")} className= {activeNav === "#experience" ? "active" : " "}><BsBook/></a>
      <a href="#services" onClick={()=>setactiveNav("#services")} className= {activeNav === "#services" ? "active" : " "}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setactiveNav("#contact")} className= {activeNav === "#contact" ? "active" : " "}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav