// import React from 'react'
import './Portfolio.css'

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
        <div className='portfolio'>
            <img className="portimg" src={p1} alt="" />
            <img className="portimg" src={p2} alt="" />
            <img className="portimg" src={p3} alt="" />
            <img className="portimg" src={p4} alt="" />
            <img className="portimg" src={p5} alt="" />
            <img className="portimg" src={p6} alt="" />

        </div>
    </div>
  )
}

export default Portfolio