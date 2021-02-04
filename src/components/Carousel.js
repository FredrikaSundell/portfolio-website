import React from 'react'

import Card from '../components/Card'

import quire from '../assets/images/quire.png'
import todo from '../assets/images/todo.png'
import portfolio from '../assets/images/portfolio.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Quire',
          subTitle: 'Notebook - a group project built for KYH Yrkeshögskola.',
          imgSrc: quire,
          link:
            'https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip',
          selected: false,
        },
        {
          id: 1,
          title: 'Todo',
          subTitle: 'An unstyled todo-app made with JavaScript.',
          imgSrc: todo,
          link: 'https://fredrikasundell.github.io/todo-app/',
          selected: false,
        },
        {
          id: 2,
          title: 'Portfolio',
          subTitle:
            'Portfolio - first project ever done (built for KYH Yrkeshögskola) with HTLM, CSS and JavaScript.',
          imgSrc: portfolio,
          link: 'https://fredrikasundell.github.io/IP1/',
          selected: false,
        },
      ],
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false
      }
    })

    this.setState({
      items,
    })
  }

  makeItems = (items) => {
    return items.map(item => {
      return (
        <Card
          item={item}
          onClick={(e => this.handleCardClick(item.id, e))}
          key={item.id}
        />
      )
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}

export default Carousel
