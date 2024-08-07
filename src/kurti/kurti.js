import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './kurti.css';
import { data } from './kurti-jsx/kurti.jsx';
import Footer from '../footer';
import Navbar from '../navbar';

export default function Kurti() {
  return (
    <div>
      <Navbar/>
      <div className='left-right'>
        <div className='leftside'>
          <div className='filter0'>
            <h2>Filter</h2>
            <div className='filter'>
              <h5>CATEGORIES</h5>
              <p>Clothing and Accessories</p>
              <p>Kurtas, Ethnic Sets and more</p>
              <h5>Kurtas</h5>
              <p>Men's Kurtas</p>
              <p>Kid's Kurtas</p>
              <p>Women's Kurtas</p>
            </div>
            <div className='brand'>
              <h5>BRAND</h5>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type='search' placeholder='Search Brand' className='search2'></input>
            </div>
          </div>
        </div>
        <div className='rightside'>
          <Container>
            <Row>
              {data.map((v) => {
                return (
                  <Kurtipro key={v.title} product={v} />
                )
              })}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Kurtipro({ product }) {
  return (
    <div className='mb-4 col-lg-3'>
      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={product.image} height={300} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.size}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" className='button-cart'>{product.cart}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export { Kurtipro };