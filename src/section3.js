import './section3.css';

export default function Section3(){
    return (
        <div class="section3">
            <div class="product-item">
                <div class="item1"><img src={require('./image/blockbuster.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbusterboy.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbustershoes.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbusterkurt.jpg')}></img></div>
            </div>
            <div class="product-item">
                <div class="item1"><img src={require('./image/blockbustersendale.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbusterpurse.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbusterkitchen.jpg')}></img></div>
                <div class="item1"><img src={require('./image/blockbusterchildren.jpg')}></img></div>
            </div>
        </div>
    );
}
