import React from 'react'

import './Hero.css'

function Hero(props) {
  return (
    <div className="hero">
      <h1>{props.title}</h1>
      <h3>{props.subTitle}</h3>
    </div>
  )
}

export default Hero
