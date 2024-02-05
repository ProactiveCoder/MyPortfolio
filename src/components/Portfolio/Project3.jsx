// import React from 'react'
import fablab from "../../assets/fablab1.png"
import github from "../../assets/github.png"
import link from "../../assets/link.png"
import style from './Portfolio.module.css'

function Projects() {
  return (
    <>
    <div className={style.projectmain1} >
        <div>
            <img className={style.projectimg1} src={fablab} alt="" />
        </div>
        <div>
        <h3 className={style.projectheading}>Dashboard</h3>
        <p className={style.projectpaga}>I made Dashboard for a fablab club </p>
        <span className={style.projectspan}> HTML</span><span className={style.projectspan}> Css</span><span className={style.projectspan}> Javascript</span><br />
       <div className={style.linka}>
       <a className={style.codelink} href="https://github.com/ProactiveCoder/SOAFABLAB-Dashboard-Design" target="_blank" rel="noopener noreferrer">code <img className={style.projectlogo} src={github} alt="" /></a>
        <a className={style.codelink} href="https://proactivecoder.github.io/SOAFABLAB-Dashboard-Design/" target="_blank" rel="noopener noreferrer">Demo <img className={style.projectlogo} src={link} alt="" /></a>
       </div>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Projects