// import React from 'react'

import Card from "./Card"
import style from './Blog.module.css'


function Blog() {
  return (
    <div className={style.card} id="blog">
        <h1>Blog</h1>
        <div className={style.card1}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Blog