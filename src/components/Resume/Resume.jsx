// import React from 'react'
import style from './Resume.module.css'
import Education1 from './Education1'
import Education2 from './Education2'
import Education3 from './Education3'
function Resume() {
  return (
    <div id='resume' className={style.resume}>
        <div>
            <h1>My Resume</h1>
                <h2 className={style.resumeh2}>Education</h2>
            <div className={style.eduction}>
              <Education3/>
              <Education2/>
              <Education1/>
            </div>
        </div>
    </div>
  )
}

export default Resume