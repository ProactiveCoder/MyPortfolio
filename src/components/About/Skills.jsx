// import React from 'react'
import style from "./Skills.module.css";
import about from "../../assets/newabout.png"
import java from "../../assets/java.png"
import cplush from "../../assets/cplush.png"
import c from "../../assets/c.png"
import python from "../../assets/python.png"
import html from "../../assets/html5.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import expressjs from "../../assets/Express.png"

function Skills() {
  return (
    <div className={style.skill} id="about">
        <h1>About Me</h1>
      <div className={style.about}>
        <div>
          <img className={style.img} src={about} alt="about" />
        </div>
        <div className={style.about2}>
          <h2>Full Stack Developer</h2>
        <p className={style.about2p}>
        Hello, I'm Prabhat, a passionate full-stack developer. <br />
         With a love for coding and technology, I create impactful <br />
          web solutions. Let's connect and explore the endless possibilities <br />
           in the world of software development. Welcome to my portfolio! 👨‍💻✨
        </p>
        </div>
      </div>
      <div className={style.box}>
            <div className={style.box1}>
              <h1>Tech Stack</h1>
              <ul>
                <p className={style.skillpara}>Java <img className={style.logoimg} src={java} alt="" /></p>
                <p className={style.skillpara}>C++ <img className={style.logoimg} src={cplush} alt="" /></p>
                <p className={style.skillpara}>C <img className={style.logoimg} src={c} alt="" /></p>
                <p className={style.skillpara}>Python  <img className={style.logoimg} src={python} alt="" /></p>
                <p className={style.skillpara}>HTML <img className={style.logoimg} src={html} alt="" /></p>
                <p className={style.skillpara}>CSS <img className={style.logoimg} src={css} alt="" /></p>
                <p className={style.skillpara}>JavaScript <img className={style.logoimg} src={js} alt="" /></p>
                <p className={style.skillpara}>React <img className={style.logoimg} src={react} alt="" /></p>
                <p className={style.skillpara}>Express Js <img className={style.logoimg} src={expressjs} alt="" /></p>
              </ul>
            </div>
            {/* <div className="box1">
              <h1>Others Skills</h1>
              <ul>
                <p>Engpsh</p>
                <p>Hindi</p>
              </ul>
            </div> */}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Skills;
