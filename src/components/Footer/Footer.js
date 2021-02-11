import React from 'react'

import WeatherHook from '../WeatherHook'
import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer">
      <WeatherHook />
      Made by Fredrika Sundell.
    </footer>
  )
}

export default Footer
