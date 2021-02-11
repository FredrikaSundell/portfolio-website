import React from 'react'

import Card from '../Card/Card'
import './Projects.css'

import quire from '../../assets/images/quire.png'
import todo from '../../assets/images/todo.png'
import portfolio from '../../assets/images/portfolio.png'

class Projects extends React.Component {
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
            'https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/',
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

  render() {
    return (
      <div className="projects">
        {this.state.items.map((item) => {
          return (
            <Card
              item={item}
              click={(e) => this.handleCardClick(item.id, e)}
              key={item.id}
            />
          )
        })}
      </div>
    )
  }
}

export default Projects
