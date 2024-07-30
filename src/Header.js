import './Header.css';
import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom"




function Header() {
    const [isActive, setIsActive] = useState('false');
    const ToggleClass = () => {
        setIsActive(!isActive);
    };
    return (
        <div class="header-section">
            <div class="header2">
                <div class="div1">
                    <div class="grocery"><Link to="/grocery/grocery"><img src={require('./image/img1.jpg')}></img></Link>
                        <h4>Grocery</h4>
                    </div>
                    <div class="phone"><Link to="/mobile/mobile"><img src={require('./image/phone1.jpg')}></img></Link>
                        <h4>Mobiles</h4>
                    </div>
                    <div class="fashion"><img src={require('./image/fashion.jpg')}></img>
                        <h4>Fashion<i class="fa-solid fa-angle-down"></i></h4>
                        <div class="dropdown1">
                            <div class="box1">
                                <ul>
                                    <li class="overlay"><Link to="/kurti/kurti">Kurti</Link>
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                    <li class="overlay1">Men's Bottom Wear
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                    <li class="overlay2">Kids
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                    <li class="overlay3">Men Footwear
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                    <li class="overlay4">Women Footwear
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                    <li class="overlay4">Winter
                                        <div class="box2"><ul><li>All</li>
                                            <li>Men's T-shirts</li>
                                            <li>Men's Kurta</li>
                                            <li>Men's Suit</li></ul></div>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div class="electronics"><Link to="/electronic/electronic"><img src={require('./image/electronics.jpg')}></img></Link>
                        <h4>Electronics<i class="fa-solid fa-angle-down"></i></h4>
                        <div class="dropdown2">
                            <div class="box3">
                                <ul>
                                    <li class="overlay1">Audio
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Electronics GST Store
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Cameras & Accessories
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Computer Peripherals
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Gaming
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay4">Health & Personal
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Laptop And Desktop
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Mobiles Accessory
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div>
                                    </li>
                                    <li class="overlay2">Powerbank
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div></li>
                                    <li class="overlay2">Smart Home automation
                                        <div class="box4"><ul>
                                            <li>More in Audio</li>
                                            <li>All</li>
                                            <li>Blutooth Headphones</li>
                                            <li>Wire Headphones</li>
                                            <li>True Wireless Earbuds</li>
                                            <li>Bluetooth Speakers</li>
                                            <li>Soundbars</li>
                                            <li>Home Theatres</li>
                                            <li>TV Streaming Device</li>
                                            <li>Remote Control</li>
                                            <li>DTH Set top box</li>
                                            <li>Headphones Pouch & Case Covers</li>
                                        </ul> </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="furniture"><img src={require('./image/furniture.jpg')}></img>
                        <h4>Furniture<i class="fa-solid fa-angle-down"></i></h4>
                        <div class="dropdown2">
                            <div class="box3">
                                <ul>
                                    <li class="overlay1">Home Furnishings
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="overlay2">Furniture Studio
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="overlay2">Living Room Furniture
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="overlay2">Kitchen & Dining
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Bedroom Furniture
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Space Saving Furniture
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Home Decor
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Tools & Utility
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Work Space
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Kids Furniture
                                        <div class="box4">
                                            <ul>
                                                <li>More in Home Furniture</li>
                                                <li>All</li>
                                                <li>Blankets</li>
                                                <li>Bedsheets</li>
                                                <li>Curtains & Accessories</li>
                                                <li>Bath linen</li>
                                                <li>Floor coverings</li>
                                                <li>Cushions & Pillows</li>
                                                <li>Kitchen Linen Sets</li>
                                                <li>Table Linen Sets</li>
                                            </ul>
                                        </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="appliances"><img src={require('./image/appliances.jpg')}></img>
                        <h4>Appliances</h4>
                    </div>
                    <div class="travel"><img src={require('./image/travel.jpg')}></img>
                        <h4>Travel</h4>
                    </div>
                    <div class="toy"><img src={require('./image/toy.jpg')}></img>
                        <h4>Beauty & Toys<i class="fa-solid fa-angle-down"></i></h4>
                        <div class="dropdown2">
                            <div class="box3">
                                <ul>
                                    <li class="overlay1">Beauty & Personal Care
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Men's Grooming
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Food & Drinks
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Nutrition & Health Care
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Baby Care
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Toys & School Supplies
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Books
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Music
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>
                                    <li class="overlay2">Stationery & Office Supplies
                                        <div class="box4">
                                            <ul>
                                                <li>More in Beauty & Personal Care</li>
                                                <li>View All</li>
                                                <li>Bath & Oral Care</li>
                                                <li>Personal Hygiene</li>
                                                <li>Eye Makeup</li>
                                                <li>Face Makeup</li>
                                                <li>Lip Makeup</li>
                                                <li>Hair Care</li>
                                                <li>Bath Essentials</li>
                                                <li>Body & Skin Care</li>
                                            </ul>
                                        </div></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="wheelers"><img src={require('./image/wheelers.jpg')}></img>
                        <h4>Wheelers<i class="fa-solid fa-angle-down"></i></h4>
                        <div class="dropdown2">
                            <div class="box3">
                                <ul>
                                    <li>Petrol Vehicles</li>
                                    <li>Electric Vehicles</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="div2">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={require('./image/smartphone.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="caption1">
                                </div>

                            </div>
                            <div class="carousel-item">
                                <img src={require('./image/fur.png')} class="d-block w-100" alt="..."></img>

                            </div>
                            <div class="carousel-item">
                                <img src={require('./image/smarttv.jpg')} class="d-block w-100" alt="..."></img>

                            </div>
                            <div class="carousel-item">
                                <img src={require('./image/kurti3.jpg')} class="d-block w-100" alt="..."></img>

                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* product */}
                    <div class="product">
                        <div class="content1">
                            <div class="product-img"><img src={require('./image/tv2.jpg')}></img></div>
                            <div class="product-content">
                                <h2>Gaming Laptops</h2>
                                <h1>Min. 50% OFF</h1>
                            </div>

                        </div>
                        <div class="content1">
                            <div class="product-img"><img src={require('./image/shoes.jpg')}></img></div>
                            <div class="product-content">
                                <h2>Men's Casual Shoes</h2>
                                <h1>Min. 70% OFF</h1>
                            </div>

                        </div>
                        <div class="content1">
                            <div class="product-img"><img src={require('./image/shirt.jpg')}></img></div>
                            <div class="product-content">
                                <h2>Men's T-shirts</h2>
                                <h1>Min. 50% OFF</h1>
                            </div>

                        </div>
                        <div class="content1">
                            <div class="product-img"><img src={require('./image/camera.jpg')}></img></div>
                            <div class="product-content">
                                <h2>Camera</h2>
                                <h1>Min. 70% OFF</h1>
                            </div>

                        </div>
                        <div class="content1">
                            <div class="product-img"><img src={require('./image/neckless.jpg')}></img></div>
                            <div class="product-content">
                                <h2>Nechless</h2>
                                <h1>Min. 70% OFF</h1>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Header;




{/* <Menu>
<div class="loginsignup"><p>Login & Signup</p></div>
 <div class="zone1"><i class="fa-solid fa-bolt"></i><p>SuperCoin Zone</p></div>
 <div class="plus-zone"><i class="fa-regular fa-star"></i><p>Flipkart Plus Zone</p></div>
 <div class="all-category"><i class="fa-solid fa-table-cells-large"></i><p>All categories</p></div>
 <div class="more-flipkart"><i class="fa-brands fa-buromobelexperte"></i><p>More On Flipkart</p></div>
 <div class="offer1"><i class="fa-solid fa-percent"></i><p>Offer Zone</p></div>
 <div class="sell"><i class="fa-solid fa-bag-shopping"></i><p>Sell on Flipkart</p></div>
 <div class="order1"><i class="fa-solid fa-cart-arrow-down"></i><p>My Order</p></div>
 <div class="coupons"><i class="fa-solid fa-ticket-simple"></i><p>Coupons</p></div>
 <div class="carts"><i class="fa-solid fa-cart-plus"></i><p>My Carts</p></div>
 <div class="wishlist"><i class="fa-solid fa-heart"></i><p>My Wishlist</p></div>
 <div class="account1"><i class="fa-solid fa-user"></i><p>My Account</p></div>
 <div class="notification"><i class="fa-regular fa-bell"></i><p>Notifications</p></div>
 <div class="notification1"><p>Notification Preference</p></div>
 <div class="help1"><p>Help Center</p></div>
 <div class="Legal"><p>Legal</p></div>
</Menu> */}