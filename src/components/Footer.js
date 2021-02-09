import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WeatherHook from './WeatherHook'

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">

          <WeatherHook />
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Made by Fredrika Sundell.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
