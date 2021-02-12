import React from 'react'
import linkedInImage from '../../assets/images/linked_in.png'
import githubImage from '../../assets/images/github.png'

import './ContactPage.css'

function ContactPage() {
  return (
    <div className="ContactPage">
      <ul>
        <li>
          <p>fredrikasundell@hotmail.com</p>
        </li>
        <li>
          <a
            href="https://www.Linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInImage} alt="LinkedIn logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.Github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImage} alt="Github logo" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactPage
