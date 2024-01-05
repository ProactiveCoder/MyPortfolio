// import React from 'react'
import style from './Hero.module.css'
import mypic from "../../assets/mypic.png"

function Hero() {
  return (
    <div className={style.containt} id='home'>
        <div>
          <span className={style.first}>Hello, My Name is </span>
          <br />
          <span className={style.second}>Prabhat</span><br />
          <span className={style.third}>full-Stack Developer</span><br />
          <span className={style.third}>App Developer</span><br />
          <span className={style.third}>Coder</span><br />
          <p className={style.third}>I design and develop services for customers of all sizes,<br /> specializing in creating stylish, modern websites, web services <br/> and online stores.</p>
          
        </div>
        <div>
            <img className={style.img} src={mypic} alt="" />
        </div>
    </div>
  )
}

export default Hero