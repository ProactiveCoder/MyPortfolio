// import React from 'react'
import style from './Contact.module.css'
function Contact() {
  return (
    <>
      <div className={style.Contact} id='contact'>
        <h1>Contact Us</h1>
        <div>
        <div className={style.form}>
            <input type="name" name="" id="mail" placeholder="Your Name"/> <br />
            <input type="email" name="" id="mail" placeholder="Your Email"/> <br />
            <input type="number" name="" id="mail" placeholder="Your Phone"/> <br />
            <textarea placeholder='Your message'/> <br />
            
            <button className={style.btn}>Contact Us</button>
        </div>
        
        <div className={style.link}>
            <a href="#"><img src="./image/google.png" alt=""/></a>
            <a href="#"><img src="./image/facebook.png" alt=""/></a>
            <a href="#"><img src="./image/twitter.png" alt=""/></a>
        </div>
        </div>
      </div>
      
    
    </>
  )
}

export default Contact