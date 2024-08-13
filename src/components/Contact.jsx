import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
   <div className='container contact' id='contact'>
    <h1>CONTACT ME</h1>
    <div className="contact-icon"
     data-aos="zoom-in-up"
     data-aos-duration="1000">
      <a href='https://www.instagram.com/' target='_blank' className="items">
      <FiInstagram className='icons' />
      </a>
      <a href='https://www.linkedin.com/' target='_blank' className="items">
      <FaLinkedin className='icons'/>

      </a>
      <a href='https://www.facebook.com/' target='_blank' className="items">
      <FaFacebook className='icons'/>

      </a>
      <a href='https://www.github.com/' target='_blank' className="items">
      <FaGithub className='icons'/>
      </a>
      
      <a href='https://www.twitter.com/' target='_blank' className="items">
      <FaTwitter className='icons'/>


      </a>

      <a href='mailto:webdevmastery@gmail.com' target='_blank' className="items">
      <MdEmail className='icons'/>

      </a>
    </div>
   </div>
  )
}

export default Contact
