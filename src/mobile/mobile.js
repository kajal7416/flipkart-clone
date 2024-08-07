import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './mobile.css';
// kurti-jsx
import {mobile} from '../kurti/kurti-jsx/kurti';
import { Kurtipro } from '../kurti/kurti';
import Footer from '../footer';
import Navbar from '../navbar';


export default function Mobile() {
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
            </div>
            
            
           

          </div>

        </div>
        <div className='rightside'>
          <Container>
            <Row>
              {mobile.map((v, i) => {
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

