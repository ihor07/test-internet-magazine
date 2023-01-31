import React from 'react'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import bigStar from '../assets/StarDevPage.png'

const DevicePage = () => {
  const device1 = {
    id: 1,
    name: 'Nike airmax 90 2022',
    price: 250,
    rating: 5,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR1myJNteZ_TXLHoOKKNJWYdNffUl2XNjpIuB55xmfXMmPazBzRfT7PZIhXhmYj33BSenbCUvs40w&usqp=CAc',
  }
  const description = [
    { id: 1, title: 'Color', description: 'Brown-blue' },
    { id: 2, title: 'Size', description: 'US-9, EUR-42.5' },
    { id: 3, title: 'Type', description: 'Sport' },
    { id: 4, title: 'Model year', description: '2022' },
  ]
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device1.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h3>{device1.name}</h3>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}>
              {device1.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}>
            <h3>from {device1.price} $</h3>
            <Button variant={'outline-dark'}>Add in basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
