// import React from 'react'
import style from './Portfolio.module.css'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import p1 from '../../assets/portfolio1.png'
import p2 from '../../assets/portfolio2.png'
import p3 from '../../assets/portfolio3.png'
import p4 from '../../assets/portfolio4.png'
import p5 from '../../assets/portfolio5.png'
import p6 from '../../assets/portfolio6.png'

function Portfolio() {
  return (
    <div id='portfolio' >
        <h1>Portfolio</h1>
        <div className={style.portfolio}>
            {/* <img className="portimg" src={p1} alt="" />
            <img className="portimg" src={p2} alt="" />
            <img className="portimg" src={p3} alt="" />
            <img className="portimg" src={p4} alt="" />
            <img className="portimg" src={p5} alt="" />
            <img className="portimg" src={p6} alt="" /> */}
            <Project1/>
            <Project2/>
            <Project3/>
            <Project4/>
            <Project5/>


        </div>
    </div>
  )
}

export default Portfolio