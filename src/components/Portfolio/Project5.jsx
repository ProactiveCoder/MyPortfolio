// import React from 'react'
import bfoodcourt from "../../assets/bfoodcourt1.png"
import github from "../../assets/github.png"
import link from "../../assets/link.png"
import style from './Portfolio.module.css'

function Projects() {
  return (
    <>
    <div className={style.projectmain1} >
        <div>
            <img className={style.projectimg1} src={bfoodcourt} alt="" />
        </div>
        <div>
        <h3 className={style.projectheading}>Food Court</h3>
        <p className={style.projectpaga}>I made this frontend site using  Bootstrap</p>
        <span className={style.projectspan}> HTML</span><span className={style.projectspan}> Css</span><span className={style.projectspan}> Javascript</span>
        <div className={style.linka}>
        <a className={style.codelink} href="https://github.com/ProactiveCoder/FoodCourtBootstrap" target="_blank" rel="noopener noreferrer">code <img className={style.projectlogo} src={github} alt="" /></a>
        <a className={style.codelink} href="https://proactivecoder.github.io/FoodCourtBootstrap/" target="_blank" rel="noopener noreferrer">Demo <img className={style.projectlogo} src={link} alt="" /></a>
        </div>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Projects