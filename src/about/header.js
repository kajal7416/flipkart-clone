import './header.css';
import { Link } from "react-router-dom";


function Header1(){
    return(
        <div>
            <div class="header3">
              <div class="logo1"><Link to="/"><img src={require('../image/flipkartlogo-removebg-preview.png')}></img></Link></div>
              <div class="header-content">
                 <div class="about"><Link to="/about/about-page">About</Link></div>
                 <div class="ethics">Ethics</div>
                 <div class="culture">Culture</div>
                 <div class="technology">Technology</div>
                 <div class="sustainbility"><Link to="/sustainbility/sustainbility-page">Sustainbility</Link></div>
                 <div class="stories">Stories</div>
                 
              </div> 
              <div class="bar2"><i class="fa-solid fa-bars"></i></div> 
            </div>
            
        </div>
    );
}

export default Header1;