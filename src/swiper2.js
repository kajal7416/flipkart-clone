import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './swiper2.css';

export default function SimpleSlider1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
    <div class="swiper">
      <h2>Top Deals</h2>
        <Slider {...settings}>
          
          <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/set2.jpg')}></img></div>
          <div class="product-product1">
            <h2>Earring, Jewellery Sets</h2>
            <h3>Flat 70% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
      <div class="product2">
          <div class="product-img2"><img src={require('./image/kurti1.jpg')}></img></div>
          <div class="product-product1">
            <h2>Kurti Sets & More</h2>
            <h3>Under ₹599</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/t-shirts.jpg')}></img></div>
          <div class="product-product1">
            <h2>T-shirts,Top & More</h2>
            <h3>Min. 60% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/trackpent.jpg')}></img></div>
          <div class="product-product1">
            <h2>Men's Track Pent</h2>
            <h3>Up 50% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/lighting1.jpg')}></img></div>
          <div class="product-product1">
            <h2>Lighting Essentials</h2>
            <h3>From ₹80</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/bedsheet.jpg')}></img></div>
          <div class="product-product1">
            <h2>Bedsheet, Curtains& More</h2>
            <h3>Min. 75% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/watch.jpg')}></img></div>
          <div class="product-product1">
            <h2>Watch Straps</h2>
            <h3>Min. 50% Off</h3>
          </div>
        </div>
        </div>
        <div class="pro-item">
        <div class="product2">
          <div class="product-img2"><img src={require('./image/sendle.jpg')}></img></div>
          <div class="product-product1">
            <h2>Allen Solly & Van Heusen</h2>
            <h3>Min. 40-60% Off</h3>
          </div>
        </div>
        </div>
          
       
    </Slider>
    </div>
  );
}