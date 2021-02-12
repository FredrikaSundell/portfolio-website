import React from 'react'

import Card from '../Card/Card'
import './Projects.css'

import Quire from '../../assets/images/Quire.png'
import IP1 from '../../assets/images/IP1.png'
import WIP from '../../assets/images/WIP.png'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Quire',
          subTitle:
            'Anteckningsapp - ett grupparbete gjort under KYHs Front End utbildning.',
          imgSrc: Quire,
          link:
            'https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/',
          selected: false,
        },
        {
          id: 1,
          title: 'Portfolio',
          subTitle:
            'Portfolio - mitt första egna projekt gjort under KYHs Front End utbildning med HTLM, CSS och JavaScript.',
          imgSrc: IP1,
          link: 'https://fredrikasundell.github.io/IP1/',
          selected: false,
        },
        {
          id: 2,
          title: 'Fler projekt pågång!',
          subTitle: 'Sidan kommer uppdateras med fler roliga projekt.',
          imgSrc: WIP,
          link:
            'https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/',
          selected: false,
        },
      ],
    }
  }

  handleCardClick = (id) => {
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
