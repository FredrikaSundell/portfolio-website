import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'

const headerLinks = [
  { title: 'Hem', path: '/' },
  { title: 'Om mig', path: '/about' },
  { title: 'Kontakt', path: '/contact' },
]

const home = {
  title: 'Portfolio',
  subTitle: 'Projekt skapade av mig',
}

const about = {
  title: 'Om mig',
}

const contact = {
  title: 'Kontakt',
}

function App() {
  return (
    <Router>
      <Header title="Fredrika Sundell" headerLinks={headerLinks} />

      <Route
        path="/"
        exact
        render={() => <HomePage title={home.title} subTitle={home.subTitle} />}
      />

      <Route path="/about" render={() => <AboutPage title={about.title} />} />

      <Route
        path="/contact"
        render={() => <ContactPage title={contact.title} />}
      />

      <Footer />
    </Router>
  )
}

export default App
