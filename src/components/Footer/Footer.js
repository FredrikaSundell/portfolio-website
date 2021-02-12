import React from 'react'

import WeatherHook from '../WeatherHook'
import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer">
      <WeatherHook />
      Skapad av Fredrika Sundell.
    </footer>
  )
}

export default Footer
