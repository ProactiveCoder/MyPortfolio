// import React from 'react'
import disaster from "../../assets/disaster1.png"
import github from "../../assets/github.png"
import link from "../../assets/link.png"
import style from './Portfolio.module.css'

function Projects() {
  return (
    <>
    <div className={style.projectmain2} >
        <div>
            <img className={style.projectimg2} src={disaster} alt="" />
        </div>
        <div>
        <h3 className={style.projectheading}>Disaster Management</h3>
        <p className={style.projectpaga}>I made this website for smart India <br /> Hackthon for for disater management</p>
        <span className={style.projectspan}> React</span><span className={style.projectspan}> Css</span><br />
        <div className={style.linka}>
        <a className={style.codelink} href="https://github.com/ProactiveCoder/sih-frontend" target="_blank" rel="noopener noreferrer">code <img className={style.projectlogo} src={github} alt="" /></a>
        <a className={style.codelink} href="https://sih-frontend-steel.vercel.app/" target="_blank" rel="noopener noreferrer">Demo <img className={style.projectlogo} src={link} alt="" /></a>
        </div>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Projects