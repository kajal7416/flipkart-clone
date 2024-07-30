import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(
        <footer>
        <div class="footer1">
        <div class="about1">
            <h6>Contact Us</h6>
            <li class="contact">Contact US</li>
            <li class="contact"><Link to="/about/about-page">About Us</Link></li>
            <li class="contact">Careers</li>
            <li class="contact">Flipkart Stories</li>
            <li class="contact">Press</li>
            <li class="contact">Corporate Information</li>
        </div>
        <div class="company">
        <h6>Company</h6>

            <li class="contact">Myntra</li>
            <li class="contact">Flipkart Wholesale</li>
            <li class="contact">Cleartrip</li>
            <li class="contact">Shopsy</li>
        </div>
        <div class="help">
        <h6>HELP</h6>

            <li class="contact">Payments</li>
            <li class="contact">Shipping</li>
            <li class="contact">Cancellation & Returns</li>
            <li class="contact">FAQ</li>
            <li class="contact">Report Infringement</li>
        </div>
        <div class="policy">
        <h6>CONSUMER POLICY</h6>
            <li class="contact">Cancellation & Returns</li>
            <li class="contact">Terms Of Use</li>
            <li class="contact">Security</li>
            <li class="contact">Privacy</li>
            <li class="contact">Sitemap</li>
            <li class="contact">Grievance Redressal</li>
        </div>
        <div class="mail">
        <h6>Mail US:</h6>
            <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahlli Village, Karnataka, India</p>
            <div class="social">
                <div class="facebook"><i class="fa-brands fa-square-facebook"></i></div>
                <div class="facebook"><i class="fa-brands fa-square-twitter"></i></div>
                <div class="facebook"><i class="fa-brands fa-square-youtube"></i></div>
            </div>
        </div>
        <div class="registred">
            <h6>Registered Office Address:</h6>
             <p>Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahlli Village, Karnataka, India</p>
             <p>Telephone: <span>044-45614700</span></p>

        </div>

        </div>
        <div class="footer2">
        <div class="seller">Become Seller</div>
        <div class="advertise">Advertise</div>
        <div class="cards">Gift Cards</div>
        <div class="help-center">Help Center</div>
        <div class="strt-date">@2007-2024 Flipkart.com</div>
        <div class="pay"><img src={require('./image/payment-method.jpg')}></img></div>
        </div>
        </footer>
    );  
}
export default Footer;


