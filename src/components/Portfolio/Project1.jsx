// import React from 'react'
import qr1 from "../../assets/qrcode1.png";
import github from "../../assets/github.png";
import link from "../../assets/link.png";
import style from "./Portfolio.module.css";

function Projects() {
  return (
    <>
      <div className={style.projectmain1}>
        <div>
          <img className={style.projectimg1} src={qr1} alt="" />
        </div>
        <div>
          <h3 className={style.projectheading}>QR Code</h3>
          <p className={style.projectpaga}>
            This website generate a qr code for any words and sentences
          </p>
          <span className={style.projectspan}> HTML</span>
          <span className={style.projectspan}> Css</span>
          <span className={style.projectspan}> Javascript</span>
          
          <div className={style.linka}>
            <a
              className={style.codelink}
              href="https://github.com/ProactiveCoder/QR-Generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              code <img className={style.projectlogo} src={github} alt="" />
            </a>
            <a
              className={style.codelink}
              href="https://proactivecoder.github.io/QR-Generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo <img className={style.projectlogo} src={link} alt="" />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Projects;
