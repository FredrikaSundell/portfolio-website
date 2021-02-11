import React from 'react'

import Projects from '../components/Projects/Projects'
import Hero from '../components/Hero/Hero'

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Projects />
    </div>
  )
}

export default HomePage
