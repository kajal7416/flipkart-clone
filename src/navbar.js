import React from 'react'
import './Header.css';
import { useState } from 'react';

export default function Navbar() {
    const [isActive, setIsActive] = useState('false');
    const ToggleClass = () => {
        setIsActive(!isActive);
    };
  return (
    <div>
        <div class="header">
                <div class="bar">
                    <div onClick={ToggleClass}>
                        <i class="fa-solid fa-bars"></i></div>
                    <div class={!isActive ? 'navigation1 active' : 'navigation1'}>
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
                    </div>
                </div>
                <div class="logo"><img src={require('./image/flipkartlogo-removebg-preview.png')}></img></div>
                <div class="search"><i class="fa-solid fa-magnifying-glass"></i><input type="search" class="search1" placeholder="Search for Product, Brands and More"></input></div>
                <div class="login">
                    <i class="fa-regular fa-user"></i> Login <i class="fa-solid fa-angle-down"></i>
                    {/* dropdown */}
                    <div class="dropdown">
                        <h4>Sign Up</h4>
                        <ul>
                            <li class="user-item"><i class="fa-regular fa-user"></i> My Profile</li>
                            <li class="user-item"><span class="material-symbols-outlined"> familiar_face_and_zone</span> Flipkart Plus Zone</li>
                            <li class="user-item"><span class="material-symbols-outlined">orders</span> Orders</li>
                            <li class="user-item"><i class="fa-regular fa-heart"></i> Wishlist</li>
                            <li class="user-item"><i class="fa-solid fa-gift"></i> Rewards</li>
                            <li class="user-item"><i class="fa-brands fa-cc-paypal"></i> Gift Cards</li>
                        </ul>
                    </div>

                </div>
                <div class="cart"><i class="fa-solid fa-cart-shopping"></i> Cart</div>
                <div class="become"><span class="material-symbols-outlined">storefront</span>Become a Seller</div>
                <div class="dot"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            <div className='categories-up'>
        <div>Electronics</div>
        <div>TVs & Appliances</div>
        <div>Men</div>
        <div>Women</div>
        <div>Baby & Kids</div>
        <div>Home & Furniture</div>
        <div>Sports</div>
        <div>Flights</div>
        <div>Offer Zone</div>
      </div>
      
    </div>
  )
}
