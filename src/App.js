import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const headerLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Fredrika Sundell',
      home: {
        title: 'Hej',
        subTitle: 'Projects',
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Contact me',
      },
    }
  }

  render() {
    return (
      <Router>
        <Header title={this.state.title} headerLinks={headerLinks} />

        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
            />
          )}
        />

        <Route
          path="/about"
          render={() => <AboutPage title={this.state.about.title} />}
        />

        <Route
          path="/contact"
          render={() => <ContactPage title={this.state.contact.title} />}
        />

        <Footer />
      </Router>
    )
  }
}

export default App
