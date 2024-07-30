import './aboutsection1.css';

function Aboutsection1(){
    return(
        <div class="about-section1">
            <div class="section1-about1">
                 <div class="section2-about1">
                    <div class="worker-img"><img src={require('../image/flipkartworker.jpg')}></img></div>
                    <div class="worker-content">
                        <h1>The Flipkart Group</h1>
                        <h3>The Flipkart Group is one of India's leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, Cleartrip and ANS Commerce.</h3>
                        <button>ABOUT US</button>
                    </div>
                 </div>
                
            </div>
            <div class="section1-about1">
                <h1>Ethics & Compliance</h1>
                <div class="ethics-img"><img src={require('../image/Ethics.jpg')}></img>
                <p>Building trust with Integrity. At Flipkart, every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.</p>
                <button>KNOW MORE</button>
                </div>
            </div>
            <div class="inovation">
                <div class="inovation-img">
                    <img src={require('../image/inovation.png')}></img>
                </div>
                <div class="inovation-box1">
                    <h5>TECHNOLOGY AT FLIPKART</h5>
                    <h1>INNOVATION</h1>
                    <h3>Flipkart technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</h3>
                    <button>READ MORE</button>
                </div>
            </div>
            <div class="section1-about11">
            <h1>Sustainability</h1>
                <img src={require('../image/sustainability.jpg')}></img>
                <p>The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities.</p>
                <button>KNOW MORE</button>
            </div>
            
            
        </div>
        

    );
}

export default Aboutsection1;