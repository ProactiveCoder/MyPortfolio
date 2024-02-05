// import React from 'react'
import style from "./Contact.module.css";
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import address from "../../assets/address.png";
function Contact() {
  return (
    <>
      <div className={style.main} id="contact">
        <h1>Contact Us</h1>
        <div className={style.Contact}>
          <div className={style.form}>
            <input type="name" name="" id="mail" placeholder="Your Name" />{" "}
            <br />
            <input
              type="email"
              name=""
              id="mail"
              placeholder="Your Email"
            />{" "}
            <br />
            <input
              type="number"
              name=""
              id="mail"
              placeholder="Your Phone"
            />{" "}
            <br />
            <textarea placeholder="Your message" /> <br />
            <button className={style.btn}>Contact Us</button>
          </div>
          <div className={style.form2}>
            <div className={style.one}>
              <div>
                <img className={style.logo} src={mail} alt="" />
              </div>
              <div>
                <h3 className={style.logop}>Email</h3>
                <p className={style.logop}>its.prabhat00@gmail.com</p>
              </div>
            </div>
            <div className={style.one}>
              <div>
                <img className={style.logo} src={call} alt="" />
              </div>
              <div>
              <h3 className={style.logop}>Call Me</h3>
            <p className={style.logop}>9135308144</p>
              </div>
            </div>
            <div className={style.one}>
              <div>
                <img className={style.logo} src={address} alt="" />
              </div>
              <div >
              <h3 className={style.logop}>Address</h3>
            <p className={style.logop}>Sitamarhi, Bihar, India </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
