import './section.css';

function Section(){
    return(
        <div class="section">
            <h1>Furniture & Mattresses <span><i class="fa-solid fa-chevron-right"></i></span></h1>
            <div class="section1">
                <div class="product1">
                    <div class="product-img1"><img src={require('./image/sofa.jpg')}></img></div>
                    <div class="product-content">
                        <p>Sofa</p>
                        <h4>From ₹18,600</h4>
                    </div>
                </div>
                <div class="product1">
                <div class="product-img1"><img src={require('./image/laptoptable.jpg')}></img></div>
                    <div class="product-content">
                        <p>Portable Laptop Table</p>
                        <h4>From ₹399</h4>
                    </div>
                </div>
                <div class="product1">
                <div class="product-img1"><img src={require('./image/kabat.jpg')}></img></div>
                    <div class="product-content">
                        <p>Wardrobes</p>
                        <h4>From ₹4,999</h4>
                    </div>
                </div>
                <div class="product1">
                <div class="product-img1"><img src={require('./image/shoes1.jpg')}></img></div>
                    <div class="product-content">
                        <p>Shoes Rack</p>
                        <h4>From ₹2,499</h4>
                    </div>
                </div>
                <div class="product1">
                <div class="product-img1"><img src={require('./image/temple.jpg')}></img></div>
                    <div class="product-content">
                        <p>Portable Laptop Table</p>
                        <h4>From ₹299</h4>
                    </div>
                </div>
                <div class="product1">
                <div class="product-img1"><img src={require('./image/tvunits.jpg')}></img></div>
                    <div class="product-content">
                        <p>TV Units</p>
                        <h4>From ₹12,599</h4>
                    </div>
                </div>
            </div>
            <div class="section2">
                
            </div>
        </div>
    );
}

export default Section;