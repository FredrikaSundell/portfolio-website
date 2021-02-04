import React from 'react'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Quire',
          subTitle: 'Notebook - a group project built for KYH Yrkeshögskola.',
          link:
            'https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip',
          selected: false,
        },
        {
          id: 1,
          title: 'Todo',
          subTitle: 'Todo app - made with JavaScript.',
          link: 'https://fredrikasundell.github.io/todo-app/',
          selected: false,
        },
        {
          id: 2,
          title: 'Portfolio',
          subTitle:
            'Portfolio - first project ever done (built for KYH Yrkeshögskola) with html, css and JavaScript.',
          link: 'https://fredrikasundell.github.io/IP1/',
          selected: false,
        },
      ],
    }
  }

  render() {
    return <p>Carousel Works!</p>
  }
}

export default Carousel
