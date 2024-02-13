// import React from 'react'
import style from './Hero.module.css'
import mypic from "../../assets/about.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

function Hero() {
  return (
    <div className={style.containt} id="home1">
        <div className={style.imgdiv}>
            <img className={style.img} src={mypic} alt="prabhat" />
        </div>
        <div className={style.ContaintText}>
          <span className={style.first}>Hello! </span>
          <br />
          <span className={style.second}>I'M PRABHAT</span><br />
          <span className={style.third}>Full-Stack Developer,</span>
          <span className={style.third}>App Developer,</span>
          <span className={style.third}>Coder</span>
          {/* <p className={style.third}>I design and develop services for customers of all sizes,<br /> specializing in creating stylish, modern websites, web services <br/> and online stores.</p> */}
          <div>
      <a href="https://github.com/proactivecoder" target="_blank" rel="noopener noreferrer"> <img className={style.logoimg} src={github} alt="" /></a>

      <a href="https://www.linkedin.com/in/prabaht" target="_blank" rel="noopener noreferrer"> <img className={style.logoimg} src={linkedin} alt="" /></a>
      <a href="https://www.instagram.com/_prbht" target="_blank" rel="noopener noreferrer"> <img className={style.logoimg} src={instagram} alt="" /></a>
      <a href="https://twitter.com/pr_bh_t" target="_blank" rel="noopener noreferrer"> <img className={style.logoimg} src={twitter} alt="" /></a>
    </div>
        </div>
    </div>
  )
}

export default Hero