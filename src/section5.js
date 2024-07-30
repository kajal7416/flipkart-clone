import './section5.css';

function Section5(){
    return (
        <div class="section5">
            <div class="section5-box1">
                <h1>Featured Brands</h1>
                <div id="carouselExampleInterval" class="carousel slide slide-ky1" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        <div class="caritem">
        <img src={require('./image/brand.jpg')}></img>
        <img src={require('./image/brands2.jpg')}></img>
        <img src={require('./image/brands3.jpg')}></img>
        </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class="caritem">
        <img src={require('./image/brands5.jpg')}></img>
        <img src={require('./image/brands6.jpg')}></img>
        <img src={require('./image/brands7.jpg')}></img>

        </div>
    </div>
    <div class="carousel-item">
    <div class="caritem">
        <img src={require('./image/brands8.jpg')}></img>
        <img src={require('./image/brands9.jpg')}></img>
        <img src={require('./image/brands10.jpg')}></img>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
            </div>
            <div class="section5-box2"><img src={require('./image/watch1.jpg')}></img></div>

        </div>

    );
}

export default Section5;


