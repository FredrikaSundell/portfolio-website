import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header(props) {
  return (
    <header className="main-header">
      <Link className="logo" to="/">
        {props.title}
      </Link>
      <nav>
        <ul>
          {props.headerLinks.map(function (link) {
            return (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
