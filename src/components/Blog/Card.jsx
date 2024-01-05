// import React from 'react'
import p4 from '../../assets/portfolio4.png'
import style from './Blog.module.css'
function Card() {
  return (
    <div>
        <div className={style.container}>
            <img className={style.img} src={p4} alt="" />
            <h2 className={style.subheading}>How to Make Portfolio</h2>
            <p className={style.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt tempora repellendus mollitia ea maxime! Fugit tenetur ipsum ipsa reiciendis itaque aperiam, facere laborum beatae velit.</p>
        </div>
        
    </div>
  )
}

export default Card