// import React from 'react'
import style from "./Skills.module.css";
import about from "../../assets/about.png"

function Skills() {
  return (
    <div className={style.skill} id="about">
        <h1>About Me</h1>
      <div className={style.about}>
        <div>
          <img className={style.img} src={about} alt="about" />
        </div>
        <div className={style.about2}>
        <p>
          I am a website designer from Lousiana, with a strong focus in UI/UX
          design. I love to get new experiences and <br /> always learn from my
          surroundings. I've done more than 285 projects. You can check it
          through portfolio section <br /> on this website. I looking forward to
          any opportunities and challenges.
        </p>
        </div>
      </div>
      <div className={style.box}>
            <div className={style.box1}>
              <h1>Programming Skils</h1>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>C</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express Js</li>
              </ul>
            </div>
            {/* <div className="box1">
              <h1>Others Skills</h1>
              <ul>
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div> */}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Skills;
