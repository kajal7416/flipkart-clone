import './section1.css';

function Section1(){
    return(
        <div class="picture">
            <div className="picture-pro-img">
                <div class="picture-img"><img src={require('./image/pic1.jpg')}></img></div>
                <div class="picture-img"><img src={require('./image/pic2.jpg')}></img></div>
                <div class="picture-img"><img src={require('./image/pic3.jpg')}></img></div>
                <div class="picture-img"><img src={require('./image/pic4.jpg')}></img></div>
            </div>
            
        </div>

    );
}

export default Section1;