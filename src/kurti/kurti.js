import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './kurti.css';
// kurti-jsx
import { data } from './kurti-jsx/kurti'
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
              <p>Clothing and Accessorie...</p>
              <p>Kurtas, Ethnic Sets and ....</p>
              <h5>Kurtas</h5>
              <p>Men's Kurtas</p>
              <p>Kid's Kurtas</p>
              <p>Women's Kurtas</p>
            </div>
            <div className='brand'>
              <h5>BRAND</h5>
              <i class="fa-solid fa-magnifying-glass"></i><input type='search' placeholder='Search Brand' className='search2'></input>
              {/* <Form>
              <input type="checkbox">W</input>
              <input type='radio'>BIBA</input>
              <input type='checkbox'>Aurelia</input>
              <input type='checkbox'>Indo Era</input>
              </Form> */}
            </div>
            {/* <div className='gender'>
              <h5>GENDER</h5>
              <input type='checkbox'>Men</input>
              <input type='checkbox'>Women</input>
              <input type='checkbox'>Girls</input>
            </div> */}
            {/* <div className='dis'>
              <h5>DISCOUNT</h5>
              <input type='checkbox'>30% or more</input>
              <input type='checkbox'>40% or more</input>
              <input type='checkbox'>50% or more</input>
              <input type='checkbox'>60% or more</input>
              <input type='checkbox'>70% or more</input>
            </div> */}
            {/* <div className='size'>
              <h5>Size</h5>
              <input type='checkbox'>3XS</input>
              <input type='checkbox'>2XS</input>
              <input type='checkbox'>XS</input>
              <input type='checkbox'>S</input>
              <input type='checkbox'>M</input>
              <input type='checkbox'>L</input>
              <input type='checkbox'>XL</input>
              <input type='checkbox'>X</input>
            </div> */}

          </div>

        </div>
        <div className='rightside'>
          <Container>
            <Row>
              {data.map((v, i) => {
                return (
                  <Kurtipro product={v} />
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

function Kurtipro(kurta) {
  return (
    <div className='mb-4 col-lg-3'>
      <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={kurta.product.image} height={300} />
        <Card.Body>
          <Card.Title>{kurta.product.title}</Card.Title>
          <Card.Text>
            {kurta.product.discription}
          </Card.Text>
          <Card.Text>
            {kurta.product.size}
          </Card.Text>
          <Card.Text>
            {kurta.product.price}
          </Card.Text>
          <Button variant="primary" className='button-cart'>{kurta.product.cart}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
export {Kurtipro};

