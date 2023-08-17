import React from 'react'
import "./Contact.css"
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <div className='contact'>
    <div>
        <h3>Contact Us</h3></div>
        <div>
        <IoIosCall className='icon1'/>
            <HiOutlineMail className='icon2'/>
            <BsWhatsapp className='icon3'/>
        </div>
    </div>
  )
}

export default Contact