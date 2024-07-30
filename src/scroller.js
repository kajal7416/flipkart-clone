import './scroller.css';

function Scroller(){
    return (
        <div class="scroll">
            <h2>Top Deals On Appliances</h2>
        <div class="scroller">
            
            <div class="product2">
          <div class="product-img3"><img src={require('./image/kitchen1.jpg')}></img></div>
          <div class="product-product1">
            <h2>Kitchen Essential</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/cooler1.jpg')}></img></div>
          <div class="product-product1">
            <h2>Air Coolers</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/gril.jpg')}></img></div>
          <div class="product-product1">
            <h2>Microwave grill</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/miture.jpg')}></img></div>
          <div class="product-product1">
            <h2>Mixer Grinder</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img4"><img src={require('./image/gas.jpg')}></img></div>
          <div class="product-product1">
            <h2>Top 3 Burner Gas Stove</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/fan.jpg')}></img></div>
          <div class="product-product1">
            <h2>Energy Efficient Fans</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/washing1.jpg')}></img></div>
          <div class="product-product1">
            <h2>Best Selling Washing Machine</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        <div class="product2">
          <div class="product-img3"><img src={require('./image/cooker.jpg')}></img></div>
          <div class="product-product1">
            <h2>Cookware</h2>
            <h3>Shop Now</h3>
          </div>
        </div>
        
        </div>
        </div>

    );
}

export default Scroller;