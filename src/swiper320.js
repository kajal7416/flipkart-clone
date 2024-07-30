import './swiperresponsive.css';


import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/kurti.jpg')}></img></div>
          <div class="product-product1">
            <h2>Kurti</h2>
            <h3>From ₹199</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
      <div class="product2">
          <div class="product-img2"><img src={require('./image/shoes2.jpg')}></img></div>
          <div class="product-product1">
            <h2>Sport Shoes</h2>
            <h3>Up To 40% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/sandle.jpg')}></img></div>
          <div class="product-product1">
            <h2>Vishundh & Tokyo Talkies</h2>
            <h3>Under ₹399</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/saree.jpg')}></img></div>
          <div class="product-product1">
            <h2>Selling Sarees</h2>
            <h3>Under ₹299</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/gogles.jpg')}></img></div>
          <div class="product-product1">
            <h2>Fastrack, Wrong, Streak</h2>
            <h3>20-70% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/pent.jpg')}></img></div>
          <div class="product-product1">
            <h2>Pepe Jeans, Levi's, Spykar</h2>
            <h3>Min. 60% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/top.jpg')}></img></div>
          <div class="product-product1">
            <h2>Western Top</h2>
            <h3>60-90% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/lipstick.jpg')}></img></div>
          <div class="product-product1">
            <h2>Beuty & Lipstick</h2>
            <h3>60-90% Off</h3>
          </div>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
