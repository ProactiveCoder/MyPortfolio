// import React from 'react'
import foodcourt from "../../assets/foodcourt1.png"
import github from "../../assets/github.png"
import link from "../../assets/link.png"
import style from './Portfolio.module.css'

function Projects() {
  return (
    <>
    <div className={style.projectmain2} >
        <div>
            <img className={style.projectimg2} src={foodcourt} alt="" />
        </div>
        <div>
        <h3 className={style.projectheading}>Food Court</h3>
        <p className={style.projectpaga}>I made this website for Orisha startup <br /> Hackthon for manage the crowd of food court</p>
        <span className={style.projectspan}> React</span><span className={style.projectspan}> Css</span><br />
        <div className={style.linka}>
        <a className={style.codelink} href="https://github.com/ProactiveCoder/FoodCourt" target="_blank" rel="noopener noreferrer">code <img className={style.projectlogo} src={github} alt="" /></a>
        <a className={style.codelink} href="https://proactivecoder.github.io/FoodCourt/" target="_blank" rel="noopener noreferrer">Demo <img className={style.projectlogo} src={link} alt="" /></a>
        </div>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Projects