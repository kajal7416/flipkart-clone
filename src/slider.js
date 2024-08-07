import './slider.css';

function Slider(){
    return(
        <div class="slider">
            <div id="carouselExampleAutoplaying1" class="carousel slide ky" data-bs-ride="carousel">
            <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./image/background2.jpg')} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={require('./image/background1.jpg')} class="d-block w-100" alt="..."></img>

    </div>
    <div class="carousel-item">
    <img src={require('./image/background3.jpg')} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={require('./image/background4.jpg')} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
    <img src={require('./image/background5.jpg')} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

    );
}

export default Slider;