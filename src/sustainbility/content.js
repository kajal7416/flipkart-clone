import './content.css';

function Content(){
    return (
        <div>
            <div class="herosection-img"><img src={require('../image/sustainability2.jpg')}></img></div>
            <div class="herosection-img1"><img src={require('../image/imformation.png')}></img></div>
            <div class="herosection-content">
                <div class="sustainbility-content">
                    <h1>Sustainability</h1>
                    <p>At Flipkart, our goal is to use the power of our platform for the good of people and our planet. We are driven by a mission to fulfil our responsibility to the planet and the society as we maximise our efforts to build value for the Indian consumer.<br/><br/>

As an early adopter of sustainability in the e-commerce space in India, our endeavour has been to embed sustainability across business strategies and functions. In these past couple of years, we have focused on creating a systems change through thought leadership and effective partnerships to create long term and sustained impact.<br/><br/>

We are investing in continued efforts towards developing a responsible value chain with a focus on mitigating our climate change impact through various supply chain initiatives including adoption of renewable energy, sustainable packaging, electric mobility, waste management, water stewardship and supplier engagement. As e-commerce disrupts the way people shop, our ambition is to involve all our brands and businesses in building a sustainable platform that provides our consumers with trusted ways to shop more sustainably.<br/><br/>

Through our powerful partnerships with communities, civil society organisations, and coalitions, we seek to drive positive impact with ecosystem conversations, enable cross learning and contribute to building a sustainable future for all. As we start our journey, we know that it would not be easy. We believe that it is important to develop a culture of sustainability where we can bring everyone together through our journey.</p>
                </div>
                <div class="sustainbility-img"><img src={require('../image/sus-img.png')}></img></div>
            </div>
            <div class="timeline"><img src={require('../image/Multicolor Professional Chronological Timeline Infographic (1).png')}></img></div>
            <h1>Together for the Future</h1>
            <div class="future">
            <div id="carouselExampleInterval" class="carousel slide-slide slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <div class="item1-nm">
            <div class="item1-content"><h2>#TogetherForBetter: Flipkart Group commits to Net Zero carbon emissions by 2040</h2>
            <div class="read">READ MORE</div>
</div>
            <div class="item1-img12"><img src={require('../image/slider5.jpeg')}></img></div>

        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class="item1-nm">
            <div class="item1-content"><h2>At Flipkart, sustainability extends to Green Buildings across our supply chain</h2>
            <div class="read">READ MORE</div>
</div>
            <div class="item1-img12"><img src={require('../image/slider2.jpeg')}></img></div>

        </div>
    </div>
    <div class="carousel-item">
    <div class="item1-nm">
            <div class="item1-content"><h2>In Uttarakhand, an online game on Flipkart is enabling a regenerative future</h2>
            <div class="read">READ MORE</div>
            </div>
            <div class="item1-img12"><img src={require('../image/slider3.png')}></img></div>

        </div>
    </div>
    <div class="carousel-item">
    <div class="item1-nm">
            <div class="item1-content"><h2>100% electric mobility by 2030 - Flipkart  drives towards sustainbility with EV100</h2>
            <div class="read">READ MORE</div>
            </div>
            <div class="item1-img12"><img src={require('../image/slider4.jpeg')}></img></div>

        </div>
    </div>
    <div class="carousel-item">
    <div class="item1-nm">
            <div class="item1-content"><h2>Complete electrification of e-commerce delivery fleets possible today: Flipkart Group x WBCSD report</h2>
            <div class="read">READ MORE</div>
            </div>
            <div class="item1-img12"><img src={require('../image/slider1.jpg')}></img></div>

        </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev ky1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon ky-ky" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next ky2" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon ky-ky1" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
            

            </div>

        </div>

    );
}

export default Content;

