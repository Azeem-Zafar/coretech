import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
     <h1 className='aboutHead'>Get In Touch</h1>

     <div className="container shadow-lg p-3">
        <form action="https://formspree.io/f/xgebdgaj" method='POST'>
            <label for="username" className = 'm-2'>Enter Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="username" required autocomplete="off" className = 'form-control'/>


            <label for="email" className = 'm-2'>Enter Email</label>
            <input type="email" placeholder="Enter Your Email" name="email" required autocomplete="off" className = 'form-control'/>


            <label for="message" className = 'm-2'>Enter Message</label>
            <textarea name="message" cols="30" rows="10" placeholder="Enter Message Here" autocomplete="off" className = 'form-control' required/>
            <center>  <button className="button mt-3"><span>Send</span></button></center>
           
        </form>
     </div>
    </>
  )
}

export default Contact